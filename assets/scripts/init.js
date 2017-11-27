vars = {}
vars.menu = {}
vars.menu.backgroundSize = 1.2
vars.menu.logoBob = [0,0, 10]
vars.menu.hoverCooldown = false
vars.menu.clickCooldown = false
vars.menu.dragging = false
vars.menu.hoverMessage = ""
vars.game = {}

// Config

vars.game.config = {}
vars.game.config.bulletSpread = 10

vars.game.config.defaultUpgrades = {}

vars.game.config.defaultUpgrades.fireDamage = 10

vars.game.config.defaultUpgrades.fireRate = 30

vars.game.config.defaultUpgrades.maxHealth = 50


vars.game.config.upgrades = {}
vars.game.config.upgrades.attack = [
    {
        "price": {
            "start": 10,
            "increase": 1.5
        }
    }
]


state = ["menu", 0]
