// Note to self: you will have probably forgotten this:
// You are reprogramming this so it uses a JSON script format.

// TODO:
//	Change init scripts to the same JSON format as the main scripts.
//	Change code to use the JSON format thing.

Assets = {
	"imgs": [
		{
			"id": "Main_Menu_Background",
			"src": "ship_background.png"
		},
		{
			"id": "Logo",
			"src": "title.png"
		},
		{
			"id": "Fade",
			"src": "fade.png"
		}
	],
	"snds" : [
		{
			"id": "Menu_Music",
			"src": "music/menu_music.mp3"
		},
		{
			"id": "Game_Music",
			"src": "music/game.mp3"
		},
		{
			"id": "Hover_Button",
			"src": "sfx/select.mp3"
		},
		{
			"id": "Click_Button",
			"src": "sfx/sfx.mp3"
		}
	],
	"sprites": [
		{
			"scripts": {
				"init": [
					{
						"code": function() {		
							me.width = Game.width * vars.menu.backgroundSize
							me.height = Game.height * vars.menu.backgroundSize
						},
						"stateToRun": ["menu", 0]
					}
				],
				"main": null
			},
			"id": "Main_Menu_Background",
			"x": 0,
			"y": 0,
			"cos": "Main_Menu_Background"
		},
		{
			"scripts": {
				"init": [
					{
						"code": function() {
							me.x = Game.width / 2
							me.y = 150
					
							me.anchor.setTo(0.5)
							me.width = 400
							me.height = 200
							me.fixedToCamera = true
						},
						"stateToRun": ["menu", 0]
					}
				],
				"main": [
					{
						"code": function() {
							me.cameraOffset.y = vars.menu.logoBob[0] + 150
						},
						"stateToRun": ["menu", 0]
					}
				]
			},
			"id": "Logo",
			"x": 0,
			"y": 0,
			"cos": "Logo"
		},
		{
			"scripts": {
				"init": [
					{
 	 					"code": function() {			
							me.x = Game.width / 2
							me.y = 300
							
							me.anchor.setTo(0.5)
							me.fixedToCamera = true
							me.fixedToCamera = true
							me.inputEnabled = true
							me.vars.lit = false
						},
						"stateToRun": ["menu", 0]
					}
				],
				"main": [
					{
 	 					"code": function() {
							if (me.input.pointerOver()) {
								vars.menu.hoverMessage = "Start a new journey into the Frontier"
								me.vars.lit = true
								if (! vars.menu.hoverCooldown) {
									me.addColor("#DDDDDD", 0)
									playSound("Hover_Button")
									vars.menu.hoverCooldown = true
								}
								if (Game.input.activePointer.isDown) {
									if ((! vars.menu.clickCooldown) & (! vars.menu.dragging)) {
										vars.menu.clickCooldown = true
										beginFade(1, ["menu", 0], 0)
										playSound("Click_Button")
									}
								}
							}
							else {
								if (me.vars.lit) {
									me.vars.lit = false
									me.addColor("black", 0)
								}
							}
							me.cameraOffset.y = vars.menu.logoBob[0] + 300
						},
						"stateToRun": ["menu", 0]
					}
				]
			},
			"id": "New_Game_Button",
			"x": 0,
			"y": 0,
			"type": "text",
			"text": "New Game",
			"settings": {
				"font": "10pt Helvetica",
				"fill": "black"
			}
		},
		{
			"scripts": {
				"init": [
					{
 	 					"code": function() {			
							me.x = Game.width / 2
							me.y = 325
							
							me.anchor.setTo(0.5)
							me.fixedToCamera = true
							me.fixedToCamera = true
							me.inputEnabled = true
							me.vars.lit = false
						},
						"stateToRun": ["menu", 0]
					}
				],
				"main": [
					{
 	 					"code": function() {
							if (me.input.pointerOver()) {
								vars.menu.hoverMessage = "Continue your adventure in the Frontier..."
								me.vars.lit = true
								if (! vars.menu.hoverCooldown) {
									me.addColor("#DDDDDD", 0)
									playSound("Hover_Button")
									vars.menu.hoverCooldown = true
								}
								if (Game.input.activePointer.isDown) {
									if ((! vars.menu.clickCooldown) & (! vars.menu.dragging)) {
										vars.menu.clickCooldown = true
										playSound("Click_Button")
									}
								}
							}
							else {
								if (me.vars.lit) {
									me.vars.lit = false
									me.addColor("black", 0)
								}
							}
							me.cameraOffset.y = vars.menu.logoBob[0] + 325
						},
						"stateToRun": ["menu", 0]
					}
				]
			},
			"id": "Continue_Game_Button",
			"x": 0,
			"y": 0,
			"type": "text",
			"text": "Continue",
			"settings": {
				"font": "10pt Helvetica",
				"fill": "black"
			}
		},
		{
			"scripts": {
				"init": [
					{
						"code": function() {
							me.anchor.setTo(0.5)
							me.x = Game.width / 2
							me.y = 440		
					
							me.fixedToCamera = true
							me.smoothed = true
						},
						"stateToRun": ["menu", 0]
					}
				],
				"main": []
			},
			"id": "Hover_Text",
			"x": 0,
			"y": 0,
			"text": "",
			"settings": {
				"font": "10pt Helvetica",
				"fill": "black"
			},
			"type": "text"
		},
		{
			"scripts": {
				"init": [
					{
						"code": function() {
							me.fixedToCamera = true
							me.smoothed = true
						},
						"stateToRun": ["menu", 0]
					}
				],
				"main": []
			},
			"id": "FPS_Text",
			"x": 0,
			"y": 0,
			"text": "",
			"settings": {
				"font": "10pt Helvetica",
				"fill": "black"
			},
			"type": "text"
		}
	],
	"scripts": {
		"init": [
			{
				"code": function() {
					playSound("Menu_Music", true)
							
					Game.world.setBounds(0, 0, Game.width * vars.menu.backgroundSize, Game.height * vars.menu.backgroundSize)
					Game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
					Game.scale.pageAlignHorizontally = true
					Game.scale.pageAlignVertically = true
				},
				"stateToRun": ["menu", 0] 
			}
		],
		"main": [
			{
				"code":	function() {
					vars.menu.hoverMessage = ""
				
					Game.camera.x = inX * vars.menu.backgroundSize
					Game.camera.y = inY * vars.menu.backgroundSize
					if (vars.menu.logoBob[0] <= 0 - vars.menu.logoBob[2]) {
						vars.menu.logoBob[1] = 0
					}		
					if (vars.menu.logoBob[0] >= vars.menu.logoBob[2]) {
						vars.menu.logoBob[1] = 1
					}
					if (vars.menu.logoBob[1] == 0) {
						vars.menu.logoBob[0] = vars.menu.logoBob[0] + (1 / 5)
					}
					else {
						vars.menu.logoBob[0] = vars.menu.logoBob[0] - (1 / 5)
					}
					
					Sprites["FPS_Text"].setText("FPS: " + fpsCalc.getFPS())
				},
				"stateToRun": [["menu", 0], "before"]
			},
			{
				"code":	function() {
					if (vars.menu.hoverMessage == "") {
						vars.menu.hoverCooldown = false
					}
					if (Game.input.activePointer.isDown) {
						if (vars.menu.hoverMessage == "") { // Then the mouse isn't touching any buttons.
							vars.menu.dragging = true
						}
					}
					else {
						vars.menu.clickCooldown = false
						vars.menu.dragging = false
					}
				
					Sprites["Hover_Text"].setText(vars.menu.hoverMessage)
				},
				"stateToRun": [["menu", 0], "after"]
			}
		]
	}
}

Loaded = {
	"snds": {}
}

spritesWithScripts = []

document.bgColor = "black"

GameFrame = getEl("game")
window.addEventListener("touchmove", function(e) {
	e.preventDefault()
}, false)

document.onerror = function() {
	alert("An error occurred.")
}

var width = 800
var height = 450

Game = new Phaser.Game(width, height, Phaser.AUTO, "game", null, false, false)

Sprites = {}
vars = {}


vars.menu = {}
vars.menu.backgroundSize = 1.2
vars.menu.logoBob = [0,0, 10]
vars.menu.hoverCooldown = false
vars.menu.clickCooldown = false
vars.menu.dragging = false
vars.menu.hoverMessage = ""
vars.game = {}


status = ["menu", 0]
statusWas = status
scriptTimes = {}
resetScriptTimes = {}
mainScriptTimes = {"before": {}, "after": {}}
mainResetScriptTimes = {}
currentFade = {
	"active": false,
	"speed": 0,
	"newStatus": null
}


GameState = {
	"preload": function() {
		Game.load.image("Fade_Dot", "assets/imgs/fade.png")
		var i = 0
		for (i in Assets["imgs"]) {
			Game.load.image(Assets["imgs"][i]["id"], "assets/imgs/" + Assets["imgs"][i]["src"])
		}
		var i = 0
		for (i in Assets["snds"]) {
			Game.load.audio(Assets["snds"][i]["id"], "assets/sounds/" + Assets["snds"][i]["src"])
		}
	},
	"create": function() {
		var i = 0
		fadeDot = Game.add.sprite(0, 0, "Fade_Dot")
		fadeDot.visible = false
		fadeDot.width = Game.width
		fadeDot.height = Game.height
		
		for (i in Assets["snds"]) {
			Loaded["snds"][Assets["snds"][i]["id"]] = Game.add.audio(Assets["snds"][i]["id"])
		}
		create()
		GameFrame.hidden = false
	},
	"update": main
}
Game.state.add("GameState", GameState)
Game.state.start("GameState")


function preload() {
	Game.stage.backgroundColor = "#000000"
	loadingText = Game.add.text(Game.world.centerX, Game.world.centerY, "Loading assets...", {
		"font": "50px Arial", 
		"fill": "#FFFFFF",
	})
	loadingText.anchor.setTo(0.5)
}

function playSound(id, loop) {
	if (loop) {
		Loaded["snds"][id].loop = true
	}
	else {
		Loaded["snds"][id].loop = false
	}
	Loaded["snds"][id].play()
}

function beginFade(speed, newState, stoptime) {
	currentFade = {
		"tick": 0,
		"speed": speed,
		"stopTime": stoptime,
		"newState": newState
	}
	fadeDot.visible = true
}

function filter(r, g, b, a) {
	return (a * Math.pow(256, 3)) + (r * Math.pow(256, 2)) + (g * 256) + b
}

function brightness(effect) {
	var e = effect
	return filter(e, e, e, 0)
} 

function reset() {
	var i = 0
	for (i in mainResetScriptTimes[status.toString()]) {
		var c = mainResetScriptTimes[status.toString()][i]
		var c = Assets["scripts"]["init"][c]
		c["code"]()
	}

	var i = 0
	for (i in resetScriptTimes[status.toString()]) {
		var c = resetScriptTimes[status.toString()][i]
		me = Sprites[Assets["sprites"][c[0]]["id"]]
		var c = Assets["sprites"][c[0]]["scripts"]["init"][c[1]]
		c["code"]()
	}
}

function create() {
	Game.input.addMoveCallback(function(){}, this)
	
	var i = 0
	for (i in Assets["sprites"]) {
		var i = JSON.parse(i)
		var c = Assets["sprites"][i]
		if (c["type"] == "sprite" | c["type"] == undefined) {
			me = Game.add.sprite(c["x"], c["y"], c["cos"])
		}
		else {
			if (c["type"] == "text") {
				me = Game.add.text(c["x"], c["y"], c["text"], c["settings"])
			}
		}
		me.vars = {}
		if (! (c["scripts"]["main"] === undefined | c["scripts"]["main"] === null)) {
			if (c["scripts"]["main"].length > 0) {
				var a = 0
				for (a in c["scripts"]["main"]) {
					if (scriptTimes[c["scripts"]["main"][a]["stateToRun"].toString()] === undefined) {
						scriptTimes[c["scripts"]["main"][a]["stateToRun"].toString()] = []
					}
					scriptTimes[c["scripts"]["main"][a]["stateToRun"].toString()][scriptTimes[c["scripts"]["main"][a]["stateToRun"].toString()].length] = [i, a]
				}
				spritesWithScripts[spritesWithScripts.length] = i
			}
		}
		if (! (c["scripts"]["init"] === undefined | c["scripts"]["init"] === null)) {
			if (c["scripts"]["init"].length > 0) {
				var a = 0
				for (a in c["scripts"]["init"]) {
					if (resetScriptTimes[c["scripts"]["init"][a]["stateToRun"].toString()] === undefined) {
						resetScriptTimes[c["scripts"]["init"][a]["stateToRun"].toString()] = []
					}
					resetScriptTimes[c["scripts"]["init"][a]["stateToRun"].toString()][resetScriptTimes[c["scripts"]["init"][a]["stateToRun"].toString()].length] = [i, a]
				}
				spritesWithScripts[spritesWithScripts.length] = i
			}
		}
		Sprites[c["id"]] = me
	}
	
	
	var i = 0
	for (i in Assets["scripts"]["main"]) {
		var c = Assets["scripts"]["main"][i]
		if (mainScriptTimes[c["stateToRun"][1]][c["stateToRun"][0].toString()] === undefined) {
			mainScriptTimes[c["stateToRun"][1]][c["stateToRun"][0].toString()] = []
		}
		mainScriptTimes[c["stateToRun"][1]][c["stateToRun"][0].toString()][mainScriptTimes[c["stateToRun"][1]][c["stateToRun"][0]].length] = i
	}
	
	var i = 0
	for (i in Assets["scripts"]["init"]) {
		var c = Assets["scripts"]["init"][i]
		if (mainResetScriptTimes[c["stateToRun"].toString()] === undefined) {
			mainResetScriptTimes[c["stateToRun"].toString()] = []
		}
		mainResetScriptTimes[c["stateToRun"].toString()][mainResetScriptTimes[c["stateToRun"].toString()].length] = i
	}
	
	reset()
}

function main() {
	inX = (Game.input.x / width) * Game.width
	inY = (Game.input.y / height) * Game.height
	
	var i = 0
	for (i in mainScriptTimes["before"][status.toString()]) {
		var c = mainScriptTimes["before"][status.toString()][i]
		var c = Assets["scripts"]["main"][c]
		c["code"]()
	}
	
	var i = 0
	for (i in scriptTimes[status.toString()]) {
		var c = scriptTimes[status.toString()][i]
		me = Sprites[Assets["sprites"][c[0]]["id"]]
		var c = Assets["sprites"][c[0]]["scripts"]["main"][c[1]]
		c["code"]()
	}
	
	var i = 0
	for (i in mainScriptTimes["after"][status.toString()]) {
		var c = mainScriptTimes["after"][status.toString()][i]
		var c = Assets["scripts"]["main"][c]
		c["code"]()
	}
	
	if (status != statusWas) {
		reset()
		statusWas = status
	}
	
	if (currentFade["speed"] !== 0) {
		if (currentFade["tick"] >= (100 / currentFade["speed"]) + currentFade["stopTime"]) {
			fadeDot.alpha = 1 - (((currentFade["tick"] - currentFade["stopTime"] - (100 / currentFade["speed"])) * currentFade["speed"]) / 100)
			if (fadeDot.alpha == 0) {
				currentFade["speed"] = 0
				fadeDot.visible = false
			}
			else {
				if (fadeDot.alpha == 1) {
					state = currentFade["newState"]
				}
			}
		}
		else {
			if (currentFade["tick"] >= 100 / currentFade["speed"]) {
				fadeDot.alpha = 1
			}
			else {
				fadeDot.alpha = (currentFade["tick"] * currentFade["speed"]) / 100
			}
		}
		currentFade["tick"]++
		fadeDot.bringToTop()
	}
}