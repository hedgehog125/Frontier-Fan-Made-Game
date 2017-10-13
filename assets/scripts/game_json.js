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
		},
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
			"id": "Bullet_Normal",
			"src": "bullet.png"
		},
		{
			"id": "Enemy_Rocket_1",
			"src": "enemy_rocket_1.png"
		},
		{
			"id": "Enemy_Rocket_1_Hit",
			"src": "enemy_rocket_1_hit.png"
		},
		{
			"id": "Explosion",
			"src": "explosion.png"
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
		}, // Main menu background
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
		}, // Logo
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
										
										vars.game.fireRate = 30
										vars.game.bulletSpread = 10
										vars.game.maxHealth = 50
										
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
		}, // New game
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
		}, // Continue game
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
		}, // Hover text
		{
			"scripts": {
				"init": [
					{
						"code": function() {
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
		}, // FPS
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
		}, // Star parallax 1
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
							vars.game.scroll++
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
		}, // Star parallax 2
		{
			"scripts": {
				"init": [
					{
						"code": function() {
							me.anchor.setTo(0.5)
							me.vars.animationFrame = 0
							me.fixedToCamera = true
							enableTouching()
							
							vars.game.health = vars.game.maxHealth
							vars.game.fireCooldown = 0
						},
						"stateToRun": ["game"]
					}
				],
				"main": [
					{
						"code": function() {
							if (vars.game.zoomAnimation == 0) {
								glideTo(inX, inY, 10)
							}
							else {
								me.cameraOffset.x = 50
								me.cameraOffset.y = Game.world.centerY
							}
							me.vars.animationFrame = me.vars.animationFrame + (1 / 5)
							if (Math.floor(me.vars.animationFrame) > 3) {
								me.vars.animationFrame = 0
							} 
							me.loadTexture("Rocket_1#" + Math.floor(me.vars.animationFrame))
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
		}, // Spaceship
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
							if (vars.game.fireCooldown > vars.game.fireRate) {
								vars.game.fireCooldown = 0
								playSound("Shot")
								clone(Sprites.Rocket.x + (Sprites.Rocket.width / 2), Sprites.Rocket.y, "Bullet_Normal")
							}
							else {
								if (vars.game.zoomAnimation == 0) {
									vars.game.fireCooldown++
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
						me.y = me.y + Game.rnd.integerInRange(-vars.game.bulletSpread, vars.game.bulletSpread)
						me.vars.hitSomething = false
						enableTouching()
						
						cloneSprite(me.x, me.y, "Explosion", "Explosions", {
							"size": 10,
							"disableScreenshake": true
						})
					}
				],
				"main": [
					function() {
						if (me.vars.hitSomething) {
							deleteClone()
							return
						}
					
						me.x = me.x + 5
						if ((me.vars.tick % 3) == 0) {
							me.y = me.y + Game.rnd.integerInRange(-2, 2)
						}
						
						if (touchingClones("Enemy_Rockets")) {
							me.vars.hitSomething = true
						}
						
						if (me.x > Game.world.width) {
							deleteClone()
							return
						}
						else {
							me.vars.tick++
						}
					}
				]
			}
		}, // Bullets
		{
			"scripts": {
				"init": [
					{
						"code": function() {
							vars.game.currentPlanet = 0
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
						me.vars.type = dataForClone
						me.vars.hp = vars.game.planets[vars.game.currentPlanet]["enemies"][me.vars.type]["health"]
						me.vars.hitFlash = 0
						me.anchor.setTo(0, 0.5)
						vars.game.planets[vars.game.currentPlanet]["enemies"][me.vars.type]["initScript"]()
						
						if (me.y < Game.world.centerY) { // Check I'm not too high or low.
							if (me.y - (me.height / 2) < 0) {
								me.y = me.height / 2
							}
						}
						else {
							if (me.y + (me.height / 2) > Game.height) {
								me.y = Game.height - (me.height / 2)
							}
						}
						
						
						enableTouching()
					}
				],
				"main": [
					function() {
						vars.game.planets[vars.game.currentPlanet]["enemies"][me.vars.type]["mainScript"]()
						if (touchingClones("Bullet")) {
							me.vars.hp = me.vars.hp - 10
							me.loadTexture(vars.game.planets[vars.game.currentPlanet]["enemies"][me.vars.type]["cos"] + "_Hit")
							me.vars.hitFlash = 10
							if (me.vars.hp > 0) {
								playSound("Hit")
							}
						}
						if (me.vars.hitFlash > 0) {
							me.vars.hitFlash--
							if (me.vars.hitFlash == 0) {
								me.loadTexture(vars.game.planets[vars.game.currentPlanet]["enemies"][me.vars.type]["cos"])
							}
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
		}, // Enemy spaceships
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
		}, // Explosions
		{
			"scripts": {
				"init": [
					{
						"code": function() {
							setHealth = function(health) {
								vars.game.health = health
								
								var execute = Sprites["HealthBar"]
								
								execute.ctx.clearRect(0, 0, execute.width, execute.height)
								
								execute.ctx.lineWidth = 10
								execute.ctx.strokeStyle = "#D9D9D9"
								execute.ctx.beginPath()
								execute.ctx.moveTo(10, execute.height / 2)
								execute.ctx.lineTo(execute.width - 10, execute.height / 2)
								execute.ctx.stroke()
								
								execute.ctx.lineWidth = 5
								execute.ctx.strokeStyle = "red"
								execute.ctx.beginPath()
								execute.ctx.moveTo(5, execute.height / 2)
								execute.ctx.lineTo(execute.width - 5, execute.height / 2)
								execute.ctx.stroke()
								
								execute.ctx.fillRect(0, 0, execute.width, execute.height)
								
								execute.update()
							}
							//setHealth(50)
							
							me.ctx.fillStyle = "red"
							me.ctx.fillRect(0, 0, me.width, me.height)
							
							me.dirty = true
							
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
			"id": "HealthBar",
			"type": "canvas",
			"width": 700,
			"height": 10
		}, // Health bar
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
						"code": null,
						"stateToRun": ["game"]
					}
				]
			},
			"id": "HealthBar_Frame",
			"x": 0,
			"y": 0,
			"type": "canvasFrame",
			"bitmapID": "HealthBar",
			"fixedToCamera": true
		} // Health bar sprite
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
					
					Sprites["FPS_Text"].setText("FPS: " + currentFPS)
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
					Sprites["FPS_Text"].setText("FPS: " + currentFPS)
				},
				"stateToRun": [["game"], "after"]
			}
		]
	}
}

