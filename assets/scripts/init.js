vars = {}
vars.menu = {}
vars.menu.backgroundSize = 1.2
vars.menu.logoBob = [0,0, 10]
vars.menu.hoverCooldown = false
vars.menu.clickCooldown = false
vars.menu.dragging = false
vars.menu.hoverMessage = ""
vars.game = {}
vars.game.muteSaveSound = false
vars.game.boss = {}

vars.game.saveNow = function(muteSound) {
    var code = JSON.stringify(vars.game.save)
    deleteCookie("Save")
    setCookie("Save", code, 1000)

    if (! muteSound) {
        playSound("Health_Restored")
    }

    Sprites.Game_Saved_Message.fixedToCamera = true

    Sprites.Game_Saved_Message.cameraOffset.x = Game.width / 2
    Sprites.Game_Saved_Message.cameraOffset.y = 440
    Sprites.Game_Saved_Message.visible = true
}

// Config

vars.game.config = {}
vars.game.config.minY = 30
vars.game.config.autoSaveTime = 60 // Seconds (1 min)
vars.game.config.version = "1.0"
vars.game.saveDelay = 1
vars.game.startedPlaying = false


// Upgrades

vars.game.config.defaultUpgrades = {}
vars.game.config.defaultUpgraded = {}

vars.game.config.defaultUpgrades.fireDamage = 10
vars.game.config.defaultUpgrades.fireRate = 30
vars.game.config.defaultUpgrades.homing = 0

vars.game.config.defaultUpgrades.bullets = true
vars.game.config.defaultUpgrades.lasers = false
vars.game.config.defaultUpgrades.plasma = false


vars.game.config.defaultUpgrades.maxHealth = 50
vars.game.config.defaultUpgrades.speed = 15
vars.game.config.defaultUpgrades.hpRegen = 0.005


vars.game.config.defaultUpgraded.fireDamage = 0
vars.game.config.defaultUpgraded.fireRate = 0
vars.game.config.defaultUpgraded.homing = 0

vars.game.config.defaultUpgraded.bullets = 2
vars.game.config.defaultUpgraded.lasers = 0
vars.game.config.defaultUpgraded.plasma = 0

vars.game.config.defaultUpgraded.maxHealth = 0
vars.game.config.defaultUpgraded.speed = 0
vars.game.config.defaultUpgraded.hpRegen = 0





state = ["menu", 0]
