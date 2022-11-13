vars.menu.menus = {}
vars.menu.menus.scripts = {}
vars.menu.menus.scripts.hover = {}
vars.menu.menus.scripts.click = {}
vars.menu.menus.scripts.hoverstart = {}
vars.menu.menus.scripts.hoverend = {}
vars.menu.menus.scripts.init = {}

vars.menu.menus.scripts.hover.upgrade = function() {
    var keys = Object.keys(vars.game.save.upgrades)
    var upgraded = vars.game.save.upgraded[keys.indexOf(me.vars.JSON.data.upgradeID)]

    me.vars.JSON.data.price = me.vars.JSON.data.calculatePrice(upgraded)
    var displayPrice = me.vars.JSON.data.price.toLocaleString()

    var ret = "You have " + vars.game.save.money.toLocaleString() + " Intergalactic Pounds | "
    var ret = ret + " Price: " + displayPrice + " Intergalactic Pounds | "
    var ret = ret + " Upgraded: " + upgraded
    var ret = ret + "/" + me.vars.JSON.data.maxUpgrade

    var ret = me.vars.JSON.data.englishName + " \n" + ret
    return ret
}
vars.menu.menus.scripts.click.upgrade = function() {
    me.loadTexture(me.vars.normalImg + "_Hover")

    var keys = Object.keys(vars.game.save.upgrades)
    var upgraded = vars.game.save.upgraded[keys.indexOf(me.vars.JSON.data.upgradeID)]

    me.vars.JSON.data.price = me.vars.JSON.data.calculatePrice(upgraded)

    if (vars.game.save.money >= me.vars.JSON.data.price && (upgraded + 1) <= me.vars.JSON.data.maxUpgrade) {
        playSound("Upgrade")

        vars.game.save.money = vars.game.save.money - me.vars.JSON.data.price

        vars.game.save.upgrades[me.vars.JSON.data.upgradeID] = vars.game.save.upgrades[me.vars.JSON.data.upgradeID] + me.vars.JSON.data.upgradeAmount
        var upgraded = upgraded + 1
    }
    else {
        playSound("Deny_Button")
    }
    vars.game.save.upgraded[keys.indexOf(me.vars.JSON.data.upgradeID)] = upgraded
}
vars.menu.menus.scripts.init.upgrade = function() {
    me.scale.setTo(3)

    me.vars.normalImg = me.key
}
vars.menu.menus.scripts.hoverstart.upgrade = function() {
    me.loadTexture(me.vars.normalImg + "_Hover")
}
vars.menu.menus.scripts.hoverend.upgrade = function() {
    me.loadTexture(me.vars.normalImg)
}



vars.menu.menus.scripts.hover.upgradeSelect = function() {
    var keys = Object.keys(vars.game.save.upgrades)
    var upgraded = vars.game.save.upgraded[keys.indexOf(me.vars.JSON.data.upgradeID)]

    if (upgraded > 0) {
        if (upgraded == 2) {
            var ret = "You have " + vars.game.save.money.toLocaleString() + " Intergalactic Pounds | Selected"
        }
        else {
            var ret = "You have " + vars.game.save.money.toLocaleString() + " Intergalactic Pounds | Unlocked, but not selected"
        }
    }
    else {
        var displayPrice = me.vars.JSON.data.price.toLocaleString()

        var ret = "You have " + vars.game.save.money.toLocaleString() + " Intergalactic Pounds | "
        var ret = ret + " Price: " + displayPrice + " Intergalactic Pounds to unlock"
    }

    var ret = me.vars.JSON.data.englishName + " \n" + ret
    return ret
}
vars.menu.menus.scripts.click.upgradeSelect = function() {
    me.loadTexture(me.vars.normalImg + "_Hover")

    var keys = Object.keys(vars.game.save.upgrades)
    var upgraded = vars.game.save.upgraded[keys.indexOf(me.vars.JSON.data.upgradeID)]

    var boughtThisFrame = false
    if (upgraded == 0) {
        if (vars.game.save.money >= me.vars.JSON.data.price && (upgraded == 0)) {
            playSound("Upgrade")

            var boughtThisFrame = true

            vars.game.save.money = vars.game.save.money - me.vars.JSON.data.price

            vars.game.save.upgrades[me.vars.JSON.data.upgradeID] = false
            var upgraded = 1
        }
    }
    else {
        playSound("Deny_Button")
    }
    if (upgraded == 1) {
        var i = 0
        var ob = spriteCloneIds[me.cloneOf]
        for (i in ob) {
            var execute = Sprites[ob[i]]
            if (execute != undefined) {
                if (execute.vars.JSON.data != undefined) {
                    if (execute.vars.JSON.data.upgradeType == "upgradeSelect") {
                        var executeUpgraded = vars.game.save.upgraded[Object.keys(vars.game.save.upgrades).indexOf(execute.vars.JSON.data.upgradeID)]
                        if (executeUpgraded > 1) {
                            var executeUpgraded = 1 // Unselect it if it's unlocked.
                            vars.game.save.upgrades[execute.vars.JSON.data.upgradeID] = false
                        }
                        vars.game.save.upgraded[Object.keys(vars.game.save.upgrades).indexOf(execute.vars.JSON.data.upgradeID)] = executeUpgraded // Save any changes
                    }
                }
            }
        }

        var upgraded = 2 // Now select this one.
        vars.game.save.upgrades[me.vars.JSON.data.upgradeID] = true

        if (! boughtThisFrame) {
            playSound("Click_Button")
        }
    }
    else {
        playSound("Deny_Button")
    }
    vars.game.save.upgraded[keys.indexOf(me.vars.JSON.data.upgradeID)] = upgraded // Save any changes

}
vars.menu.menus.scripts.init.upgradeSelect = function() {
    me.scale.setTo(3)

    me.vars.normalImg = me.key
}
vars.menu.menus.scripts.hoverstart.upgradeSelect = function() {
    me.loadTexture(me.vars.normalImg + "_Hover")
}
vars.menu.menus.scripts.hoverend.upgradeSelect = function() {
    me.loadTexture(me.vars.normalImg)
}


vars.menu.menus.menus = {}
vars.menu.menus.JSON = {}

vars.menu.menus.JSON.upgrades = [
    {
        "text": "Planets",
        "content": [
            {
                "type": "image",
                "selected": 0,
                "imgs": [],
                "x": 400,
                "y": 220,
                "hoverMessage": function() {
                    if (vars.game.save.progress.completed < me.vars.JSON.selected) {
                        return "??? Unlock the previous planet first."
                    }
                    return vars.game.planets[me.vars.JSON.selected].name
                },
                "prefunc": function() {
                    var planetImages = []
                    var i = 0
                    for (i in vars.game.planets) {
                        planetImages[planetImages.length] = "Planet_"  + (JSON.parse(i) + 1)
                    }
                    me.vars.JSON.imgs = planetImages
                    me.loadTexture(me.vars.JSON.imgs[me.vars.JSON.selected])
                },
                "initfunc": function() {
                    me.width = 300
                    me.height = 300
                },
                "mainfunc": function() {

                }
            },
            {
                "type": "image",
                "selected": 0,
                "imgs": [
                    "Completed_Planet",
                    "Locked_Planet"
                ],
                "x": 400,
                "y": 220,
                "hoverMessage": function() {
                    var plannetSprite = vars.menu.tabs[vars.menu.tab].content[0]

                    if (vars.game.save.progress.completed < plannetSprite.selected) {
                        return "??? Unlock the previous planet first."
                    }
                    return vars.game.planets[plannetSprite.selected].name
                },
                "initfunc": function() {
                    me.scale.setTo(10)
                    me.vars.textureWas = null
                    me.vars.visibleWas = null
                },
                "mainfunc": function() {
                    var plannetSprite = vars.menu.currentMenu.JSON[0]

                    var texture = null
                    var visible = null

                    if (vars.game.save.progress.completed > plannetSprite.selected) { // Completed
                        me.vars.JSON.selected = 0
                        var texture = me.vars.JSON.imgs[me.vars.JSON.selected]
                        var visible = true
                    }
                    else {
                        if (vars.game.save.progress.completed < plannetSprite.selected) { // Locked
                            me.vars.JSON.selected = 1
                            var texture = me.vars.JSON.imgs[me.vars.JSON.selected]
                            var visible = true
                        }
                        else { // Unlocked, but not completed
                            var visible = false
                        }
                    }

                    if (texture != me.vars.textureWas) { // So it doesn't constantly call it
                        me.loadTexture(texture)
                        me.vars.textureWas = texture
                    }
                    if (visible != me.vars.visibleWas) {
                        me.visible = visible
                        me.vars.visibleWas = visible
                    }
                }
            },
            {
                "type": "button",
                "active": true,
                "selected": 0,
                "imgs": [
                    "Arrow_Left"
                ],
                "x": 200,
                "y": 220,
                "initfunc": function() {
                    me.scale.setTo(10)

                    me.vars.normalImg = me.key
                },
                "mainfunc": function() {
                    me.x = me.vars.normalX - vars.menu.logoBob[0]
                },
                "clickfunc": function() {
                    me.loadTexture(me.vars.normalImg + "_Hover")

                    var plannetSprite = vars.menu.tabs[vars.menu.tab].content[0]
                    plannetSprite.selected--
                    if (plannetSprite.selected < 0) {
                        plannetSprite.selected = plannetSprite.imgs.length - 1
                    }
                },
                "hoverstart": function() {
                    me.loadTexture(me.vars.normalImg + "_Hover")
                },
                "hoverend": function() {
                    me.loadTexture(me.vars.normalImg)
                }
            },
            {
                "type": "button",
                "active": true,
                "selected": 0,
                "imgs": [
                    "Arrow_Right"
                ],
                "x": 600,
                "y": 220,
                "initfunc": function() {
                    me.scale.setTo(10)

                    me.vars.normalImg = me.key
                },
                "mainfunc": function() {
                    me.x =  me.vars.normalX + vars.menu.logoBob[0]
                },
                "clickfunc": function() {
                    me.loadTexture(me.vars.normalImg + "_Hover")

                    var plannetSprite = vars.menu.tabs[vars.menu.tab].content[0]
                    plannetSprite.selected++
                    if (plannetSprite.selected > plannetSprite.imgs.length - 1) {
                        plannetSprite.selected = 0
                    }
                },
                "hoverstart": function() {
                    me.loadTexture(me.vars.normalImg + "_Hover")
                },
                "hoverend": function() {
                    me.loadTexture(me.vars.normalImg)
                }
            },
            {
                "type": "button",
                "active": true,
                "selected": 0,
                "imgs": [
                    "Warp_Button"
                ],
                "x": 400,
                "y": 400,
                "hoverMessage": "Warp to plannet",
                "active": true,
                "initfunc": function() {
                    me.scale.setTo(3)

                    me.vars.normalImg = me.key
                },
                "mainfunc": function() {
                    var plannetSprite = vars.menu.tabs[vars.menu.tab].content[0]
                    me.vars.JSON.active = vars.game.save.progress.completed >= plannetSprite.selected
                },
                "clickfunc": function() {
                    me.loadTexture(me.vars.normalImg + "_Hover")

                    var plannetSprite = vars.menu.tabs[vars.menu.tab].content[0]
                    vars.game.currentPlanet = plannetSprite.selected

                    stopSound("Menu_Music")
                    beginFade(5, ["game"], 0)
                },
                "hoverstart": function() {
                    me.loadTexture(me.vars.normalImg + "_Hover")
                },
                "hoverend": function() {
                    me.loadTexture(me.vars.normalImg)
                }
            }
        ]
    },
    {
        "text": "Weapons",
        "content": [
            {
                "data": {
                    "startPrice": 500,
                    "upgradeID": "fireDamage",
                    "englishName": "Fire damage",
                    "upgraded": 0,
                    "maxUpgrade": 15,
                    "upgradeAmount": 1,
                    "calculatePrice": function(upgraded) {
                        return Math.round(me.vars.JSON.data.startPrice * Math.pow(1.3, upgraded))
                    }
                },
                "type": "button",
                "active": true,
                "selected": 0,
                "imgs": [
                    "Upgrade_Attack_0"
                ],
                "x": 330,
                "y": 150,
                "hoverMessage": vars.menu.menus.scripts.hover.upgrade,
                "initfunc": vars.menu.menus.scripts.init.upgrade,
                "mainfunc": function() {},
                "clickfunc": vars.menu.menus.scripts.click.upgrade,
                "hoverstart": vars.menu.menus.scripts.hoverstart.upgrade,
                "hoverend": vars.menu.menus.scripts.hoverend.upgrade
            },
            // Fire damage
            {
                "data": {
                    "startPrice": 300,
                    "upgradeID": "fireRate",
                    "englishName": "Fire rate",
                    "upgraded": 0,
                    "maxUpgrade": 25,
                    "upgradeAmount": -1,
                    "calculatePrice": function(upgraded) {
                        return Math.round(me.vars.JSON.data.startPrice * Math.pow(1.15, upgraded))
                    }
                },
                "type": "button",
                "active": true,
                "selected": 0,
                "imgs": [
                    "Upgrade_Attack_1"
                ],
                "x": 400,
                "y": 150,
                "hoverMessage": vars.menu.menus.scripts.hover.upgrade,
                "initfunc": vars.menu.menus.scripts.init.upgrade,
                "mainfunc": function() {},
                "clickfunc": vars.menu.menus.scripts.click.upgrade,
                "hoverstart": vars.menu.menus.scripts.hoverstart.upgrade,
                "hoverend": vars.menu.menus.scripts.hoverend.upgrade
            },
            // Fire speed
            {
                "data": {
                    "startPrice": 3000,
                    "upgradeID": "homing",
                    "englishName": "Homing",
                    "upgraded": 0,
                    "maxUpgrade": 5,
                    "upgradeAmount": 11,
                    "calculatePrice": function(upgraded) {
                        return Math.round(me.vars.JSON.data.startPrice * Math.pow(1.1, upgraded))
                    }
                },
                "type": "button",
                "active": true,
                "selected": 0,
                "imgs": [
                    "Upgrade_Attack_2"
                ],
                "x": 470,
                "y": 150,
                "hoverMessage": vars.menu.menus.scripts.hover.upgrade,
                "initfunc": vars.menu.menus.scripts.init.upgrade,
                "mainfunc": function() {},
                "clickfunc": vars.menu.menus.scripts.click.upgrade,
                "hoverstart": vars.menu.menus.scripts.hoverstart.upgrade,
                "hoverend": vars.menu.menus.scripts.hoverend.upgrade
            },
            // Homing

            // Weapon systems

            {
                "data": {
                    "price": 0,
                    "upgradeID": "bullets",
                    "englishName": "Bullets",
                    "upgradeType": "upgradeSelect"
                },
                "type": "button",
                "active": true,
                "selected": 0,
                "imgs": [
                    "Upgrade_Attack_3"
                ],
                "x": 330,
                "y": 250,
                "hoverMessage": vars.menu.menus.scripts.hover.upgradeSelect,
                "initfunc": vars.menu.menus.scripts.init.upgradeSelect,
                "mainfunc": function() {},
                "clickfunc": vars.menu.menus.scripts.click.upgradeSelect,
                "hoverstart": vars.menu.menus.scripts.hoverstart.upgradeSelect,
                "hoverend": vars.menu.menus.scripts.hoverend.upgradeSelect
            },
            // Bullets
            {
                "data": {
                    "price": 5000,
                    "upgradeID": "lasers",
                    "englishName": "Lasers",
                    "upgradeType": "upgradeSelect"
                },
                "type": "button",
                "active": true,
                "selected": 0,
                "imgs": [
                    "Upgrade_Attack_4"
                ],
                "x": 400,
                "y": 250,
                "hoverMessage": vars.menu.menus.scripts.hover.upgradeSelect,
                "initfunc": vars.menu.menus.scripts.init.upgradeSelect,
                "mainfunc": function() {},
                "clickfunc": vars.menu.menus.scripts.click.upgradeSelect,
                "hoverstart": vars.menu.menus.scripts.hoverstart.upgradeSelect,
                "hoverend": vars.menu.menus.scripts.hoverend.upgradeSelect
            },
            // Lasers
            {
                "data": {
                    "price": 50000,
                    "upgradeID": "plasma",
                    "englishName": "Plasma",
                    "upgradeType": "upgradeSelect"
                },
                "type": "button",
                "active": true,
                "selected": 0,
                "imgs": [
                    "Upgrade_Attack_5"
                ],
                "x": 470,
                "y": 250,
                "hoverMessage": vars.menu.menus.scripts.hover.upgradeSelect,
                "initfunc": vars.menu.menus.scripts.init.upgradeSelect,
                "mainfunc": function() {},
                "clickfunc": vars.menu.menus.scripts.click.upgradeSelect,
                "hoverstart": vars.menu.menus.scripts.hoverstart.upgradeSelect,
                "hoverend": vars.menu.menus.scripts.hoverend.upgradeSelect
            }
            // Plasma
        ]
    },
    {
        "text": "Defence",
        "content": [
            {
                "data": {
                    "startPrice": 200,
                    "upgradeID": "maxHealth",
                    "englishName": "Health",
                    "upgraded": 0,
                    "maxUpgrade": 10,
                    "upgradeAmount": 5,
                    "calculatePrice": function(upgraded) {
                        return Math.round(me.vars.JSON.data.startPrice * Math.pow(1.2, upgraded))
                    }
                },
                "type": "button",
                "active": true,
                "selected": 0,
                "imgs": [
                    "Upgrade_Defence_0"
                ],
                "x": 330,
                "y": 150,
                "hoverMessage": vars.menu.menus.scripts.hover.upgrade,
                "initfunc": vars.menu.menus.scripts.init.upgrade,
                "mainfunc": function() {},
                "clickfunc": vars.menu.menus.scripts.click.upgrade,
                "hoverstart": vars.menu.menus.scripts.hoverstart.upgrade,
                "hoverend": vars.menu.menus.scripts.hoverend.upgrade
            },
            // Health
            {
                "data": {
                    "startPrice": 100,
                    "upgradeID": "speed",
                    "englishName": "Speed",
                    "upgraded": 0,
                    "maxUpgrade": 20,
                    "upgradeAmount": -0.5,
                    "calculatePrice": function(upgraded) {
                        return Math.round(me.vars.JSON.data.startPrice * Math.pow(1.2, upgraded))
                    }
                },
                "type": "button",
                "active": true,
                "selected": 0,
                "imgs": [
                    "Upgrade_Defence_1"
                ],
                "x": 400,
                "y": 150,
                "hoverMessage": vars.menu.menus.scripts.hover.upgrade,
                "initfunc": vars.menu.menus.scripts.init.upgrade,
                "mainfunc": function() {},
                "clickfunc": vars.menu.menus.scripts.click.upgrade,
                "hoverstart": vars.menu.menus.scripts.hoverstart.upgrade,
                "hoverend": vars.menu.menus.scripts.hoverend.upgrade
            },
            // Speed
            {
                "data": {
                    "startPrice": 300,
                    "upgradeID": "hpRegen",
                    "englishName": "Health regeneration",
                    "upgraded": 0,
                    "maxUpgrade": 20,
                    "upgradeAmount": 0.0005,
                    "calculatePrice": function(upgraded) {
                        return Math.round(me.vars.JSON.data.startPrice * Math.pow(1.3, upgraded))
                    }
                },
                "type": "button",
                "active": true,
                "selected": 0,
                "imgs": [
                    "Upgrade_Defence_2"
                ],
                "x": 470,
                "y": 150,
                "hoverMessage": vars.menu.menus.scripts.hover.upgrade,
                "initfunc": vars.menu.menus.scripts.init.upgrade,
                "mainfunc": function() {},
                "clickfunc": vars.menu.menus.scripts.click.upgrade,
                "hoverstart": vars.menu.menus.scripts.hoverstart.upgrade,
                "hoverend": vars.menu.menus.scripts.hoverend.upgrade
            }
            // Health regen
        ]
    },
    {
        "text": "Achievements",
        "content": function() {
            var xGap = 125
            var x = xGap
            var y = 150
            var content = [
                {
                    "type": "image",
                    "imgs": [
                        "Achievement_Info_Background"
                    ],
                    "selected": 0,
                    "x": 0,
                    "y": 0,
                    "initfunc": function() {
                        me.width = 350
                        me.height = 350
                        me.alpha = 0
                        me.anchor.setTo(0.5)

                        me.x = width / 2
                        me.y = height / 2
                        me.vars.normalX = me.x
                        me.vars.normalY = me.y

                        me.vars.fadeDestination = 0
                    },
                    "mainfunc": function() {
                        if (me.alpha != me.vars.fadeDestination) {
                            if (me.alpha < me.vars.fadeDestination) {
                                me.alpha = me.alpha + 0.1
                            }
                            else {
                                me.alpha = me.alpha - 0.1
                            }
                            if (Math.abs(me.alpha - me.vars.fadeDestination) < 0.1) {
                                me.alpha = me.vars.fadeDestination
                            }
                        }
                        if (me.alpha == 0) {
                            me.visible = false
                        }
                        else {
                            me.visible = true
                        }
                        me.bringToTop()
                    }
                },
                {
                    "type": "text",
                    "text": "Achievement info",
                    "x": 400,
                    "y": 100,
                    "initfunc": function() {
                        me.fontSize = "20pt"

                        me.anchor.setTo(0.5, 0)
                        me.wordWrapWidth = 300
                        me.wordWrap = true
                    },
                    "mainfunc": function() {
                        me.bringToTop()

                        var achievementInfoSprite = vars.menu.currentMenu.JSON[0].sprite
                        me.alpha = achievementInfoSprite.alpha
                        me.visible = achievementInfoSprite.visible
                    }
                },
                {
                    "type": "text",
                    "text": "",
                    "x": 400,
                    "y": 135,
                    "initfunc": function() {
                        me.fontSize = "15pt"

                        me.anchor.setTo(0.5, 0)
                        me.wordWrapWidth = 300
                        me.wordWrap = true
                    },
                    "mainfunc": function() {
                        me.bringToTop()

                        var achievementInfoSprite = vars.menu.currentMenu.JSON[0].sprite
                        me.alpha = achievementInfoSprite.alpha
                        me.visible = achievementInfoSprite.visible
                    }
                },
                {
                    "type": "text",
                    "text": "",
                    "x": 400,
                    "y": 175,
                    "initfunc": function() {
                        me.fontSize = "12pt"

                        me.anchor.setTo(0.5, 0)
                        me.wordWrapWidth = 300
                        me.wordWrap = true
                    },
                    "mainfunc": function() {
                        me.bringToTop()

                        var achievementInfoSprite = vars.menu.currentMenu.JSON[0].sprite
                        me.alpha = achievementInfoSprite.alpha
                        me.visible = achievementInfoSprite.visible
                    }
                },
                {
                    "type": "button",
                    "active": true,
                    "selected": 0,
                    "imgs": [
                        "Close_Button",
                        "Close_Button_Hover"
                    ],
                    "x": 0,
                    "y": 0,
                    "initfunc": function() {
                        me.width = 20
                        me.height = 20
                        me.anchor.setTo(1, 0)

                        var achievementInfoSprite = vars.menu.currentMenu.JSON[0].sprite
                        me.x = achievementInfoSprite.x + (achievementInfoSprite.width / 2)
                        me.y = achievementInfoSprite.y - (achievementInfoSprite.height / 2)
                        me.vars.normalX = me.x
                        me.vars.normalY = me.y

                        me.vars.normalImg = me.key
                    },
                    "mainfunc": function() {
                        var achievementInfoSprite = vars.menu.currentMenu.JSON[0].sprite
                        me.alpha = achievementInfoSprite.alpha
                        me.visible = achievementInfoSprite.visible
                        // Copy the background ^

                        me.bringToTop()
                    },
                    "clickfunc": function() {
                        vars.menu.currentMenu.JSON[0].sprite.vars.fadeDestination = 0
                    },
                    "hoverstart": function() {
                        me.loadTexture(me.vars.normalImg + "_Hover")
                    },
                    "hoverend": function() {
                        me.loadTexture(me.vars.normalImg)
                    },
                    "hoverMessage": "Close achievement info"
                }
            ]

            var i = 0
            for (i in vars.game.achievements) { // TODO: fix hover images
                content[content.length] = {
                    "type": "button",
                    "active": true,
                    "selected": 0,
                    "imgs": [
                        vars.game.achievements[i].info.icon
                    ],
                    "x": x,
                    "y": y,
                    "data": {
                        "id": i
                    },
                    "initfunc": function() {
                        me.width = 100
                        me.height = 100

                        me.vars.normalImg = me.key
                    },
                    "mainfunc": function() {

                    },
                    "clickfunc": function() {
                        vars.menu.currentMenu.JSON[0].sprite.vars.fadeDestination = 0.95

                        vars.menu.currentMenu.JSON[2].sprite.setText(vars.game.achievements[me.vars.JSON.data.id].info.name)
                        vars.menu.currentMenu.JSON[3].sprite.setText(vars.game.achievements[me.vars.JSON.data.id].info.desc)
                    },
                    "hoverstart": function() {
                        me.loadTexture(me.vars.normalImg + "_Hover")
                    },
                    "hoverend": function() {
                        me.loadTexture(me.vars.normalImg)
                    },
                    "hoverMessage": "Achievement #" + (JSON.parse(i) + 1) + ": " + vars.game.achievements[i].info.name
                }
                x = x + (100 + 10)
                if (x > 800 - xGap) {
                    y = y + (100 + 10)
                    x = xGap
                }
            }

            return content
        }
    }
    //{
    //    "text": "Settings"
    //} // I will add this in soon
]
