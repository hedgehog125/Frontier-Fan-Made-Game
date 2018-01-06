// TODO:

// For later releases...

// Add more planets. <==
// Create the minigame for the bosses.
// Different spaceships.
// Settings menu. (not that important, but probably should be done soon)



Assets = {
	"imgs": [
		// Main menu.

		{
			"id": "Main_Menu_Background",
			"src": "ship_background.png"
		},
		{
			"id": "Logo",
			"src": "title.png"
		},

		// Game.

		{
			"id": "Star_Background",
			"src": "background.png"
		},
		{
			"id": "Rocket_1#0",
			"src": "spaceship_1_0.png"
		},
		{
			"id": "Rocket_1#1",
			"src": "spaceship_1_1.png"
		},
		{
			"id": "Rocket_1#2",
			"src": "spaceship_1_2.png"
		},
		{
			"id": "Rocket_1#3",
			"src": "spaceship_1_3.png"
		},
		{
			"id": "Rocket_1_Hit",
			"src": "spaceship_1_hit.png"
		},
		{
			"id": "Bullet_Normal",
			"src": "bullet.png"
		},
		{
			"id": "Bullet_Laser",
			"src": "laser.png"
		},
		{
			"id": "Bullet_Plasma",
			"src": "plasma.png"
		},
		{
			"id": "Warn",
			"src": "warning.png"
		},
		// Enemies.
		{
			"id": "Enemy_Rocket_1",
			"src": "enemy_rocket_1.png"
		},
		{
			"id": "Enemy_Rocket_1_Hit",
			"src": "enemy_rocket_1_hit.png"
		},
		{
			"id": "Enemy_Rocket_2",
			"src": "enemy_rocket_2.png"
		},
		{
			"id": "Enemy_Bullet",
			"src": "enemy_bullet.png"
		},
		{
			"id": "Enemy_Bullet_Hit",
			"src": "enemy_bullet.png" // No hit image.
		},
		{
			"id": "Enemy_Rocket_2_Hit",
			"src": "enemy_rocket_2_hit.png"
		},
		// Bosses
		// Boss 1
		{
			"id": "Boss1_0",
			"src": "boss1_0.png"
		},
		{
			"id": "Boss1_0_Hit",
			"src": "boss1_0_hit.png"
		},
		{
			"id": "Boss1_1",
			"src": "boss1_1.png"
		},
		{
			"id": "Boss1_1_Hit",
			"src": "boss1_1_hit.png"
		},

		{
			"id": "Explosion",
			"src": "explosion.png"
		},
		{
			"id": "Laser Fire",
			"src": "laser_explosion.png"
		},
		{
			"id": "Plasma Fire",
			"src": "plasma_explosion.png"
		},

		// Upgrades / world selector.

		// Tabs
		{
			"id": "Tab",
			"src": "tab.png"
		},
		{
			"id": "Tab_End",
			"src": "tab_end.png"
		},
		// GUI
		{
			"id": "Arrow_Left",
			"src": "arrow_left.png"
		},
		{
			"id": "Arrow_Right",
			"src": "arrow_right.png"
		},
		{
			"id": "Arrow_Left_Hover",
			"src": "arrow_left_hover.png"
		},
		{
			"id": "Arrow_Right_Hover",
			"src": "arrow_right_hover.png"
		},
		{
			"id": "Warp_Button",
			"src": "warp_button.png"
		},
		{
			"id": "Warp_Button_Hover",
			"src": "warp_button_hover.png"
		},
		// Upgrades
		{
			"id": "Upgrade_Attack_0",
			"src": "upgrade_attack_0.png"
		},
		{
			"id": "Upgrade_Attack_1",
			"src": "upgrade_attack_1.png"
		},
		{
			"id": "Upgrade_Attack_2",
			"src": "upgrade_attack_2.png"
		},
		{
			"id": "Upgrade_Attack_3",
			"src": "upgrade_attack_3.png"
		},
		{
			"id": "Upgrade_Attack_4",
			"src": "upgrade_attack_4.png"
		},
		{
			"id": "Upgrade_Attack_5",
			"src": "upgrade_attack_5.png"
		},

		{
			"id": "Upgrade_Attack_0_Hover",
			"src": "upgrade_attack_0_hover.png"
		},
		{
			"id": "Upgrade_Attack_1_Hover",
			"src": "upgrade_attack_1_hover.png"
		},
		{
			"id": "Upgrade_Attack_2_Hover",
			"src": "upgrade_attack_2_hover.png"
		},
		{
			"id": "Upgrade_Attack_3_Hover",
			"src": "upgrade_attack_3_hover.png"
		},
		{
			"id": "Upgrade_Attack_4_Hover",
			"src": "upgrade_attack_4_hover.png"
		},
		{
			"id": "Upgrade_Attack_5_Hover",
			"src": "upgrade_attack_5_hover.png"
		},


		{
			"id": "Upgrade_Defence_0",
			"src": "upgrade_defence_0.png"
		},
		{
			"id": "Upgrade_Defence_1",
			"src": "upgrade_defence_1.png"
		},

		{
			"id": "Upgrade_Defence_0_Hover",
			"src": "upgrade_defence_0_hover.png"
		},
		{
			"id": "Upgrade_Defence_1_Hover",
			"src": "upgrade_defence_1_hover.png"
		},
		{
			"id": "Upgrade_Defence_2",
			"src": "upgrade_defence_2.png"
		},
		{
			"id": "Upgrade_Defence_2_Hover",
			"src": "upgrade_defence_2_hover.png"
		},


		// Planet selector
		{
			"id": "Completed_Planet",
			"src": "completed_planet.png"
		},
		{
			"id": "Locked_Planet",
			"src": "locked_planet.png"
		},
		{
			"id": "Planet_1",
			"src": "planet_1.png"
		}
	],
	"snds" : [
		{
			"id": "Menu_Music",
			"src": "music/menu_music.mp3"
		},
		{
			"id": "Game_Music",
			"src": "music/game.mp3",
			"markers": [
				{
					"id": "start",
					"start": 0,
					"end": 4.25,
					"repeat": false
				},
				{
					"id": "repeat",
					"start": 4.25,
					"end": 29.95,
					"repeat": true
				}
			]
		},
		{
			"id": "Boss1",
			"src": "music/boss1.mp3"
		},
		{
			"id": "Boss2",
			"src": "music/boss2.mp3"
		},
		{
			"id": "Boss3",
			"src": "music/boss3.mp3"
		},
		{
			"id": "Boss4",
			"src": "music/boss4.mp3"
		},
		{
			"id": "Boss5",
			"src": "music/boss5.mp3"
		},
		{
			"id": "Hover_Button",
			"src": "sfx/select.mp3"
		},
		{
			"id": "Click_Button",
			"src": "sfx/sfx.mp3"
		},
		{
			"id": "Shot",
			"src": "sfx/shot.mp3"
		},
		{
			"id": "Laser",
			"src": "sfx/laser.mp3"
		},
		{
			"id": "Boom",
			"src": "sfx/explosion.mp3"
		},
		{
			"id": "Hit",
			"src": "sfx/hit.mp3"
		},
		{
			"id": "Upgrade",
			"src": "sfx/upgrade.mp3"
		},
		{
			"id": "Deny_Button",
			"src": "sfx/deny.mp3"
		},
		{
			"id": "Launch",
			"src": "sfx/launch.mp3"
		},
		{
			"id": "Health_Restored",
			"src": "sfx/health_restored.mp3"
		},
		{
			"id": "Warn",
			"src": "sfx/warn.mp3"
		}
	],
	"sprites": [

		// Main menu

		{
			"scripts": {
				"init": [
					{
						"code": function() {
							me.width = Game.world.width
							me.height = Game.world.height
						},
						"stateToRun": ["menu", 0]
					},
					{
						"code": function() {
							me.width = Game.width
							me.height = Game.height
						},
						"stateToRun": ["menu", 1]
					}
				],
				"main": null
			},
			"id": "Main_Menu_Background",
			"x": 0,
			"y": 0,
			"cos": "Main_Menu_Background"
		},
		// Main menu background
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
		// Logo
		{
			"scripts": {
				"init": [
					{
 	 					"code": function() {
							me.x = Game.width / 2
							me.y = 300

							me.anchor.setTo(0.5)
							me.fixedToCamera = true
							me.inputEnabled = true
							me.vars.lit = false
							me.vars.hovering = false
							me.vars.clicked = false
							me.vars.wasLit = me.vars.lit
							me.vars.clickDelay = 0

							me.vars.newSave = function() {
								vars.game.save = {}
								vars.game.save.version = vars.game.config.version

								vars.game.save.upgrades = {}
								vars.game.save.upgraded = []

								var i = 0
								var ob = vars.game.config.defaultUpgrades
								var key = Object.keys(ob)
								while (i < key.length) {
									var c = ob[key[i]]
									vars.game.save.upgrades[key[i]] = c
									vars.game.save.upgraded[vars.game.save.upgraded.length] = vars.game.config.defaultUpgraded[key[i]]
									i++
								}

								vars.game.save.money = 0

								vars.game.currentPlanet = 0 // Start on the first plannet.
								vars.game.save.progress = {}
								vars.game.save.progress.completed = 0
							}

							me.events.onInputDown.add(function(me) {
								me.vars.lit = true
								vars.menu.hoverCooldown = true
								if (! vars.menu.clickCooldown) {
									me.vars.clicked = true

									var ok = false
									if (getCookie("Save") != "") {
										var ok = confirm("Are you sure? You will lose your current progress!")
									}
									else {
										var ok = true // You don't have any progress
									}

									if (ok) {
										me.vars.newSave()

										beginFade(5, ["game"], 	0)
										stopSound("Menu_Music")
										playSound("Click_Button")
									}
									vars.menu.clickCooldown = true
								}
							})

							me.events.onInputUp.add(function(me) {
								vars.menu.clickCooldown = false
								me.vars.clicked = false
								vars.menu.hoverCooldown = false
							})

							me.events.onInputOver.add(function(me) {
								me.vars.hovering = true
								vars.menu.hoverCooldown = false
								me.vars.lit = true
								me.vars.clicked = true
							})
							me.events.onInputOut.add(function(me) {
								me.vars.hovering = false
								vars.menu.hoverCooldown = false
								me.vars.lit = false
							})
						},
						"stateToRun": ["menu", 0]
					}
				],
				"main": [
					{
 	 					"code": function() {
							if (me.vars.clickDelay == 1) {
								if (! me.vars.clicked) {
									me.vars.lit = false
								}
							}
							if (me.vars.hovering) {
								vars.menu.hoverMessage = "Start a new journey into the Frontier"
								if (Game.input.activePointer.isDown) {
									me.vars.clickDelay++
								}
								else {
									me.vars.clickDelay = 0
									vars.menu.clickCooldown = false
									me.vars.clicked = false
								}
								if (! vars.menu.hoverCooldown) {
									playSound("Hover_Button")
									vars.menu.hoverCooldown = true
								}
							}
							else {
								me.vars.clickDelay = 0
								me.vars.lit = false
							}

							if (me.vars.lit != me.vars.wasLit) {
								if (me.vars.lit) {
									me.addColor("#EEEEEE", 0)
								}
								else {
									me.addColor("black", 0)
								}
								me.vars.wasLit = me.vars.lit
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
				"font": "15pt Helvetica",
				"fill": "black"
			}
		},
		// New game
		{
			"scripts": {
				"init": [
					{
 	 					"code": function() {
							me.x = Game.width / 2
							me.y = 335

							me.anchor.setTo(0.5)
							me.fixedToCamera = true
							me.inputEnabled = true
							me.vars.lit = false
							me.vars.hovering = false
							me.vars.clicked = false
							me.vars.wasLit = me.vars.lit
							me.vars.clickDelay = 0

							me.events.onInputDown.add(function(me) {
								me.vars.lit = true
								vars.menu.hoverCooldown = true
								if (! vars.menu.clickCooldown) {
									me.vars.clicked = true

									var saveCode = getCookie("Save")

									if (saveCode == "") {
										playSound("Deny_Button")
									}
									else {
										var success = true
										try {
											JSON.parse(saveCode)
										}
										catch (err) {
											var success = false
										}
										if (success) { // The JSON parsed fine
											playSound("Upgrade")
											vars.game.save = JSON.parse(saveCode)
											if (vars.game.config.version != vars.game.save.version) {
												// Do any necessary updating...
											}

											vars.menu.switchedMenus = true // So the music doesn't stop/restart

											beginFade(2, ["menu", 1], 0)
										}
										else {
											playSound("Deny_Button")
										}
									}
									vars.menu.clickCooldown = true
								}
							})

							me.events.onInputUp.add(function(me) {
								vars.menu.clickCooldown = false
								me.vars.clicked = false
								vars.menu.hoverCooldown = false
							})

							me.events.onInputOver.add(function(me) {
								me.vars.hovering = true
								vars.menu.hoverCooldown = false
								me.vars.lit = true
								me.vars.clicked = true
							})
							me.events.onInputOut.add(function(me) {
								me.vars.hovering = false
								vars.menu.hoverCooldown = false
								me.vars.lit = false
							})
						},
						"stateToRun": ["menu", 0]
					}
				],
				"main": [
					{
 	 					"code": function() {
							if (me.vars.clickDelay == 1) {
								if (! me.vars.clicked) {
									me.vars.lit = false
								}
							}
							if (me.vars.hovering) {
								vars.menu.hoverMessage = "Continue your adventure in the Frontier..."
								if (Game.input.activePointer.isDown) {
									me.vars.clickDelay++
								}
								else {
									me.vars.clickDelay = 0
									vars.menu.clickCooldown = false
									me.vars.clicked = false
								}
								if (! vars.menu.hoverCooldown) {
									playSound("Hover_Button")
									vars.menu.hoverCooldown = true
								}
							}
							else {
								me.vars.clickDelay = 0
								me.vars.lit = false
							}

							if (me.vars.lit != me.vars.wasLit) {
								if (me.vars.lit) {
									me.addColor("#EEEEEE", 0)
								}
								else {
									me.addColor("black", 0)
								}
								me.vars.wasLit = me.vars.lit
							}
							me.cameraOffset.y = vars.menu.logoBob[0] + 335
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
				"font": "15pt Helvetica",
				"fill": "black"
			}
		},
		// Continue game
		{
			"scripts": {
				"init": [
					{
 	 					"code": function() {
							me.x = Game.width / 2
							me.y = 365

							me.anchor.setTo(0.5)
							me.fixedToCamera = true
							me.inputEnabled = true
							me.vars.lit = false
							me.vars.hovering = false
							me.vars.clicked = false
							me.vars.wasLit = me.vars.lit
							me.vars.clickDelay = 0

							me.events.onInputDown.add(function(me) {
								me.vars.lit = true
								vars.menu.hoverCooldown = true
								if (! vars.menu.clickCooldown) {
									me.vars.clicked = true

									if (Sprites.CreatedBy_Text.visible) {
										Sprites.CreatedBy_Text.visible = false
									}
									else {
										Sprites.CreatedBy_Text.visible = true
									}
									vars.menu.clickCooldown = true
								}
							})

							me.events.onInputUp.add(function(me) {
								vars.menu.clickCooldown = false
								me.vars.clicked = false
								vars.menu.hoverCooldown = false
							})

							me.events.onInputOver.add(function(me) {
								me.vars.hovering = true
								vars.menu.hoverCooldown = false
								me.vars.lit = true
								me.vars.clicked = true
							})
							me.events.onInputOut.add(function(me) {
								me.vars.hovering = false
								vars.menu.hoverCooldown = false
								me.vars.lit = false
							})
						},
						"stateToRun": ["menu", 0]
					}
				],
				"main": [
					{
 	 					"code": function() {
							if (me.vars.clickDelay == 1) {
								if (! me.vars.clicked) {
									me.vars.lit = false
								}
							}
							if (me.vars.hovering) {
								vars.menu.hoverMessage = "Credits"
								if (Game.input.activePointer.isDown) {
									me.vars.clickDelay++
								}
								else {
									me.vars.clickDelay = 0
									vars.menu.clickCooldown = false
									me.vars.clicked = false
								}
								if (! vars.menu.hoverCooldown) {
									playSound("Hover_Button")
									vars.menu.hoverCooldown = true
								}
							}
							else {
								me.vars.clickDelay = 0
								me.vars.lit = false
							}

							if (me.vars.lit != me.vars.wasLit) {
								if (me.vars.lit) {
									me.addColor("#EEEEEE", 0)
								}
								else {
									me.addColor("black", 0)
								}
								me.vars.wasLit = me.vars.lit
							}
							me.cameraOffset.y = vars.menu.logoBob[0] + 365
						},
						"stateToRun": ["menu", 0]
					}
				]
			},
			"id": "Credits_Button",
			"x": 0,
			"y": 0,
			"type": "text",
			"text": "Credits",
			"settings": {
				"font": "15pt Helvetica",
				"fill": "black"
			}
		},
		// Credits button
		{
			"scripts": {
				"init": [
					{
						"code": function() {
							me.anchor.setTo(0.5, 1)
							me.x = Game.width / 2
							me.y = Game.height

							me.fixedToCamera = true
						},
						"stateToRun": ["menu", 0]
					},
					{
						"code": function() {
							me.anchor.setTo(0.5, 1)
							me.x = Game.width / 2
							me.y = Game.height
						},
						"stateToRun": ["menu", 1]
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
		// Hover text
		{
			/*
			"scripts": {
				"init": [
					{
						"code": function() {
							me.x = 0
							me.y = 0
							me.fixedToCamera = true
							me.setStyle({
								"font": "10pt Helvetica",
								"fill": "black"
							})
						},
						"stateToRun": ["menu", 0]
					},
					{
						"code": function() {
							me.x = 0
							me.y = 0
							me.setStyle({
								"font": "10pt Helvetica",
								"fill": "black"
							})
						},
						"stateToRun": ["menu", 1]
					},
					{
						"code": function() {
							me.x = 0
							me.y = 0
							me.setStyle({
								"font": "10pt Helvetica",
								"fill": "white"
							})
						},
						"stateToRun": ["game"]
					}
				],
				"main": [
					{
						"code": function() {
							me.bringToTop()
						},
						"stateToRun": ["menu", 0]
					},
					{
						"code": function() {
							me.bringToTop()
						},
						"stateToRun": ["game"]
					}
				]
			},
			*/ // FPS is hidden
			"id": "FPS_Text",
			"x": 0,
			"y": 0,
			"text": "",
			"settings": {
				"font": "10pt Helvetica",
				"fill": "black"
			},
			"type": "text"
		},
		// FPS
		{
			"scripts": {
				"init": [
					{
						"code": function() {
							me.fixedToCamera = true
							me.visible = false
						},
						"stateToRun": ["menu", 0]
					}
				]
			},
			"id": "CreatedBy_Text",
			"x": 0,
			"y": 415,
			"text": "(see https://hedgehog125.github.io/Frontier-Fan-Made-Game/Licence.md)",
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
							me.anchor.setTo(1)
						},
						"stateToRun": ["menu", 0]
					}
				]
			},
			"id": "By_Text",
			"x": 800,
			"y": 450	,
			"text": "hedgehog125",
			"settings": {
				"font": "8pt Helvetica",
				"fill": "black"
			},
			"type": "text"
		},
		// Credits text
		{
			"scripts": {
				"init": [
					{
						"code": function() {
							vars.game.startedPlaying = true
							me.anchor.setTo(0.5)

							me.visible = false
						},
						"stateToRun": ["game"]
					}
				]
			},
			"id": "Game_Saved_Message",
			"x": 0,
			"y": 0,
			"text": "Game saved",
			"settings": {
				"font": "10pt Helvetica",
				"fill": "white"
			},
			"type": "text"
		},
		// Game saved message

		// World selector | Upgrades

		{
			"scripts": {
				"init": [
					{
						"code": function() {
							me.visible = false
						},
						"stateToRun": ["menu", 1]
					}
				],
				"main": [
					{
						"code": function() {

						},
						"stateToRun": ["menu", 1]
					}
				]
			},
			"id": "Tabs",
			"x": 0,
			"y": 0,
			"cos": "Tab",
			"clonescripts": {
				"init": [
					function() {
						me.anchor.setTo(0)
						me.scale.setTo(2)

						me.vars.ID = dataForClone[1]
						me.vars.parent = Sprites[dataForClone[2]]
						me.vars.hover = false
						me.vars.clicked = false
						me.vars.click = 0

						me.inputEnabled = true

						me.events.onInputOver.add(function(sprite) {
							me = sprite

							playSound("Hover_Button")

							me.vars.clicked = true

							var execute = me.vars.parent
							if (! execute.vars.selected) {
								execute.addColor("#BFBFBF", 0)
							}
						})
						me.events.onInputOut.add(function(sprite) {
							me = sprite

							var execute = me.vars.parent
							if (! execute.vars.selected) {
								execute.addColor("Black", 0)
							}
						})
						me.events.onInputDown.add(function(sprite) {
							me = sprite

							playSound("Click_Button")

							me.vars.clicked = true
							vars.menu.changeTab(me.vars.ID)
						})

						me.vars.normalY = me.y
					}
				],
				"main": [
					function() {

						me.y = vars.menu.logoBob[0] + me.vars.normalY

						if (me.vars.click == 1) {
							if (! me.vars.clicked) {
								var execute = me.vars.parent
								execute.vars.selected = false
								execute.addColor("black", 0)
								me.vars.click = 0
							}
							me.vars.click = 0
						}
						if (Game.input.activePointer.isDown) {
							me.vars.click = 1
						}
						else {
							me.vars.clicked = false
						}
					}
				]
			}
		},
		// Tabs
		{
			"scripts": {
				"init": [
					{
						"code": function() {
							vars.menu.tab = 0

							vars.menu.tabs = vars.menu.menus.JSON.upgrades

							var spacing = 20

							var i = 0
							var x = (spacing / 2)

							for (i in vars.menu.tabs) {
								var c = vars.menu.tabs[i]
								clone(x, spacing, undefined, i, c["text"], {
									"fill": "white"
								})
							}

							for (i in vars.menu.tabs) {
								var c = vars.menu.tabs[i]
								var execute = Sprites[spriteCloneIds[myJSON.id][i]]
								var space = (Game.width / vars.menu.tabs.length) - ((spacing / vars.menu.tabs.length) * 2)

								execute.x = x + 10
								functionForClone = [
									function() {
										me.width = dataForClone[0]
										return [me.x + (me.width / 2), me.y + (me.height / 2)]
									},
									"after"
								]

								if (i == vars.menu.tabs.length - 1) {
									var cos = "Tab_End"
								}
								else {
									var cos = "Tab"
								}

								var returned = cloneSprite(execute.x, execute.y, cos, "Tabs", [
									space,
									i,
									spriteCloneIds[execute.cloneOf][execute.cloneID]
								])
								execute.bringToTop()

								execute.anchor.setTo(0.5)
								execute.x = returned[0]
								execute.y = returned[1]

								execute.vars.normalY = execute.y

								var x = x + space
							}

							vars.menu.changeTab = function(id) {
								if (vars.menu.tab != id) {
									vars.menu.tab = id

									var i = 0
									var data = vars.menu.tabs[vars.menu.tab]

									for (i in data.content) {
										var c = data.content[i]
										if (c.type == "image" || c.type == "button") {
											functionForClone = [
												function() {
													me.vars.JSONID = dataForClone.JSONID
													me.vars.tab = dataForClone.tab
													me.vars.JSON = vars.menu.tabs[me.vars.tab].content[me.vars.JSONID]

													me.anchor.setTo(0.5)
												},
												"before"
											]

											cloneSprite(c.x, c.y, c.imgs[c.selected], "Tab_Content_Sprites", {
												"JSONID": i,
												"tab": vars.menu.tab
											})
										}
									}
								}
							}

							vars.menu.tab = ! vars.menu.tab
							vars.menu.changeTab(0)

						},
						"stateToRun": ["menu", 1]
					}
				],
				"main": [
					{
						"code": function() {

						},
						"stateToRun": ["menu", 1]
					}
				]
			},
			"id": "Tabs_Text",
			"x": 0,
			"y": 0,
			"type": "text",
			"cos": "Tab",
			"clonescripts": {
				"init": [
					function() {
						me.vars.selected = false
						me.vars.ID = dataForClone
						me.vars.JSON = vars.menu.tabs[me.vars.ID]

						me.vars.selected = ! (vars.menu.tab == me.vars.ID)

						me.vars.normalY = me.y
					}
				],
				"main": [
					function() {
						if (me.vars.selected != (vars.menu.tab == me.vars.ID)) {
							me.vars.selected = vars.menu.tab == me.vars.ID
							if (me.vars.selected) { // Update me.
								me.addColor("White", 0)
							}
							else {
								me.addColor("Black", 0)
							}
						}

						me.y = vars.menu.logoBob[0] + me.vars.normalY
					}
				]
			}
		},
		// Tab text
		{
			"scripts": {
				"init": [
					{
						"code": function() {

						},
						"stateToRun": ["menu", 1]
					}
				],
				"main": [
					{
						"code": function() {

						},
						"stateToRun": ["menu", 1]
					}
				]
			},
			"id": "Tab_Content_Sprites",
			"x": 0,
			"y": 0,
			"cos": null,
			"clonescripts": {
				"init": [
					function() {
						if (me.vars.JSON.prefunc != null) {
							me.vars.JSON.prefunc()
						}

						me.vars.normalX = me.x
						me.vars.normalY = me.y
						me.vars.selectedImgWas = me.vars.JSON.selected
						if (me.vars.JSON.type == "button") {
							me.vars.hovering = false
							me.vars.clicked = false
							me.vars.click = 0

							me.inputEnabled = true

							me.events.onInputOver.add(function(sprite) {
								me = sprite

								playSound("Hover_Button")

								me.vars.hovering = true
								me.vars.clicked = true
								me.vars.JSON.hoverstart()
							})
							me.events.onInputOut.add(function(sprite) {
								me = sprite

								me.vars.hovering = false
								me.vars.JSON.hoverend()
							})
							me.events.onInputDown.add(function(sprite) {
								me = sprite
								me.vars.hovering = true

								if (me.vars.JSON.active) {
									playSound("Click_Button")
									me.vars.JSON.clickfunc()
								}
								else {
									playSound("Deny_Button")
								}
							})
							me.events.onInputUp.add(function(sprite) {
								me.vars.clicked = false
							})
						}

						me.vars.JSON.initfunc()
					}
				],
				"main": [
					function() {
						me.y = vars.menu.logoBob[0] + me.vars.normalY

						if (me.vars.selectedImgWas != me.vars.JSON.selected) {
							me.vars.selectedImgWas = me.vars.JSON.selected
							me.loadTexture(me.vars.JSON.imgs[me.vars.JSON.selected])
						}


						if (me.vars.JSON.type == "button") {
							if (me.vars.click == 1) {
								if ((! me.vars.hovering) || ((! me.vars.clicked) && touchscreen)) {  // Problem here. <============
									if (! touchscreen) {
										me.vars.hovering = false
									}
									me.vars.clicked = false
									me.vars.JSON.hoverend()
								}
								me.vars.click = 0
							}
							if (Game.input.activePointer.isDown) {
								if (me.vars.click == 0) {
									me.vars.click = 1
								}
							}
							else {
								me.vars.clicked = false
							}
							if (me.vars.hovering) {
								if (me.vars.JSON.hoverMessage != undefined) {
									if (typeof me.vars.JSON.hoverMessage == "function") {
										vars.menu.hoverMessage = me.vars.JSON.hoverMessage()
									}
									else {
										vars.menu.hoverMessage = me.vars.JSON.hoverMessage
									}
								}
							}
						}

						me.vars.JSON.mainfunc()

						if (me.vars.tab != vars.menu.tab) {
							deleteClone()
						}
					}
				]
			}
		},
		// Content

		// Game

		{
			"scripts": {
				"init": [
					{
						"code": function() {
							me.vars.flashCooldown = -1

							setHealth = function(health, disableFlash) {
								vars.game.health = health

								var execute = Sprites["HealthBar"]

								execute.ctx.clearRect(0, 0, execute.width, execute.height)
								execute.ctx.lineCap = "round"

								execute.ctx.lineWidth = 10
								if (health == vars.game.save.upgrades.maxHealth && (! disableFlash)) {
									execute.ctx.strokeStyle = "White"

									playSound("Health_Restored")
									execute.vars.flashCooldown = 35
								}
								else {
									execute.ctx.strokeStyle = "#B9B9B9"
								}
								execute.ctx.beginPath()
								execute.ctx.moveTo(5, execute.height / 2)
								execute.ctx.lineTo(execute.width - 5, execute.height / 2)
								execute.ctx.stroke()

								if (((vars.game.health / vars.game.save.upgrades.maxHealth) * 700) > 5) {
									execute.ctx.lineWidth = 5
									execute.ctx.strokeStyle = "red"
									execute.ctx.beginPath()
									execute.ctx.moveTo(5, execute.height / 2)
									execute.ctx.lineTo(Math.max(((vars.game.health / vars.game.save.upgrades.maxHealth) * 700) - 5, 5), execute.height / 2)
									execute.ctx.stroke()
								}

							}
							vars.game.health = vars.game.save.upgrades.maxHealth
							setHealth(vars.game.health, true)

						},
						"stateToRun": ["game"]
					}
				],
				"main": [
					{
						"code": function() {
							me.dirty = true

							if (me.vars.flashCooldown == 0) {
								me.vars.flashCooldown = -1

								setHealth(vars.game.health, true)
							}
							else {
								me.vars.flashCooldown--
							}
						},
						"stateToRun": ["game"]
					}
				]
			},
			"id": "HealthBar",
			"type": "canvas",
			"width": 700,
			"height": 10
		},
		// Health bar
		{
			"scripts": {
				"init": [
					{
						"code": null,
						"stateToRun": ["game"]
					}
				],
				"main": [
					{
						"code": function() {
							me.bringToTop()
						},
						"stateToRun": ["game"]
					}
				]
			},
			"id": "HealthBar_Frame",
			"x": 100,
			"y": 0,
			"type": "canvasFrame",
			"bitmapID": "HealthBar",
			"fixedToCamera": true
		},
		// Health bar sprite

		{
			"scripts": {
				"main": [
					{
						"code": null,
						"stateToRun": ["game"] // So the clone's scripts get run
					}
				]
			},
			"clonescripts": {
				"init": [
					function() {
						me.width = 100
						me.height = 10

						me.vars.idleTime = 0
						me.vars.wasBeingDestroyed = false
						me.vars.dataForClone = dataForClone
						me.vars.parent = me.vars.dataForClone.parent
						me.vars.parentName = me.vars.parent.cloneOf + "#" + me.vars.parent.cloneID
						me.vars.myName = me.cloneOf + "#" + me.cloneID

						functionForClone = [
							function() {
								return me
							},
							"before"
						]
						me.vars.x = getCentreX(me.vars.parentName)
						me.vars.y = getTopY(me.vars.parentName) - 10

						me.vars.execute = cloneSprite(me.vars.x, me.vars.y, null, "Enemy_HealthBar_Frames", me, null, null, myJSON.width, myJSON.height, false, me.vars.myName)

						me.vars.setHealth = function(health, maxHealth, sprite, overideIdleReset) {
							if (! overideIdleReset) {
								sprite.vars.idleTime = 0 // Reset the idle time
							}

							var execute = sprite

							execute.ctx.clearRect(0, 0, execute.width, execute.height)
							execute.ctx.lineCap = "round"

							execute.ctx.lineWidth = 10
							execute.ctx.strokeStyle = "#B9B9B9"
							execute.ctx.beginPath()
							execute.ctx.moveTo(5, execute.height / 2)
							execute.ctx.lineTo(execute.width - 5, execute.height / 2)
							execute.ctx.stroke()

							if (health > 0) {
								execute.ctx.lineWidth = 5
								execute.ctx.strokeStyle = "red"
								execute.ctx.beginPath()
								execute.ctx.moveTo(5, execute.height / 2)
								execute.ctx.lineTo(Math.max(((health / maxHealth) * 100) - 5, 5), execute.height / 2)
								execute.ctx.stroke()
							}

						}
						me.vars.setHealth(me.vars.dataForClone.health, me.vars.dataForClone.maxHealth, me)
					}
				],
				"main": [
					function() {
						me.dirty = true

						if (! me.vars.destroyed) {
							me.vars.x = getCentreX(me.vars.parentName)
							me.vars.y = getTopY(me.vars.parentName) - 10
						}



						if (me.vars.idleTime > 200 || me.vars.destroyed) {
							me.vars.execute.alpha = me.vars.execute.alpha - (1 / 50)
							if (! me.vars.wasBeingDestroyed) {
								me.vars.wasBeingDestroyed = true
								if (me.vars.destroyed) {
									me.vars.setHealth(0, me.vars.dataForClone.maxHealth, me, true)
								}
							}
							if (me.vars.execute.alpha <= 0) { // Delete the sprite and the canvas
								deleteClone(me.vars.execute.cloneID, me.vars.execute.cloneOf)
								deleteClone()
								if (! me.vars.destroyed) { // So the parent doesn't try to communicate with a destroyed healthbar
									me.vars.parent.vars.healthbar = null // So it creates a new one when needed
								}
							}
						}
						else {
							if (me.vars.execute.alpha != 1) {
								me.vars.execute.alpha = 1
								me.vars.wasBeingDestroyed = false
							}
						}

						me.vars.idleTime++
					}
				]
			},
			"id": "Enemy_HealthBars",
			"type": "canvas",
			"width": 100,
			"height": 10
		},
		// Enemy health bars
		{
			"scripts": {
				"main": [
					{
						"code": null,
						"stateToRun": ["game"] // So the clone's scripts get run
					}
				]
			},
			"clonescripts": {
				"init": [
					function() {
						me.anchor.setTo(0.5)

						me.width = 100
						me.height = 10

						me.vars.parent = dataForClone
					}
				],
				"main": [
					function() {
						me.bringToTop()

						me.x = me.vars.parent.vars.x
						me.y = me.vars.parent.vars.y
					}
				]
			},
			"id": "Enemy_HealthBar_Frames",
			"x": 0,
			"y": 0,
			"type": "canvasFrame",
			"bitmapID": "Enemy_HealthBars",
			"fixedToCamera": false
		},
		// Enemy health bar sprites

		{
			"scripts": {
				"init": [
					{
						"code": function() {
							me.anchor.setTo(0.5)

							me.width = Game.world.width
							me.height = Game.world.height
							me.x = Game.world.centerX
							me.y = Game.world.centerY
						},
						"stateToRun": ["game"]
					}
				],
				"main": [
					{
						"code": function() {
							if (me.x + (me.width / 2) < Game.world.camera.x) {
								me.x = Game.world.width + (me.width / 2)
							}
							me.scale.setTo(vars.game.zoom, vars.game.zoom)
						},
						"stateToRun": ["game"]
					}
				]
			},
			"id": "Star_Parallax_1",
			"x": 0,
			"y": 0,
			"cos": "Star_Background"
		},
		// Star parallax 1
		{
			"scripts": {
				"init": [
					{
						"code": function() {
							me.anchor.setTo(0.5)

							me.width = Game.world.width
							me.height = Game.world.height
							me.x = Game.width + (me.width / 2) + 50
							me.y = Game.world.centerY
						},
						"stateToRun": ["game"]
					}
				],
				"main": [
					{
						"code": function() {
							vars.game.scroll = vars.game.scroll + 0.5
							Game.world.camera.x = vars.game.scroll
							Game.world.setBounds(0, 0, Game.width + vars.game.scroll, Game.height)
							if (me.x + (me.width / 2) < Game.world.camera.x) {
								me.x = Game.world.width + (me.width / 2)
							}
							me.scale.setTo(vars.game.zoom, vars.game.zoom)
						},
						"stateToRun": ["game"]
					}
				]
			},
			"id": "Star_Parallax_2",
			"x": 0,
			"y": 0,
			"cos": "Star_Background"
		},
		// Star parallax 2
		{
			"scripts": {
				"init": [
					{
						"code": function() {
							me.vars.moneySplash = function(amount) {
								cloneSprite(me.x, me.y, null, "Money_Splash", null, "+" + amount, {
									"font": "15px Courier",
									"fill": "#FFFFFF"
								})
							}

							me.alpha = 1
							me.vars.animationFrame = 0
							vars.game.flash = 0
							vars.game.deathAnimationTick = 0
							vars.game.fireCooldown = 0

							me.fixedToCamera = true
							me.anchor.setTo(0.5)
							me.vars.won = false
							me.vars.wonAnimationDone = false
							me.vars.winVel = 0
							vars.game.boss.winAnimationTick = 0

							enableTouching()
						},
						"stateToRun": ["game"]
					}
				],
				"main": [
					{
						"code": function() {
							if (vars.game.deathAnimationTick == 0 && (! me.vars.won)) {
								if (vars.game.zoomAnimation == 0) {
									// Stop me from going offscreen.
									var glideX = inX
									var glideY = inY
									if (glideX - (me.width / 2) < 0) {
										var glideX = me.width / 2
									}
									if (glideX + (me.width / 2) > Game.width) {
										var glideX = Game.width - (me.width / 2)
									}
									if (glideY - (me.height / 2) < 0) {
										var glideY = me.height / 2
									}
									if (glideY + (me.height / 2) > Game.height) {
										var glideY = Game.height - (me.height / 2)
									}

									glideTo(glideX, glideY, vars.game.save.upgrades.speed)
								}
								else {
									me.cameraOffset.x = 50
									me.cameraOffset.y = Game.world.centerY
								}
								me.vars.animationFrame = me.vars.animationFrame + (1 / 5)
								if (Math.floor(me.vars.animationFrame) > 3) {
									me.vars.animationFrame = 0
								}
								if (vars.game.flash == 0) {
									if (touchingClones("Enemy_Rockets")) { // Hit enemy spaceship.
										Game.camera.shake(me.width / 5000, 200)
										playSound("Hit")

										vars.game.flash = 20
										var enemy = vars.game.planets[vars.game.currentPlanet]["enemies"][Sprites[touchInfo].vars.type]
										var damage = enemy["damage"]
										var enemySprite = Sprites[touchInfo]

										if (enemySprite.vars.hitFlash == 0) {
											enemySprite.loadTexture(enemy["cos"] + "_Hit")
											enemySprite.vars.hitFlash = 10
											enemySprite.vars.hp = enemySprite.vars.hp - 1
											vars.game.save.money = vars.game.save.money + 1
											me.vars.moneySplash(1)

											if (enemySprite.vars.hp > 0) {
												if (enemySprite.vars.healthbar != null) { // Set the healthbar's health
													enemySprite.vars.healthbar.vars.setHealth(enemySprite.vars.hp, enemySprite.vars.JSON.health, enemySprite.vars.healthbar)
												}
												else {
													functionForClone = [
														function() {
															return me
														},
														"before"
													]
													enemySprite.vars.healthbar = cloneSprite(null, null, null, "Enemy_HealthBars", {
														"health": enemySprite.vars.hp,
														"maxHealth": enemySprite.vars.JSON.health,
														"parent": enemySprite
													}, null, null, 100, 10)
												}
											}

										}
										setHealth(vars.game.health - damage)
									}
								}

								if (vars.game.health <= 0) {
									vars.game.deathAnimationTick = 1
								}

								if (vars.game.flash > 0) {
									vars.game.flash--
									me.loadTexture("Rocket_1_Hit")
								}
								else {
									me.loadTexture("Rocket_1#" + Math.floor(me.vars.animationFrame))
								}

								if (vars.game.health < vars.game.save.upgrades.maxHealth) {
									if (vars.game.health + vars.game.save.upgrades.hpRegen > vars.game.save.upgrades.maxHealth) { // Stop it going over the max health
										setHealth(vars.game.save.upgrades.maxHealth)
									}
									else {
										setHealth(vars.game.health + vars.game.save.upgrades.hpRegen)
									}
								}

								if (vars.game.zoomAnimation == 1) {
									vars.game.zoom = vars.game.zoom * 0.995
									if (vars.game.zoom < 1) {
										vars.game.zoom = 1
									}
									if (Math.round(vars.game.zoom) == 1) {
										vars.game.zoomAnimation = 0
									}
								}
								me.scale.setTo(vars.game.zoom * 2, vars.game.zoom * 2)
							}
							else {
								if (! me.vars.won) {
									if (vars.game.deathAnimationTick !== "done") {
										if (((vars.game.deathAnimationTick - 1) % 10) == 0) {
											playSound("Boom")
											cloneSprite(me.x + (Game.rnd.integerInRange(-(me.width / 2), me.width / 2)), me.y + (Game.rnd.integerInRange(-(me.height / 2), me.height / 2)), "Explosion", "Explosions", {
												"size": Game.rnd.integerInRange(30, 40)
											})
										}
										me.loadTexture("Rocket_1#" + Math.floor(me.vars.animationFrame))
										me.vars.animationFrame = me.vars.animationFrame + (1 / 5)
										if (Math.floor(me.vars.animationFrame) > 3) {
											me.vars.animationFrame = 0
										}
										vars.game.deathAnimationTick++
										me.alpha = 1 - (vars.game.deathAnimationTick / 200)
										if (me.alpha <= 0) {
											vars.game.deathAnimationTick = "done"

											Loaded.snds.Game_Music.fadeOut()
											Loaded.snds.Boss1.fadeOut()
											Loaded.snds.Boss2.fadeOut()
											Loaded.snds.Boss3.fadeOut()
											Loaded.snds.Boss4.fadeOut()
											Loaded.snds.Boss5.fadeOut()

											vars.game.saveDelay = 2 // Save progress in a couple of seconds
											vars.game.muteSaveSound = true

											beginFade(1, ["menu", 1], 0)
										}
									}
								}
							}
							if (vars.game.scroll >= vars.game.planets[vars.game.currentPlanet].boss.distance) {
								if (vars.game.boss.health <= 0) {
									vars.game.boss.winAnimationTick++
									if (! me.vars.won) {
										Loaded.snds.Game_Music.fadeOut()
										Loaded.snds.Boss1.fadeOut()
										Loaded.snds.Boss2.fadeOut()
										Loaded.snds.Boss3.fadeOut()
										Loaded.snds.Boss4.fadeOut()
										Loaded.snds.Boss5.fadeOut()
										me.vars.won = true
									}
									if (vars.game.boss.winAnimationTick == 60) { // Wait a bit before playing the sound
										playSound("Boom") // Strangely this creates a zoom sound
									}
									if (vars.game.boss.winAnimationTick > 60) { // Wait a bit before zooming off
										if (me.x > vars.game.scroll + Game.width + me.width) {
											if (! me.vars.wonAnimationDone) {
												me.vars.wonAnimationDone = true


												if ((vars.game.currentPlanet + 1) > vars.game.save.progress.completed) {
													vars.game.save.progress.completed = vars.game.currentPlanet + 1
													vars.game.save.money = vars.game.save.money + vars.game.planets[vars.game.currentPlanet].firstWinReward
												}
												vars.game.save.money = vars.game.save.money + vars.game.planets[vars.game.currentPlanet].winReward


												vars.game.saveDelay = 5 // Save progress in a few seconds
												vars.game.muteSaveSound = true

												beginFade(0.5, ["menu", 1], 0)
											}
										}
										me.vars.winVel = me.vars.winVel + 5

										me.cameraOffset.x = me.cameraOffset.x + me.vars.winVel
										me.vars.winVel = me.vars.winVel * 0.99
									}
								}
							}


							me.bringToTop()
						},
						"stateToRun": ["game"]
					}
				]
			},
			"id": "Rocket",
			"x": 0,
			"y": 0,
			"cos": "Rocket_1#0"
		},
		// Spaceship
		{
			"scripts": {
				"init": [
					{
						"code": function() {
							me.visible = false

							// A database for the homing bullets to comunicate.

							me.vars.tactics = {}
							me.vars.tactics.targets = {}

							// Find out the current weapon system...
							var upgrades = vars.game.save.upgrades
						 	me.vars.weaponConfig = {
								"bullets": {
									"speed": 5,
									"bob": {
										"amount": 3,
										"frequency": 3
									},
									"spread": 10,
									"cos": "Bullet_Normal",
									"snd": "Shot",
									"size": 2,
									"fireCos": "Explosion"
								},
								"lasers": {
									"speed": 7,
									"bob": {
										"amount": 2,
										"frequency": 4
									},
									"spread": 5,
									"cos": "Bullet_Laser",
									"snd": "Laser",
									"size": 1,
									"fireCos": "Laser Fire"
								},
								"plasma": {
									"speed": 10,
									"bob": {
										"amount": 1,
										"frequency": 5
									},
									"spread": 0,
									"cos": "Bullet_Plasma",
									"snd": "Laser",
									"size": 1.5,
									"fireCos": "Plasma Fire"
								}
							}
							me.vars.weaponSystem = null
							var types = me.vars.weaponConfig

							var i = 0
							for (i in types) {
								if (upgrades[i]) {
									me.vars.weaponSystem = i
								}
							}
							if (me.vars.weaponSystem == null) {
								me.vars.weaponSystem = "bullets"
							}

						},
						"stateToRun": ["game"]
					}
				],
				"main": [
					{
						"code": function() {
							if (vars.game.deathAnimationTick == 0 && vars.game.boss.winAnimationTick == 0) {
								if (vars.game.fireCooldown > vars.game.save.upgrades.fireRate) {
									var weapon = me.vars.weaponConfig[me.vars.weaponSystem]

									vars.game.fireCooldown = 0
									playSound(weapon.snd)
									clone(Sprites.Rocket.x + (Sprites.Rocket.width / 2), Sprites.Rocket.y, weapon.cos, weapon)
								}
								else {
									if (vars.game.zoomAnimation == 0) {
										vars.game.fireCooldown++
									}
								}
							}
						},
						"stateToRun": ["game"]
					}
				]
			},
			"id": "Bullet",
			"x": 0,
			"y": 0,
			"cos": "Bullet_Normal",
			"clonescripts": {
				"init": [
					function() {
						me.vars.weaponJSON = dataForClone

						me.visible = true

						me.scale.setTo(me.vars.weaponJSON.size)
						me.anchor.setTo(0.5)

						me.vars.tick = 0
						me.y = me.y + Game.rnd.integerInRange(-me.vars.weaponJSON.spread, me.vars.weaponJSON.spread)


						// For homing
						me.vars.following = null
						me.vars.turnSmooth = 0
						me.vars.turnTo = 0
						me.vars.follow = function(enemy) {
							if (enemy != null) {
								if (Sprites.Bullet.vars.tactics.targets[enemy] == null) {
									Sprites.Bullet.vars.tactics.targets[enemy] = 0
								}
								Sprites.Bullet.vars.tactics.targets[enemy]++
								me.vars.following = enemy
							}
						}
						me.vars.unfollow = function(enemy) {
							if (enemy != null) {
								if (Sprites.Bullet.vars.tactics.targets[enemy] == null) {
									Sprites.Bullet.vars.tactics.targets[enemy] = 0
								}
								Sprites.Bullet.vars.tactics.targets[enemy]--
								me.vars.following = null
							}
						}
						me.vars.needed = function(enemy) {
							if (Sprites[spriteCloneIds.Bullet[enemy]] == null) {
								Sprites.Bullet.vars.tactics.targets[enemy] = 0
								return false
							}
							var hitsNeeded = (Sprites[spriteCloneIds["Enemy_Rockets"][enemy]].vars.hp / vars.game.save.upgrades.fireDamage) //+ 1
							if (Sprites.Bullet.vars.tactics.targets[enemy] == null) {
								Sprites.Bullet.vars.tactics.targets[enemy] = 0
							}
							return hitsNeeded >= Sprites.Bullet.vars.tactics.targets[enemy]
							//return true // Does it really help?
						}

						enableTouching()

						cloneSprite(me.x, me.y, me.vars.weaponJSON.fireCos, "Explosions", {
							"size": 10,
							"disableScreenshake": true
						})
					}
				],
				"main": [
					function() {

						//me.x = me.x + 5
						if ((me.vars.tick % me.vars.weaponJSON.bob.frequency) == 0) {
							me.y = me.y + Game.rnd.integerInRange(-me.vars.weaponJSON.bob.amount, me.vars.weaponJSON.bob.amount)
						}

						me.vars.turnSmooth = Math.round((vars.game.save.upgrades.homing / 2000) * 360)
						if (me.vars.turnSmooth < 1) {
							me.vars.turnSmooth = 1
						}

						if (vars.game.save.upgrades.homing > 0) { // Homing
							var i = 0
							var closestDis = Infinity
							var closest = null

							for (i in spriteCloneIds.Enemy_Rockets) {
								if (spriteCloneIds.Enemy_Rockets[i] != undefined) {
									var c = Sprites[spriteCloneIds.Enemy_Rockets[i]]
									var dis = Math.abs(c.x - me.x) + Math.abs(c.y - me.y)
									if (! c.vars.JSON.invunerable) { // Don't home to them if they're invunerable!
										if (dis <= vars.game.save.upgrades.homing) {
											if (dis < closestDis) {
												var tooClose = dis <= Math.max(Sprites.Rocket.width, Sprites.Rocket.height) * 3
												if ((Game.rnd.integerInRange(0, 1) == 0) || (closest == null) || tooClose) { // Add some randomness.
													if (me.vars.needed(c.cloneID) || tooClose) {
														var closest = c
														var closestDis = dis
													}
												}
											}
										}
									}
								}
							}
							var angleWas = me.angle
							if (closest != null) {
								me.angle = getAngleBetweenSprites(me, closest)
								if (closest.cloneID != me.vars.following) {
									me.vars.unfollow(me.vars.following)
									me.vars.follow(closest.cloneID)
								}
							}
							if (Math.abs(me.angle - angleWas) > me.vars.turnSmooth) {
								if (me.angle - angleWas > 0) {
									me.angle = (angleWas + me.vars.turnSmooth) % 360
								}
								else {
									me.angle = (angleWas - me.vars.turnSmooth) % 360
								}
							}
							if (closest != null) {
								if ((closest.vars.hitFlash == 0) || closestDis * 4 < Math.max(closest.width, closest.height)) {
									move(me.vars.weaponJSON.speed)
								}
								else {
									if (closestDis * 2 < Math.max(closest.width, closest.height)) {  // No point if it is invunerable.
										move(-me.vars.weaponJSON.speed) // Tactical retreat
									}
								}
							}
							else {
								move(me.vars.weaponJSON.speed)
							}
						}
						else {
							move(me.vars.weaponJSON.speed)
						}

						if (me.x > Game.world.width || me.x < 0 || me.y < 0 || me.y > Game.height) {
							deleteClone()
							return
						}
						else {
							me.vars.tick++
						}
					}
				]
			}
		},
		// Bullets
		{
			"scripts": {
				"init": [
					{
						"code": function() {
							vars.game.boss.health = vars.game.planets[vars.game.currentPlanet].boss.health

							vars.game.spawnTick = 0
							vars.game.spawnRate = 200
							vars.game.boss.warningTick = 0

							me.visible = false


							// To calculate the chances of each type of spaceship spawning...

							me.vars.total = 0

							var i = 0
							for (i in vars.game.planets[vars.game.currentPlanet]["enemies"]) {
								var c = vars.game.planets[vars.game.currentPlanet]["enemies"][i]
								me.vars.total = me.vars.total + c["chance"]
							}

							me.vars.chances = {}

							var i = 0
							for (i in vars.game.planets[vars.game.currentPlanet]["enemies"]) {
								var c = vars.game.planets[vars.game.currentPlanet]["enemies"][i]
								me.vars.chances[i] = (c["chance"] / me.vars.total) * 10000
							}

							var arr = sortOb(me.vars.chances, true)

							me.vars.chances = arr[0]
							me.vars.chancesOrder = arr[1]
						},
						"stateToRun": ["game"]
					}
				],
				"main": [
					{
						"code": function() {
							if (vars.game.scroll < vars.game.planets[vars.game.currentPlanet].boss.distance) {
								if (vars.game.spawnTick > vars.game.spawnRate) {
									vars.game.spawnTick = 0 - (Game.rnd.integerInRange(0 - (vars.game.spawnRate / 5), vars.game.spawnRate / 5)) // Add some randomness


									var rnd = Game.rnd.between(0, 10000)
									var i = 0
									for (i in me.vars.chancesOrder) {
										var a = me.vars.chancesOrder[i]
										var c = vars.game.planets[vars.game.currentPlanet].enemies[a]
										if (rnd <= me.vars.chances[i]) {
											clone(Game.world.width, Game.rnd.between(0, Game.height), c.cos, a)
											break
										}
										var rnd = rnd - me.vars.chances[i]
									}
								}
								else {
									if (vars.game.zoomAnimation == 0) {
										vars.game.spawnTick = vars.game.spawnTick + (Math.floor(vars.game.scroll / 1000)) + 1
									}
								}
							}
							else {
								if (vars.game.boss.warningTick == 0) { // Just started, so make the music faster
									stopSound("Game_Music")
									Loaded.snds.Boss1.currentTime = (Loaded.snds.Game_Music.currentTime / Loaded.snds.Game_Music.duration) * Loaded.snds.Boss1.duration // Continue playing at the equivalent in this file
									playSound("Boss1", true)

									vars.game.boss.lastStage = 1
								}
								if (vars.game.boss.warningTick < 400) {
									vars.game.boss.warningTick++
									if ((vars.game.boss.warningTick % 30) == 0) {
										playSound("Warn")
									}
								}
								else {
									if (vars.game.boss.warningTick == 400) { // Just ended warning, so run the init script...
										vars.game.planets[vars.game.currentPlanet].boss.initScript()
										vars.game.boss.warningTick++
									}
									vars.game.planets[vars.game.currentPlanet].boss.mainScript()

									var currentStage = 6 - Math.round((vars.game.boss.health / vars.game.planets[vars.game.currentPlanet].boss.health) * 5)
									var currentStage = Math.max(currentStage, 1)
									var currentStage = Math.min(currentStage, 5)

									if (vars.game.deathAnimationTick == 0) {
										if (vars.game.boss.lastStage != currentStage) {
											var newSound = "Boss" + currentStage
											var oldSound = "Boss" + vars.game.boss.lastStage

											stopSound(oldSound)
											Loaded.snds.Boss1.currentTime = (Loaded.snds[oldSound].currentTime / Loaded.snds[oldSound].duration) * Loaded.snds[newSound].duration // Continue playing at the equivalent in this file
											playSound(newSound, true)

											vars.game.boss.lastStage = currentStage
										}
									}
								}
							}
						},
						"stateToRun": ["game"]
					}
				]
			},
			"id": "Enemy_Rockets",
			"x": 0,
			"y": 0,
			"cos": "Enemy_Rocket_1",
			"clonescripts": {
				"init": [
					function() {
						enableTouching()

						me.vars.type = dataForClone
						me.vars.JSON = vars.game.planets[vars.game.currentPlanet]["enemies"][me.vars.type]
						me.vars.hp = me.vars.JSON.health

						me.vars.hitFlash = 0
						me.vars.escaped = false
						me.vars.escapeTime = 0
						me.vars.noTouchTime = 0
						me.vars.xVel = 0
						me.vars.firstTouching = null
						me.vars.healthbar = null

						if (me.vars.JSON.size != undefined) {
							me.scale.setTo(me.vars.JSON.size)
						}

						me.anchor.setTo(0, 0.5)

						if (! me.vars.JSON.disableOffscreenPrevention) {
							if (me.y < Game.world.centerY) { // Check I'm not too high or low.
								if (me.y - (me.height / 2) - vars.game.config.minY < 0) {
									me.y = (me.height / 2) + vars.game.config.minY
								}
							}
							else {
								if (me.y + (me.height / 2) > Game.height) {
									me.y = Game.height - (me.height / 2)
								}
							}
						}


						if (! me.vars.JSON.disableSpawnMove) { // To stop me spawning inside of other spaceships and getting hurt.
							if (touchingClones("Enemy_Rockets")) {
								while (touchingClones("Enemy_Rockets")) {
									me.x = me.x + 5
								}
								me.x = me.x + me.width + 30 // Leave a gap
							}
						}

						me.vars.JSON.initScript()
					}
				],
				"main": [
					function() {
						vars.game.planets[vars.game.currentPlanet]["enemies"][me.vars.type]["mainScript"]()

						me.vars.moneySplash = function(amount) {
							cloneSprite(me.x, me.y, null, "Money_Splash", null, "+" + amount, {
								"font": "15px Courier",
								"fill": "#FFFFFF"
							})
						}

						if (! me.vars.JSON.invunerable) {
							if (touchingClones("Bullet")) {
								if (me.vars.hitFlash == 0) {
									if (! me.vars.JSON.disableBulletKnockback) {
										if (getCentreX() > getCentreX(touchInfo)) { // Knock me back.
											me.vars.xVel = me.vars.xVel + 2
										}
										else {
											me.vars.xVel = me.vars.xVel - 2
										}
									}

									deleteCloneByName(touchInfo) // Destroy the bullet that hit me.

									var healthWas = me.vars.hp
									var damage = vars.game.save.upgrades.fireDamage

									me.vars.hp = me.vars.hp - vars.game.save.upgrades.fireDamage
									me.loadTexture(vars.game.planets[vars.game.currentPlanet]["enemies"][me.vars.type]["cos"] + "_Hit")
									me.vars.hitFlash = 10
									if (me.vars.hp > 0) {
										playSound("Hit")
										vars.game.save.money = vars.game.save.money + vars.game.save.upgrades.fireDamage // Money
										me.vars.moneySplash(vars.game.save.upgrades.fireDamage)
										if (me.vars.JSON.hurtBoss) {
											vars.game.boss.health = vars.game.boss.health - damage
										}

										if (me.vars.healthbar != null) { // Set the healthbar's health
											me.vars.healthbar.vars.setHealth(me.vars.hp, me.vars.JSON.health, me.vars.healthbar)
										}
										else {
											functionForClone = [
												function() {
													return me
												},
												"before"
											]
											me.vars.healthbar = cloneSprite(null, null, null, "Enemy_HealthBars", {
												"health": me.vars.hp,
												"maxHealth": me.vars.JSON.health,
												"parent": me
											}, null, null, 100, 10)
										}
									}
									else {
										vars.game.save.money = vars.game.save.money + (vars.game.save.upgrades.fireDamage - (0 - me.vars.hp)) // Money
										me.vars.moneySplash(vars.game.save.upgrades.fireDamage - (0 - me.vars.hp))
										if (me.vars.JSON.hurtBoss) {
											vars.game.boss.health = vars.game.boss.health - healthWas
										}

										if (me.vars.healthbar != null) { // Tell the healthbar that I've been destroyed
											me.vars.healthbar.vars.destroyed = true
										}
									}
								}
								else {
									deleteCloneByName(touchInfo)
								}
							}
						}
						else {
							if (touchingClones("Bullet")) {
								deleteCloneByName(touchInfo) // Just delete the bullet without hurting me.
							}
						}
						// So enemy bullets don't blow up the spaceship they were fired from!
						if (! me.vars.escaped) {
							if (me.vars.firstTouching == null) {
								if (touchingClones("Enemy_Rockets")) {
									me.vars.firstTouching = touchInfo
								}
								else {
									//me.vars.escaped = true
								}
							}

							var touching = touchingClones("Enemy_Rockets")
							if (! touching) {
								me.vars.noTouchTime++
							}
							else {
								me.vars.noTouchTime = 0
								if (me.vars.firstTouching != touchInfo) { // If I am no longer touching the first enemy I touched or I'm touching an older enemy.
									me.vars.escaped = true
								}

								me.vars.escapeTime = me.vars.escapeTime + 1
								if (me.vars.escapeTime > 50) {
									me.vars.escaped = true
								}
							}
							if (me.vars.noTouchTime > 2) {
								me.vars.escaped = true
							}
						}
						if ((! me.vars.JSON.disableHitTest) && me.vars.escaped && me.vars.hitFlash == 0 && (! me.vars.moveBack)) {
							var criteria = function(hit) {
								return hit.vars.escaped && hit.vars.hitFlash == 0 && (! hit.vars.JSON.disableHitTest)
							}
							if (touchingClones("Enemy_Rockets", criteria)) {
								var planetEnemies = vars.game.planets[vars.game.currentPlanet]["enemies"]
								var hitRocket = Sprites[touchInfo]

								var bonusDamage = 2 // Extra damage because it's hard to get them to crash into each other.


								var damage = planetEnemies[hitRocket.vars.type].damage * bonusDamage

								var gainMoney = 0

								if (! me.vars.JSON.invunerable) {
									if (me.vars.hp - damage < 0) {
										var gainMoney = gainMoney + (me.vars.hp * bonusDamage)
										me.vars.hp = me.vars.hp - damage // Damage me
										if (me.vars.JSON.hurtBoss) {
											vars.game.boss.health = vars.game.boss.health - me.vars.hp
										}

										if (me.vars.healthbar != null) { // Tell the healthbar that I've been destroyed
											me.vars.healthbar.vars.destroyed = true
										}
									}
									else {
										me.vars.hp = me.vars.hp - damage // Damage me.
										var gainMoney = gainMoney + (damage + bonusDamage)
										if (me.vars.JSON.hurtBoss) {
											vars.game.boss.health = vars.game.boss.health - damage
										}

										if (me.vars.healthbar != null) { // Set the healthbar's health
											me.vars.healthbar.vars.setHealth(me.vars.hp, me.vars.JSON.health, me.vars.healthbar)
										}
										else {
											functionForClone = [
												function() {
													return me
												},
												"before"
											]
											me.vars.healthbar = cloneSprite(null, null, null, "Enemy_HealthBars", {
												"health": me.vars.hp,
												"maxHealth": me.vars.JSON.health,
												"parent": me
											}, null, null, 100, 10)
										}
									}
								}


								var damage = planetEnemies[me.vars.type].damage * bonusDamage

								if (! hitRocket.vars.JSON.invunerable) {
									if (hitRocket.vars.hp - damage < 0) {
										var gainMoney = gainMoney + (hitRocket.vars.hp * bonusDamage)
										hitRocket.vars.hp = hitRocket.vars.hp - damage // Damage me
										if (hitRocket.vars.JSON.hurtBoss) {
											vars.game.boss.health = vars.game.boss.health - hitRocket.vars.hp
										}

										if (hitRocket.vars.healthbar != null) { // Tell the healthbar that I've been destroyed
											hitRocket.vars.healthbar.vars.destroyed = true
										}
									}
									else {
										hitRocket.vars.hp = hitRocket.vars.hp - damage // Damage me.
										var gainMoney = gainMoney + (damage * bonusDamage)
										if (hitRocket.vars.JSON.hurtBoss) {
											vars.game.boss.health = vars.game.boss.health - damage
										}

										if (hitRocket.vars.healthbar != null) { // Set the healthbar's health
											hitRocket.vars.healthbar.vars.setHealth(hitRocket.vars.hp, hitRocket.vars.JSON.health, hitRocket.vars.healthbar)
										}
										else {
											functionForClone = [
												function() {
													return me
												},
												"before"
											]
											hitRocket.vars.healthbar = cloneSprite(null, null, null, "Enemy_HealthBars", {
												"health": hitRocket.vars.hp,
												"maxHealth": hitRocket.vars.JSON.health,
												"parent": hitRocket
											}, null, null, 100, 10)
										}
									}
								}

								vars.game.save.money = vars.game.save.money + gainMoney // Get money.
								me.vars.moneySplash(gainMoney)

								if (getCentreX() > getCentreX(touchInfo)) { // Propel us away from each other.
									if (! me.vars.JSON.disableSpaceshipKnockback) {
										me.vars.xVel = me.vars.xVel + 5
									}
									if (! hitRocket.vars.JSON.disableSpaceshipKnockback) {
										hitRocket.vars.xVel = hitRocket.vars.xVel - 5
									}
								}
								else {
									if (! me.vars.JSON.disableSpaceshipKnockback) {
										me.vars.xVel = me.vars.xVel - 5
									}
									if (! hitRocket.vars.JSON.disableSpaceshipKnockback) {
										hitRocket.vars.xVel = hitRocket.vars.xVel + 5
									}
								}

								me.loadTexture(vars.game.planets[vars.game.currentPlanet]["enemies"][me.vars.type]["cos"] + "_Hit")
								hitRocket.loadTexture(vars.game.planets[vars.game.currentPlanet]["enemies"][hitRocket.vars.type]["cos"] + "_Hit")
								me.vars.hitFlash = 10
								hitRocket.vars.hitFlash = 10

								if (me.width + me.height > hitRocket.width + hitRocket.height) {
									if (me.width > me.height) {
										var explosionWidth = me.width
									}
									else {
										var explosionWidth = me.height
									}
								}
								else {
									if (hitRocket.width > hitRocket.height) {
										var explosionWidth = hitRocket.width
									}
									else {
										var explosionWidth = hitRocket.height
									}
								}


								cloneSprite(me.x, me.y, "Explosion", "Explosions", {
									"size": explosionWidth
								})
							}
						}


						me.x = me.x + me.vars.xVel
						me.vars.xVel = me.vars.xVel * 0.8

						if (me.vars.hitFlash > 0) {
							me.vars.hitFlash--
							if (me.vars.hitFlash == 0) {
								me.loadTexture(vars.game.planets[vars.game.currentPlanet]["enemies"][me.vars.type]["cos"])
							}
						}
						if (me.x < Game.world.camera.x - me.width) {
							if (me.vars.healthbar != null) { // Tell the healthbar that I've been destroyed
								me.vars.healthbar.vars.destroyed = true
							}
							deleteClone()
							return
						}
						if (me.vars.hp <= 0) {
							playSound("Boom")
							var script = vars.game.planets[vars.game.currentPlanet]["enemies"][me.vars.type]["deathScript"]
							if (me.vars.healthbar != null) {
								me.vars.healthbar.vars.destroyed = true
							}
							if (! (script === null || script === undefined)) {
								script()
							}
							if (me.width > me.height) {
								var explosionWidth = me.width
							}
							else {
								var explosionWidth = me.height
							}
							cloneSprite(me.x, me.y, "Explosion", "Explosions", {
								"size": explosionWidth
							})

							deleteClone()
							return
						}
					}
				]
			}
		},
		// Enemy spaceships
		{
			"scripts": {
				"init": [
					{
						"code": function() {
							me.visible = false

							me.scale.setTo(10)
							me.anchor.setTo(0.5)

							me.x = Game.width / 2
							me.y = Game.height / 2

							me.fixedToCamera = true
						},
						"stateToRun": ["game"]
					}
				],
				"main": [
					{
						"code": function() {
							if (vars.game.scroll >= vars.game.planets[vars.game.currentPlanet].boss.distance) {
								if (vars.game.boss.warningTick < 400) {
									if ((vars.game.boss.warningTick % 30) > 15) {
										if (me.visible) { // No point in showing me if I'm already showing
											me.visible = false
										}
									}
									else {
										if (! me.visible) { // No point in showing me if I'm already showing
											me.visible = true
										}
									}
								}
								else {
									if (me.visible) { // No point in hiding me if I'm already hidden
										me.visible = false // Hide me when I'm not needed
									}
								}
							}
							else {
								if (me.visible) { // No point in hiding me if I'm already hidden
									me.visible = false // Hide me when I'm not needed
								}
							}
							me.bringToTop()
						},
						"stateToRun": ["game"]
					}
				]
			},
			"id": "Warn",
			"x": 0,
			"y": 0,
			"cos": "Warn"
		},
		// Warning
		{
			"scripts": {
				"init": [
					{
						"code": function() {
							me.visible = false
						},
						"stateToRun": ["game"]
					}
				],
				"main": [
					{
						"code": null,
						"stateToRun": ["game"]
					}
				]
			},
			"id": "Explosions",
			"x": 0,
			"y": 0,
			"cos": "Explosion",
			"clonescripts": {
				"init": [
					function() {
						if (! dataForClone["disableScreenshake"]) {
							Game.camera.shake(dataForClone["size"] / 5000, 200)
						}

						me.width = dataForClone["size"]
						me.height = dataForClone["size"]
						me.anchor.setTo(0.5)
						me.visible = true
						me.vars.tick = 0
						me.vars.duration = me.width
					}
				],
				"main": [
					function() {
						me.bringToTop()
						me.width = me.width * 1.03
						me.height = me.height * 1.03
						me.vars.tick++
						me.alpha = 1 - (me.vars.tick / me.vars.duration)
						if (me.vars.tick >= me.vars.duration) {
							deleteClone()
							return
						}
					}
				]
			}
		},
		// Explosions
		{
			"scripts": {
				"main": [
					{
						"code": null,
						"stateToRun": ["game"]
					}
				]
			},
			"id": "Money_Splash",
			"x": 0,
			"y": 0,
			"text": "",
			"type": "text",
			"clonescripts": {
				"init": [

				],
				"main": [
					function() {
						me.alpha = me.alpha - (1 / 100)
						me.y = me.y - 1
						if (me.alpha <= 0) {
							deleteClone()
							return
						}
					}
				]
			}
		}
		// Money Splash
	],
	"scripts": {
		"init": [
			{
				"code": function() {
					if (vars.menu.switchedMenus) {
						vars.menu.switchedMenus = false
					}
					else {
						playSound("Menu_Music", true)
					}

					Game.world.setBounds(0, 0, Game.width * vars.menu.backgroundSize, Game.height * vars.menu.backgroundSize)
				},
				"stateToRun": ["menu", 0]
			},

			{
				"code": function() {
					if (vars.menu.switchedMenus) {
						vars.menu.switchedMenus = false
					}
					else {
						playSound("Menu_Music", true)
					}

					Game.world.setBounds(0, 0, Game.width, Game.height)
					Game.camera.x = 0
					Game.camera.y = 0
				},
				"stateToRun": ["menu", 1]
			},

			{
				"code": function() {
					Game.world.setBounds(0, 0, Game.width, Game.height)
					vars.game.scroll = 0
					vars.game.zoom = 5
					vars.game.zoomAnimation = 1

					stopSound("Game_Music")
					stopSound("Boss1")
					stopSound("Boss2")
					stopSound("Boss3")
					stopSound("Boss4")
					stopSound("Boss5")

					Loaded.snds.Game_Music.volume = 1
					Loaded.snds.Boss1.volume = 1
					Loaded.snds.Boss2.volume = 1
					Loaded.snds.Boss3.volume = 1
					Loaded.snds.Boss4.volume = 1
					Loaded.snds.Boss5.volume = 1

					playSound("Game_Music", false, "start", function() {
						playSound("Game_Music", true, "repeat")
					})
				},
				"stateToRun": ["game"]
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
			},
			{
				"code": function() {
					vars.menu.hoverMessage = ""

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
				},
				"stateToRun": [["menu", 1], "before"]
			},
			{
				"code": function() {
					Sprites["Hover_Text"].setText(vars.menu.hoverMessage)
				},
				"stateToRun": [["menu", 1], "after"]
			}
		]
	},
	"mainScript": function() {
		Sprites["FPS_Text"].setText("FPS: " + currentFPS)

		if (vars.game.startedPlaying) {
			vars.game.saveDelay = vars.game.saveDelay - (1 / 60)
			if (vars.game.saveDelay <= 0) {
				vars.game.saveNow(vars.game.muteSaveSound)
				vars.game.muteSaveSound = false
				vars.game.saveDelay = vars.game.config.autoSaveTime
			}
		}

		if (Sprites.Game_Saved_Message.visible) {
			Sprites.Game_Saved_Message.alpha = Sprites.Game_Saved_Message.alpha - (2 / 100)
			Sprites.Game_Saved_Message.bringToTop()

			if (Sprites.Game_Saved_Message.alpha <= 0) {
				Sprites.Game_Saved_Message.alpha = 1
				Sprites.Game_Saved_Message.visible = false
			}
		}
	}
}
