// Death/hurt types:
// 0 -> Shot
// 1 -> Crashed into another enemy spaceship
// 2 -> Hit the spaceship

// TODO: Add vars that are saved in the code and save achievements. <- Need to do vars (including tmp vars for ingame)
// TODO: Rewards for achievements and GUI
// TODO: Take into account who fired the missile.
// TODO: Hit event gets triggered twice when spaceships crash.


vars.game.achievements = [
    {
        "id": "returnToSender",
        "info": {
            "name": "Return To Sender",
            "desc": "Lure an egg spaceship's missile and get it to hit its sender.",
            "icon": "Achv_1"
        },
        "events": [
            {
                "type": "enemy.hurt",
                "args": {
                    "type": 1
                },
                "func": function(achv, data) {
                    var spaceship1 = data.spaceship1
                    var spaceship2 = data.spaceship2
                    if (vars.game.currentPlanet != 0) {
                        return // The ids are different on other planets
                    }

                    if (! (spaceship1.vars.type == 1 || spaceship2.vars.type == 1)) { // If neither one is an egg thing then you don't get this achievement
                        return false
                    }
                    if (! (spaceship1.vars.type == 2 || spaceship2.vars.type == 2)) { // If neither one is an egg thing's missile then you don't get this achievement
                        return false
                    }
                    if (spaceship1.vars.type == 1) {
                        if (spaceship2.vars.firstTouching != spaceship1.cloneOf + "#" + spaceship1.cloneID) {
                            return false
                        }
                    }
                    else {
                        if (spaceship1.vars.firstTouching != spaceship2.cloneOf + "#" + spaceship2.cloneID) {
                            return false
                        }
                    }

                    return true // If it's passed the tests then you've earnt the achievement :)
                }
            }
        ]
    },
    // Return To Sender
    {
        "id": "intoBattle",
        "info": {
            "name": "Into Battle",
            "desc": "Begin the fight for humanity.",
            "icon": "Achv_2"
        },
        "events": [
            {
                "type": "enemy.hurt",
                "args": {},
                "func": function(achv, data) {
                    return true // Just need a spaceship to take damage
                }
            }
        ]
    },
    // Into battle
    {
        "id": "shallNotPass",
        "info": {
            "name": "You Shall Not Pass",
            "desc": "Don't let any spaceships get past the left side of space for the duration of a planet.",
            "icon": "Achv_3"
        }
    }
    // You shall not pass
]



vars.game.achievementsInternal = {
    "eventIndex": {},
    "index": null,
    "updateIndex": function() {
        var index = {}

        var i = 0
        for (i in vars.game.achievements) {
            index[vars.game.achievements[i].id] = i
        }

        vars.game.achievementsInternal.index = index
    },
    "removeListenersByAchievementsIDNum": function(achievements) {
        var index = vars.game.achievementsInternal.index // Hash

        var i = 0
        for (i in vars.game.achievementsInternal.eventIndex) {
            var c = 0
            for (c in vars.game.achievementsInternal.eventIndex[i]) {
                var a = vars.game.achievementsInternal.eventIndex[i][c]

                if (achievements.includes(index[a.mainJSON.id])) { // You've already got this achievement so there's no point in keeping it's listeners.
                     vars.game.achievementsInternal.eventIndex[i][c] = null // Flag it to be removed, when the array is tidied it will be removed.
                }
            }
            vars.game.achievementsInternal.eventIndex[i] = removeUndefined(vars.game.achievementsInternal.eventIndex[i]) // Tidy it
        }
    },
    "init": function() {
        var i = 0
        for (i in vars.game.achievements) {
            var c = vars.game.achievements[i]

            if (c.events != null) {
                var a = 0
                for (a in c.events) {
                    var b = c.events[a]

                    if (vars.game.achievementsInternal.events[b.type] == null) {
                        console.log(b)
                        throw new Error("Achievement: Unknown event " + JSON.stringify(b.type) + " see error object above for more info.")
                    }
                    var d = 0
                    for (d in b.args) {
                        if (! ((vars.game.achievementsInternal.events[b.type].args.required.includes(d)) || (vars.game.achievementsInternal.events[b.type].args.optional[d] != null))) {
                            console.log(c)
                            console.warn("Achievement: Unknown argument for event " + JSON.stringify(d) + " see error object above for more info.")
                        }
                    }

                    if (vars.game.achievementsInternal.eventIndex[b.type] == null) {
                        vars.game.achievementsInternal.eventIndex[b.type] = []
                    }
                    vars.game.achievementsInternal.eventIndex[b.type][vars.game.achievementsInternal.eventIndex[b.type].length] = {
                        "JSON": b,
                        "mainJSON": c
                    }

                    var d = 0
                    for (d in vars.game.achievementsInternal.events[b.type].args.required) {
                        var e = vars.game.achievementsInternal.events[b.type].args.required[a]
                        if (b[e] == null) {
                            console.log(c)
                            throw new Error("Achievements: Missing event " + JSON.stringify(e) + " see error object above for more info.")
                        }
                    }

                }
            }
        }
    },
    "events": {
        "enemy.hurt": {
            "args": {
                "optional": {
                    "type": "<any>",
                    "includeDeath": true
                },
                "required": []
            }
        },
        "enemy.death": {
            "args": {
                "optional": {
                    "type": "<any>"
                },
                "required": []
            }
        },
        "enemy.despawn": {
            "args": {
                "optional": {},
                "required": []
            }
        }
    }
}
vars.game.achievementsInternal.init()
vars.game.achievementsInternal.updateIndex()

vars.game.notificationQueue = []
vars.game.notificationQueueLength = 0

vars.game.newNotification = function(title, brief, detail, icon) {
    vars.game.notificationQueue[vars.game.notificationQueue.length] = {
        "title": title,
        "brief": brief,
        "detail": detail,
        "icon": icon
    }
    vars.game.notificationQueueLength++
}

triggerListener = function(type, args, data) {
    if (vars.game.achievementsInternal.eventIndex[type] == null) {
        return // No listeners
    }
    var i = 0
    for (i in vars.game.achievementsInternal.eventIndex[type]) {
        var c = vars.game.achievementsInternal.eventIndex[type][i]

        var ok = true

        var a = 0
        for (a in args) {
            var b = args[a]

            var d = 0
            for (d in b) {
                var e = b[d]

                if (e.ignoreOthers && c.JSON.args[a] != null) {
                    ok = false
                }
                var achvArg = c.JSON.args[a]
                if (c.JSON.args[a] == null) {
                    achvArg = vars.game.achievementsInternal.events[c.JSON.type].args.optional[a]
                }
                if (! (args[a][d].accept == achvArg || achvArg == "<any>")) {
                    ok = false
                }
                if (e.ignoreOthers && c.JSON.args[a] != null) {
                    ok = true
                    break
                }
            }
        }

        if (ok) {
            var ok = c.JSON.func(c, data)
            if (ok) {
                vars.game.save.achievements[vars.game.save.achievements.length] = vars.game.achievementsInternal.index[c.mainJSON.id] // Save a bit of space
                vars.game.achievementsInternal.removeListenersByAchievementsIDNum([vars.game.achievementsInternal.index[c.mainJSON.id]]) // So you can't get it more than once

                vars.game.saveNow(true, true)
                vars.game.newNotification("Achievement get!", c.mainJSON.info.name, c.mainJSON.info.desc, c.mainJSON.info.icon)
            }
        }
    }
}
