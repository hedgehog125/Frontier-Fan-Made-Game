vars.menu.menus = {}
vars.menu.menus.scripts = {}
vars.menu.menus.scripts.hover = {}
vars.menu.menus.scripts.click = {}

vars.menu.menus.scripts.hover.upgrade = function() {
    me.vars.JSON.data.price = me.vars.JSON.data.calculatePrice()

    var ret = "You have " + vars.game.save.money + " Intergalactic Pounds | "
    var ret = ret + " Price: " + me.vars.JSON.data.price + " Intergalactic Pounds | "
    var ret = ret + " Upgraded: " + vars.game.save.upgraded[me.vars.JSONID]
    var ret = ret + "/" + me.vars.JSON.data.maxUpgrade
    return ret
}
vars.menu.menus.scripts.click.upgrade = function() {
    me.loadTexture(me.vars.normalImg + "_Hover")

    me.vars.JSON.data.price = me.vars.JSON.data.calculatePrice(vars.game.save.upgraded[me.vars.JSONID])

    if (vars.game.save.money >= me.vars.JSON.data.price && (vars.game.save.upgraded[me.vars.JSONID] + 1) <= me.vars.JSON.data.maxUpgrade) {
        playSound("Upgrade")

        vars.game.save.money = vars.game.save.money - me.vars.JSON.data.price

        vars.game.save.upgrades[me.vars.JSON.data.upgradeID] = vars.game.save.upgrades[me.vars.JSON.data.upgradeID] + me.vars.JSON.data.upgradeAmount
        vars.game.save.upgraded[me.vars.JSONID] = vars.game.save.upgraded[me.vars.JSONID] + 1
    }
    else {
        playSound("Deny_Button")
    }
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
                "type": "button",
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
                "selected": 0,
                "imgs": [
                    "Warp_Button"
                ],
                "x": 400,
                "y": 400,
                "hoverMessage": "Warp to plannet",
                "initfunc": function() {
                    me.scale.setTo(3)

                    me.vars.normalImg = me.key
                },
                "mainfunc": function() {},
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
                    "startPrice": 100,
                    "upgradeID": "fireDamage",
                    "upgraded": 0,
                    "maxUpgrade": 20,
                    "upgradeAmount": 1,
                    "calculatePrice": function() {
                        if (vars.game.save.upgraded[me.vars.JSONID] > 0) {
                            return Math.round(me.vars.JSON.data.startPrice * Math.pow(1.1, vars.game.save.upgraded[me.vars.JSONID]))
                        }
                        else {
                            return me.vars.JSON.data.startPrice
                        }
                    }
                },
                "type": "button",
                "selected": 0,
                "imgs": [
                    "Upgrade_Attack_0"
                ],
                "x": 400,
                "y": 150,
                "hoverMessage": vars.menu.menus.scripts.hover.upgrade,
                "initfunc": function() {
                    me.scale.setTo(3)

                    me.vars.normalImg = me.key
                },
                "mainfunc": function() {},
                "clickfunc": vars.menu.menus.scripts.click.upgrade,
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
        "text": "Defence"
    }
]
