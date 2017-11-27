// TODO:

// For first release...

// Upgrades and menu.
// Health bars on enemies.
// Add bosses into the API.
// Create a boss for the first planet.
// Settings menu. (not that important, but has to be done)
// Continue game button (not that important, but has to be done)

// For later releases...

// Add more planets. <==
// Create the minigame for the bosses.
// Different spaceships. (possibly should be in first release).




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

		{
			"id": "Explosion",
			"src": "explosion.png"
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

							me.vars.newSave = function() {
								vars.game.save = {}

								vars.game.save.upgrades = {}
								vars.game.save.upgraded = []

								var i = 0
								var ob = vars.game.config.defaultUpgrades
								var key = Object.keys(ob)
								while (i < key.length) {
									var c = ob[key[i]]
									vars.game.save.upgrades[key[i]] = c
									vars.game.save.upgraded[vars.game.save.upgraded.length] = 0
									i++
								}

								vars.game.save.money = 0

								vars.game.currentPlanet = 0 // Start on the first plannet.
								vars.game.save.progress = {}
								vars.game.save.progress.completed = 0
							}
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
									me.addColor("#EEEEEE", 0)
									playSound("Hover_Button")
									vars.menu.hoverCooldown = true
								}
								if (Game.input.activePointer.isDown) {
									if ((! vars.menu.clickCooldown) && (! vars.menu.dragging)) {
										vars.menu.clickCooldown = true

										me.vars.newSave()


										beginFade(5, ["game"], 	0)
										stopSound("Menu_Music")
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
									me.addColor("#EEEEEE", 0)
									playSound("Hover_Button")
									vars.menu.hoverCooldown = true
								}
								if (Game.input.activePointer.isDown) {
									if ((! vars.menu.clickCooldown) && (! vars.menu.dragging)) {
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
							me.anchor.setTo(0.5)
							me.x = Game.width / 2
							me.y = 440

							me.fixedToCamera = true
						},
						"stateToRun": ["menu", 0]
					},
					{
						"code": function() {
							me.anchor.setTo(0.5)
							me.x = Game.width / 2
							me.y = 440
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
							var x = spacing

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
							me.vars.click = 0
							me.vars.clicked = false

							me.inputEnabled = true

							me.events.onInputOver.add(function(sprite) {
								me = sprite

								playSound("Hover_Button")

								me.vars.JSON.hoverstart()
								me.vars.hovering = true
							})
							me.events.onInputOut.add(function(sprite) {
								me = sprite

								me.vars.JSON.hoverend()
								me.vars.hovering = false
							})
							me.events.onInputDown.add(function(sprite) {
								me = sprite

								playSound("Click_Button")

								me.vars.clicked = true
								me.vars.JSON.clickfunc()
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
								if (! me.vars.clicked) {
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
							me.alpha = 1
							me.vars.animationFrame = 0
							vars.game.flash = 0
							vars.game.deathAnimationTick = 0
							vars.game.health = vars.game.save.upgrades.maxHealth
							vars.game.fireCooldown = 0

							me.fixedToCamera = true
							me.anchor.setTo(0.5)
							enableTouching()
						},
						"stateToRun": ["game"]
					}
				],
				"main": [
					{
						"code": function() {
							if (vars.game.deathAnimationTick == 0) {
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

									glideTo(glideX, glideY, 10)
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
									setHealth(vars.game.health + 0.005)
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

										stopSound("Game_Music")
										beginFade(1, ["menu", 1], 0) // TODO: Change this to ["menu", 1] there's also a problem now.
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
						},
						"stateToRun": ["game"]
					}
				],
				"main": [
					{
						"code": function() {
							if (vars.game.deathAnimationTick == 0) {
								if (vars.game.fireCooldown > vars.game.save.upgrades.fireRate) {
									vars.game.fireCooldown = 0
									playSound("Shot")
									clone(Sprites.Rocket.x + (Sprites.Rocket.width / 2), Sprites.Rocket.y, "Bullet_Normal")
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
						me.visible = true
						me.scale.setTo(2)
						me.anchor.setTo(0.5)
						me.vars.tick = 0
						me.y = me.y + Game.rnd.integerInRange(-vars.game.config.bulletSpread, vars.game.config.bulletSpread)
						enableTouching()

						cloneSprite(me.x, me.y, "Explosion", "Explosions", {
							"size": 10,
							"disableScreenshake": true
						})
					}
				],
				"main": [
					function() {

						me.x = me.x + 5
						if ((me.vars.tick % 3) == 0) {
							me.y = me.y + Game.rnd.integerInRange(-2, 2)
						}


						if (me.x > Game.world.width + me.width) {
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
							vars.game.spawnTick = 0
							vars.game.spawnRate = 200
						},
						"stateToRun": ["game"]
					}
				],
				"main": [
					{
						"code": function() {
							if (vars.game.spawnTick > vars.game.spawnRate) {
								vars.game.spawnTick = 0
								var rnd = Game.rnd.between(0, 100)
								var i = 0
								for (i in vars.game.planets[vars.game.currentPlanet]["enemies"]) {
									var c = vars.game.planets[vars.game.currentPlanet]["enemies"][i]
									if (rnd >= c["chance"][0] && rnd <= c["chance"][1]) {
										clone(Game.world.width, Game.rnd.between(0, Game.height), c["cos"], i)
									}
								}
							}
							else {
								if (vars.game.zoomAnimation == 0) {
									vars.game.spawnTick = vars.game.spawnTick + (Math.floor(vars.game.scroll / 1000)) + 1
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
						me.anchor.setTo(0, 0.5)

						me.vars.type = dataForClone
						me.vars.hp = vars.game.planets[vars.game.currentPlanet]["enemies"][me.vars.type]["health"]

						me.vars.hitFlash = 0
						me.vars.fired = false
						me.vars.fireTime = 0
						me.vars.escaped = 0
						me.vars.xVel = 0

						if (me.y < Game.world.centerY) { // Check I'm not too high or low.
							if (me.y - (me.height / 2) - 10 < 0) {
								me.y = (me.height / 2) + 10
							}
						}
						else {
							if (me.y + (me.height / 2) > Game.height) {
								me.y = Game.height - (me.height / 2)
							}
						}


						enableTouching()

						vars.game.planets[vars.game.currentPlanet]["enemies"][me.vars.type]["initScript"]()
					}
				],
				"main": [
					function() {
						vars.game.planets[vars.game.currentPlanet]["enemies"][me.vars.type]["mainScript"]()

						if (touchingClones("Bullet")) {
							if (me.vars.hitFlash == 0) {
								if (me.x < Sprites[touchInfo].x) { // Knock me back.
									me.vars.xVel = me.vars.xVel + 2
								}
								else {
									me.vars.xVel = me.vars.xVel - 2
								}

								deleteCloneByName(touchInfo) // Destroy the bullet that hit me.

								me.vars.hp = me.vars.hp - vars.game.save.upgrades.fireDamage
								me.loadTexture(vars.game.planets[vars.game.currentPlanet]["enemies"][me.vars.type]["cos"] + "_Hit")
								me.vars.hitFlash = 10
								if (me.vars.hp > 0) {
									playSound("Hit")
									vars.game.save.money = vars.game.save.money + vars.game.save.upgrades.fireDamage // Money
								}
								else {
									vars.game.save.money = vars.game.save.money + (vars.game.save.upgrades.fireDamage - (0 - me.vars.hp)) // Money
								}
							}
							else {
								deleteCloneByName(touchInfo)
							}
						}
						if (! me.vars.fired) {
							if (! touchingClones("Enemy_Rockets")) {
								me.vars.escaped++
							}
							else {
								me.vars.escaped = 0
								me.vars.fireTime = me.vars.fireTime + 1
								if (me.vars.fireTime > 50) {
									me.vars.fired = true
								}
							}
							if (me.vars.escaped > 0) {
								me.vars.fired = true
							}
						}
						var criteria = function(hit) {
							return hit.vars.fired && hit.vars.hitFlash == 0
						}
						if (touchingClones("Enemy_Rockets", criteria) && me.vars.fired && me.vars.hitFlash == 0) {
							var planetEnemies = vars.game.planets[vars.game.currentPlanet]["enemies"]
							var hitRocket = Sprites[touchInfo]

							var bonusDamage = 2 // Extra damage because it's hard to get them to crash into each other.

							me.vars.hp = me.vars.hp - (planetEnemies[hitRocket.vars.type].damage * bonusDamage) // Damage me.
							hitRocket.vars.hp = hitRocket.vars.hp - (planetEnemies[me.vars.type].damage * bonusDamage)

							vars.game.save.money = vars.game.save.money + ((planetEnemies[hitRocket.vars.type].damage + planetEnemies[me.vars.type].damage) * (bonusDamage * 2)) // Get money.

							if (me.x > hitRocket.x) { // Propel us away from each other.
								me.vars.xVel = me.vars.xVel + 5
								hitRocket.vars.xVel = hitRocket.vars.xVel - 5
							}
							else {
								me.vars.xVel = me.vars.xVel - 5
								hitRocket.vars.xVel = hitRocket.vars.xVel + 5
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

						me.x = me.x + me.vars.xVel
						me.vars.xVel = me.vars.xVel * 0.8

						if (me.vars.hitFlash > 0) {
							me.vars.hitFlash--
							if (me.vars.hitFlash == 0) {
								me.loadTexture(vars.game.planets[vars.game.currentPlanet]["enemies"][me.vars.type]["cos"])
							}
						}
						if (me.x < Game.world.camera.x - me.width) {
							deleteClone()
							return
						}
						if (me.vars.hp <= 0) {
							playSound("Boom")
							var script = vars.game.planets[vars.game.currentPlanet]["enemies"][me.vars.type]["deathScript"]
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
				"init": [
					{
						"code": function() {
							setHealth = function(health) {
								vars.game.health = health

								var execute = Sprites["HealthBar"]

								execute.ctx.clearRect(0, 0, execute.width, execute.height)
								execute.ctx.lineCap = "round"

								execute.ctx.lineWidth = 10
								execute.ctx.strokeStyle = "#D9D9D9"
								execute.ctx.beginPath()
								execute.ctx.moveTo(10, execute.height / 2)
								execute.ctx.lineTo(execute.width - 10, execute.height / 2)
								execute.ctx.stroke()

								if (((vars.game.health / vars.game.save.upgrades.maxHealth) * 700) - 10 > 5) {
									execute.ctx.lineWidth = 5
									execute.ctx.strokeStyle = "red"
									execute.ctx.beginPath()
									execute.ctx.moveTo(10, execute.height / 2)
									execute.ctx.lineTo(((vars.game.health / vars.game.save.upgrades.maxHealth) * 700) - 10, execute.height / 2)
									execute.ctx.stroke()
								}

							}
							setHealth(vars.game.health)

						},
						"stateToRun": ["game"]
					}
				],
				"main": [
					{
						"code": function() {
							me.dirty = true
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
				"main": []
			},
			"id": "HealthBar_Frame",
			"x": 100,
			"y": 0,
			"type": "canvasFrame",
			"bitmapID": "HealthBar",
			"fixedToCamera": true
		}
		// Health bar sprite
	],
	"scripts": {
		"init": [
			{
				"code": function() {
					playSound("Menu_Music", true)

					Game.world.setBounds(0, 0, Game.width * vars.menu.backgroundSize, Game.height * vars.menu.backgroundSize)
				},
				"stateToRun": ["menu", 0]
			},

			{
				"code": function() {
					playSound("Menu_Music", true)

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
	}
}
