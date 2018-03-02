// Planet names from http://www.fantasynamegenerators.com/planet_names.php#.WktRphOFjMU

vars.game.planetsEnemies = {}
vars.game.planetsEnemies.littleSpaceship = {
	"initScript": function() {
		me.vars.moveTick = 0
	},
	"mainScript": function() {
		if (me.vars.moveTick > 4) {
			me.x = me.x - 1
			me.vars.moveTick = 0
		}
		else {
			me.vars.moveTick++
		}
	}
}
vars.game.planetsEnemies.eggSpaceship = {
	"initScript": function() {
		me.vars.moveTick = 0
		me.vars.fireCooldown = 0
	},
	"mainScript": function() {
		if (me.vars.moveTick > 10) {
			me.x = me.x - 1
			me.vars.moveTick = 0
		}
		else {
			me.vars.moveTick++
		}
		if (me.vars.fireCooldown < 0) {
			if (me.x < vars.game.scroll + Game.width) { // Make sure that I'm onscreen.
				me.vars.fireCooldown = Game.rnd.integerInRange(200, 400)
				playSound("Launch")

				clone(me.x, me.y, "Enemy_Bullet", 2)
			}
		}
		else {
			me.vars.fireCooldown--
		}
	}
}
vars.game.planetsEnemies.eggMissile = {
	"initScript": function() {
		me.angle = getAngleBetweenSprites(me, Sprites.Rocket)

		me.vars.maxTurn = 100
		me.vars.bored = false
		me.vars.turnAnimation = 10

		// So it's behind the spaceship it was fired from...
		jumpInFrontOfSprite("Star_Parallax_2")

		// Spawn in an explosion...
		// Set my width and height so that I'm really small
		// Move me out until I don't touch the spaceship I was fired from...
		var tmp = [me.width, me.height] // Save these
		me.width = 1 // Make me small...
		me.height = 1
		while (touchingClones("Enemy_Rockets")) { // Move away until I'm not touching the spaceship I was fired from...
			move(1)
		}
		cloneSprite(getCentreX(), getCentreY(), "Explosion", "Explosions", {
			"size": Game.rnd.integerInRange(10, 15),
			"disableScreenshake": true
		}) // Spawn in an explosion

		// Revert back the width/height...
		me.width = tmp[0]
		me.height = tmp[1]
	},
	"mainScript": function() {
		if (! me.vars.bored) {
			var angleWas = me.angle % 360
			me.angle = getAngleBetweenSprites(me, Sprites.Rocket)
			if (Math.abs(me.angle - angleWas) > me.vars.maxTurn) {
				me.vars.bored = true
			}
			if (Math.abs(me.angle - angleWas) > me.vars.turnAnimation) {
				if (me.angle - angleWas > 0) {
					me.angle = angleWas + me.vars.turnAnimation % 360
				}
				else {
					me.angle = angleWas - me.vars.turnAnimation % 360
				}
			}
			if (Math.abs(me.x - Sprites.Rocket.x) + Math.abs(me.y - Sprites.Rocket.y) < 200 / 60) {
				me.x = Sprites.Rocket.x
				me.y = Sprites.Rocket.y
			}
			else {
				moveToSprite(me, Sprites.Rocket, 200)
			}
		}
		else {
			if (me.x > Game.world.width || me.x < 0 || me.y < 0 || me.y > Game.height) {
				me.vars.hp = 0
			}
		}
	}
}
vars.game.planetsEnemies.Boss1_0 = {
	"initScript": function() {
		me.anchor.setTo(0)
	},
	"mainScript": function(){}
}
vars.game.planetsEnemies.Boss1_1 = {
	"initScript": function() {
		me.anchor.setTo(0)
	},
	"mainScript": function(){}
}

vars.game.planetsEnemies.froggy = {
	"initScript": function() {
		me.vars.moveTick = 0
	},
	"mainScript": function() {
		if (me.vars.moveTick > 3) {
			me.x = me.x - 1
			me.vars.moveTick = 0
		}
		else {
			me.vars.moveTick++
		}
	}
}
vars.game.planetsEnemies.bird = {
	"initScript": function() {
		me.vars.flock = {}
		me.vars.flock.spacing = Game.rnd.integerInRange(20, 40)
		me.vars.flock.yRandom = 30
		me.vars.flock.lastXSpawnWas = me.x
		me.vars.flock.scrollWas = vars.game.scroll

		if (Game.rnd.integerInRange(0, 10) != 0 && (! me.vars.partOfFlock)) {
			me.vars.flock.toSpawn = Game.rnd.integerInRange(4, 6)
		}
		else {
			if (! me.vars.partOfFlock) {
				me.vars.flock.toSpawn = 0 // A lone bird
			}
		}

		me.vars.fireCooldown = Game.rnd.integerInRange(40, 60)

		me.body.setSize(29, 8, 0, 11.5)
	},
	"mainScript": function() {
		me.vars.xVel = me.vars.xVel - 0.15

		me.vars.fireCooldown--
		if (me.vars.fireCooldown <= 0) {
			if (me.x < vars.game.scroll + Game.width) { // Make sure that I've shown myself first.
				playSound("Launch")
				me.vars.fireCooldown = Game.rnd.integerInRange(40, 60)

				if (Game.rnd.integerInRange(0, 5) == 0) {
					clone(me.x, me.y + 40, "Enemy_Rocket_9", 3)
				}
				else {
					clone(me.x - 10, me.y, "Enemy_Rocket_8", 2)
				}
			}
		}

		// Spawn in new parts of the flock...
		if (me.vars.flock.toSpawn > 1) { // If I still have parts of the flock to spawn...
			if (Math.abs(me.vars.flock.lastXSpawnWas - me.x) + Math.abs(vars.game.scroll - me.vars.flock.scrollWas) > me.width + me.vars.flock.spacing) {
				me.vars.flock.lastXSpawnWas = me.x
				me.vars.flock.scrollWas = vars.game.scroll

				functionForClone = [
					function() {
						me.vars.partOfFlock = true
						return me
					},
					"before"
				]
				var newRocket = clone(vars.game.scroll + Game.width, me.y + Game.rnd.integerInRange(-me.vars.flock.yRandom, me.vars.flock.yRandom), "Enemy_Rocket_4", 1)
				newRocket.vars.flock.toSpawn = me.vars.flock.toSpawn - 1 // Let the new rocket create the next one and so on...
				// Give it the information...
				newRocket.vars.flock.lastXSpawnWas = newRocket.x
				newRocket.vars.flock.scrollWas = vars.game.scroll

				me.vars.flock.toSpawn = 0 // I don't need to do anymore spawning now...
			}
		}
	}
}
vars.game.planetsEnemies.birdPoison = {
	"initScript": function() {
		me.x = getRightX() - 1
	},
	"mainScript": function() {
		me.x = me.x - 5
	}
}
vars.game.planetsEnemies.birdNutsAndBolts = {
	"initScript": function(){},
	"mainScript": function(){}
}
vars.game.planetsEnemies.cuteWall = {
	"initScript": function() {
		me.vars.moveTick = 0
		me.y = 225

		me.vars.bob = 0
		me.vars.y = me.y
		me.vars.animationFrame = 0
	},
	"mainScript": function() {
		me.x = me.x - 0.5

		me.y = me.vars.y + (Math.sin(me.vars.bob) * 50)
		me.vars.bob = me.vars.bob + 0.03

		if (me.vars.hitFlash == 0) {
			me.loadTexture("Enemy_Rocket_5_" + Math.round(me.vars.animationFrame))
		}
		me.vars.animationFrame = me.vars.animationFrame + 0.1
		if (Math.round(me.vars.animationFrame) > 2) {
			me.vars.animationFrame = 0
		}
	}
}
vars.game.planetsEnemies.darkSnake = {
	"initScript": function() {
		//me.alpha = 0.2 // Almost invisible.
		me.scale.setTo(-2, 2)

		playSound("Suspense")

		me.vars.startX = me.x - vars.game.scroll
		me.vars.startY = me.y

		// TODO: What if the player dies and the sound is playing? And what if I die?
	},
	"mainScript": function() {
		me.x = vars.game.scroll + (me.vars.startX + ((Sprites.Rocket.cameraOffset.x - me.vars.startX) / (Loaded.snds.Suspense.duration - (Loaded.snds.Suspense.currentTime / 1000))))
		me.y = me.vars.startY + ((Sprites.Rocket.y - me.vars.startY) / (Loaded.snds.Suspense.duration - Loaded.snds.Suspense.currentTime))
	}
}

vars.game.planetsEnemies.frogBoss = {
	"initScript": function() {
		me.vars.arriveAnimationDone = false
		me.vars.attackDelay = Game.rnd.integerInRange(120, 200)

		me.vars.activeAttack = 0
		me.vars.attackData = {}

		me.vars.JSON.invunerable = true // While I come onscreen
	},
	"mainScript": function() {
		if (me.vars.arriveAnimationDone) {
			if (me.vars.activeAttack == 0) {
				me.y = me.y + ((Sprites.Rocket.cameraOffset.y - me.y) / 100)

				me.vars.attackDelay--
				if (me.vars.attackDelay <= 0) {

					if (me.x > Sprites.Rocket.x) { // If the player is infront of me.
						var random = Game.rnd.integerInRange(0, 2)
						if (random == 0) {
							me.vars.activeAttack = 1 // Ram
						}
						else {
							if (random == 1) {
								me.vars.activeAttack = 2 // Release minions
							}
							else {
								me.vars.activeAttack = 3 // Tongue
							}
						}
					}
					else {
						me.vars.activeAttack = 4 // Fart
					}


					me.vars.attackData = {}
					if (me.vars.activeAttack == 1) { // Ram
						me.vars.activeAttack = 1
						me.vars.attackData.direction = 0
						me.vars.attackData.delay = 0
						me.vars.attackDelay = Game.rnd.integerInRange(150, 200)

						playSound("Boom") // Comes out as a zoom.
					}
					else {
						if (me.vars.activeAttack == 2) {
							me.vars.attackDelay = Game.rnd.integerInRange(50, 100)
							me.vars.attackData.frogs = Game.rnd.integerInRange(3, 6)
						}
						else {
							if (me.vars.activeAttack == 3) {
								playSound("Launch")

								me.vars.attackDelay = Game.rnd.integerInRange(100, 200)
								functionForClone = [
									function() {
										me.vars.boss = dataForClone[1]
										dataForClone = dataForClone[0]
									},
									"before"
								]
								clone(me.x + 40, me.y, "Enemy_Rocket_10", [
									8,
									me
								])

								me.vars.activeAttack = 0
							}
							else {
								if (me.vars.activeAttack == 4) {
									playSound("Launch")

									me.vars.activeAttack = 0
									me.vars.attackDelay = Game.rnd.integerInRange(50, 100)
									clone(me.x + (me.width - 40), me.y, "Enemy_Rocket_11", 9)
								}
							}
						}
					}
				}
			}
			else {
				if (me.vars.activeAttack == 1) { // Ram
					if (me.vars.attackData.direction == 0) {
						me.vars.xVel = me.vars.xVel - 10
						if (me.x - vars.game.scroll <= 0) {
							me.vars.xVel = 0
							Game.camera.shake(0.05, 200)

							me.vars.attackData.direction = 1
							me.vars.attackData.delay = Game.rnd.integerInRange(120, 200)
						}
					}
					else {
						if (me.vars.attackData.direction == 1) {
							me.vars.attackData.delay--
							if (me.vars.attackData.delay <= 0) {
								me.vars.attackData.delay = 0
								me.vars.attackData.direction = 2

								playSound("Boom") // Comes out as a zoom.
							}
						}
						else {
							if (me.vars.attackData.direction == 2) {
								me.vars.xVel = me.vars.xVel + 10
								if ((me.x - vars.game.scroll) + me.vars.xVel >= 450) {
									me.vars.xVel = 0
									Game.camera.shake(0.05, 200)

									me.vars.activeAttack = 0 // Attack ended.
								}
							}
						}
					}
				}
				else {
					if (me.vars.activeAttack == 2) { // Release minions
						if (Game.rnd.integerInRange(0, 20) == 0) {
							playSound("Launch")

							clone(me.x, me.y, "Enemy_Rocket_3", 7)
							me.vars.attackData.frogs--
							if (me.vars.attackData.frogs < 1) { // All frogs have been released
								me.vars.activeAttack = 0
							}
						}
					}
				}
			}
		}
		else {
			me.x = me.x - 0.5
			if (me.x - vars.game.scroll < 450) {
				me.vars.arriveAnimationDone = true

				me.vars.JSON.invunerable = false // Now I'm onscreen you can shoot me
			}
		}
	}
}
vars.game.planetsEnemies.froggyMinion = {
	"initScript": function() {
		me.scale.setTo(-1, 1)
		me.angle = getAngleBetweenSprites(me, Sprites.Rocket)

		me.vars.maxTurn = 50
		me.vars.bored = false
		me.vars.turnAnimation = 30
		me.vars.speed = 100

		// So it's behind the spaceship it was fired from...
		jumpInFrontOfSprite("Star_Parallax_2")

		// Spawn in an explosion...
		// Set my width and height so that I'm really small
		// Move me out until I don't touch the spaceship I was fired from...
		var tmp = [me.width, me.height] // Save these
		me.width = 1 // Make me small...
		me.height = 1
		while (touchingClones("Enemy_Rockets")) { // Move away until I'm not touching the spaceship I was fired from...
			move(1)
		}
		cloneSprite(me.x, me.y, "Explosion", "Explosions", {
			"size": Game.rnd.integerInRange(10, 15),
			"disableScreenshake": true
		}) // Spawn in an explosion

		// Revert back the width/height...
		me.width = tmp[0]
		me.height = tmp[1]
		while (touchingClones("Enemy_Rockets")) { // Move away until I'm not touching the spaceship I was fired from...
			move(1)
		}
	},
	"mainScript": function() {
		if (! me.vars.bored) {
			var angleWas = me.angle % 360
			me.angle = getAngleBetweenSprites(me, Sprites.Rocket)
			if (Math.abs(me.angle - angleWas) > me.vars.maxTurn) {
				me.vars.bored = true
			}
			if (Math.abs(me.angle - angleWas) > me.vars.turnAnimation) {
				if (me.angle - angleWas > 0) {
					me.angle = angleWas + me.vars.turnAnimation % 360
				}
				else {
					me.angle = angleWas - me.vars.turnAnimation % 360
				}
			}
			if (Math.abs(me.x - Sprites.Rocket.x) + Math.abs(me.y - Sprites.Rocket.y) < me.vars.speed / 60) {
				me.x = Sprites.Rocket.x
				me.y = Sprites.Rocket.y
			}
			else {
				moveToSprite(me, Sprites.Rocket, me.vars.speed)
			}
		}
		else {
			if (me.x > Game.world.width || me.x < 0 || me.y < 0 || me.y > Game.height) {
				me.vars.hp = 1
			}
		}
	}
}
vars.game.planetsEnemies.froggyTongue = {
	"initScript": function() {
		me.vars.stretchVel = 0
		me.vars.direction = 1
		me.width = 1
	},
	"mainScript": function() {
		if (me.vars.boss == null) {
			me.vars.hp = 0
			return
		}
		me.x = me.vars.boss.x + 40
		me.y = me.vars.boss.y

		me.vars.stretchVel = me.vars.stretchVel + (me.vars.direction * 0.1)
		me.width = me.width + me.vars.stretchVel

		if (getLeftX() < vars.game.scroll) {
			if (me.vars.direction == 1) {
				me.vars.direction = -1
				me.vars.stretchVel = 0
			}
		}
		if (me.width < 1) {
			me.vars.hp = 0
		}
	}
}
vars.game.planetsEnemies.froggyFart = {
	"initScript": function() {
		me.alpha = 0
		me.vars.fadeDir = 1

		me.x = getCentreX()
	},
	"mainScript": function() {
		me.alpha = me.alpha + (me.vars.fadeDir * 0.02)

		me.width++
		me.height++

		me.x = me.x + 2
		if (me.vars.fadeDir == 1) {
			if (me.alpha >= 1) {
				me.alpha = 1
				me.vars.fadeDir = -1
			}
		}
		if (me.vars.fadeDir == -1) {
			if (me.vars.alpha <= 0) {
				me.vars.hp = 0
			}
		}
	}
}

vars.game.initEnemies = function() {
	var enemies = vars.game.planetsEnemies

	vars.game.planets = [
		{
			"name": "Oytera",
			"enemies": [
				{
					"chance": 80,
					"health": 10,
					"damage": 2,
					"cos": "Enemy_Rocket_1",
					"size": 4,
					"initScript": enemies.littleSpaceship.initScript,
					"mainScript": enemies.littleSpaceship.mainScript
				},
				// Little spaceship
				{
					"chance": 20,
					"health": 100,
					"damage": 5,
					"cos": "Enemy_Rocket_2",
					"size": 4,
					"initScript": enemies.eggSpaceship.initScript,
					"mainScript": enemies.eggSpaceship.mainScript
				},
				// Egg spaceship
				{
					"chance": 0,
					"health": 1,
					"damage": 10,
					"cos": "Enemy_Bullet",
					"disableSpawnMove": true, // Overived the moving back at when I spawn.
					"size": 1.5,
					"initScript": enemies.eggMissile.initScript,
					"mainScript": enemies.eggMissile.mainScript
				},
				// Egg spaceship missile.
				{
					"chance": 0,
					"health": 150,
					"disableBulletKnockback": true,
					"disableSpaceshipKnockback": true,
					"disableOffscreenPrevention": true,
					"disableHitTest": true, // It's not needed, it just creates lag.
					"disableSpawnMove": true, // So the wall stays intact.
					"hurtBoss": true,
					"damage": 15,
					"cos": "Boss1_0",
					"size": 7,
					"initScript": vars.game.planetsEnemies.Boss1_0.initScript,
					"mainScript": vars.game.planetsEnemies.Boss1_0.mainScript
				},
				// Boss asset 1
				{
					"chance": 0,
					"invunerable": true,
					"disableBulletKnockback": true,
					"disableSpaceshipKnockback": true,
					"disableOffscreenPrevention": true,
					"disableHitTest": true, // It's not needed, it just creates lag.
					"disableSpawnMove": true, // So the wall stays intact.
					"hurtBoss": true,
					"damage": 25,
					"cos": "Boss1_1",
					"size": 7,
					"initScript": vars.game.planetsEnemies.Boss1_1.initScript,
					"mainScript": vars.game.planetsEnemies.Boss1_1.mainScript
				}
				// Boss asset 2
			],
			"firstWinReward": 10000,
			"winReward": 5000,
			"boss": {
				"distance": 5000,
				"scroll": true,
				"health": 2000,
				"initScript": function() {
					vars.game.boss.scrollWas = 0

					vars.game.boss.totalSpawnedSections = 0
				},
				"mainScript": function() {
					var bossWidth = 126
					var bossHeight = 126
					var indestructibleCount = 0

					if (vars.game.scroll - vars.game.boss.scrollWas > bossWidth) {
						vars.game.boss.scrollWas = vars.game.scroll

						vars.game.boss.totalSpawnedSections++

						var y = 0
						while (y < height) {
							if (Game.rnd.integerInRange(0, 3) != 0) { // Gaps
								if (Game.rnd.integerInRange(0, 10) == 0 && indestructibleCount < 2 && vars.game.boss.totalSpawnedSections > 1) {
									clone(vars.game.scroll + width, y, "Boss1_1", 4)
									indestructibleCount++
								}
								else {
									clone(vars.game.scroll + width, y, "Boss1_0", 3)
								}
							}
							var y = y + bossHeight
						}
					}
				}
			}
		},
		// Oytera
		/*
		{
			"name": "Eden",
			"enemies": [
				{
					"chance": 80,
					"health": 40,
					"damage": 3,
					"cos": "Enemy_Rocket_3",
					"size": 2,
					"initScript": enemies.froggy.initScript,
					"mainScript": enemies.froggy.mainScript
				},
				// Froggy
				{
					"disableSpaceshipKnockback": true,
					"defeatBonus": 300,
					"chance": 5,
					"health": 80,
					"damage": 6,
					"cos": "Enemy_Rocket_4",
					"size": 3,
					"initScript": enemies.bird.initScript,
					"mainScript": enemies.bird.mainScript
				},
				// Bird
				{
					"chance": 0,
					"preventShooting": true,
					"disableHitTest": true,
					"disableSpawnMove": true,
					"health": 1,
					"damage": 15,
					"cos": "Enemy_Rocket_8",
					"size": 2,
					"initScript": enemies.birdPoison.initScript,
					"mainScript": enemies.birdPoison.mainScript
				},
				// Bird's poison
				{
					"chance": 0,
					"preventShooting": true,
					"disableSpawnMove": true,
					"health": 1,
					"damage": 50,
					"cos": "Enemy_Rocket_9",
					"size": 0.75,
					"initScript": enemies.birdNutsAndBolts.initScript,
					"mainScript": enemies.birdNutsAndBolts.mainScript
				},
				// Bird's nuts and bolts
				{
					"invunerableToCrashes": true,
					"disableSpaceshipKnockback": true,
					"disableBulletKnockback": true,
					"defeatBonus": 1000,
					"chance": 10,
					"health": 300,
					"damage": 20,
					"cos": "Enemy_Rocket_5_0",
					"hitCos": "Enemy_Rocket_5_Hit",
					"size": 9,
					"initScript": enemies.cuteWall.initScript,
					"mainScript": enemies.cuteWall.mainScript
				},
				// Cute wall of death
				{
					"disableHitTest": true,
					"chance": 40,
					"health": 40,
					"damage": 30,
					"cos": "Enemy_Rocket_7",
					"hitCos": "Enemy_Rocket_7_Hit",
					"size": 2,
					"initScript": enemies.darkSnake.initScript,
					"mainScript": enemies.darkSnake.mainScript
				},
				// Da dark snake

				{
					"invunerableToCrashes": true,
					"disableHitTest": true,
					"disableSpaceshipKnockback": true,
					"disableBulletKnockback": true,
					"hurtBoss": true,
					"chance": 0,
					"health": 2000,
					"damage": 20,
					"cos": "Enemy_Rocket_6",
					"size": 9,
					"initScript": enemies.frogBoss.initScript,
					"mainScript": enemies.frogBoss.mainScript
				},
				// Frog boss
				{
					"disableSpawnMove": true,
					"invunerableToCrashes": true,
					"disableHitTest": true,
					"disableSpaceshipKnockback": true,
					"chance": 0,
					"health": 10,
					"damage": 5,
					"cos": "Enemy_Rocket_3",
					"size": 1,
					"anchor": {
						"x": 0.5,
						"y": 0.5
					},
					"initScript": enemies.froggyMinion.initScript,
					"mainScript": enemies.froggyMinion.mainScript
				},
				// Frog boss: minion
				{
					"disableSpawnMove": true,
					"invunerableToCrashes": true,
					"disableHitTest": true,
					"disableSpaceshipKnockback": true,
					"chance": 0,
					"health": 15,
					"damage": 20,
					"cos": "Enemy_Rocket_10",
					"size": 3,
					"anchor": {
						"x": 1,
						"y": 0.5
					},
					"initScript": enemies.froggyTongue.initScript,
					"mainScript": enemies.froggyTongue.mainScript
				},
				// Frog boss: Tongue
				{
					"disableSpawnMove": true,
					"preventShooting": true,
					"invunerableToCrashes": true,
					"disableHitTest": true,
					"disableSpaceshipKnockback": true,
					"chance": 0,
					"health": 1,
					"damage": 5,
					"cos": "Enemy_Rocket_11",
					"size": 3,
					"anchor": {
						"x": 0.5,
						"y": 0.5
					},
					"initScript": enemies.froggyFart.initScript,
					"mainScript": enemies.froggyFart.mainScript
				}
				// Frog boss: Fart
			],
			"firstWinReward": 20000,
			"winReward": 10000,
			"boss": {
				"distance": 5000,
				"scroll": false,
				"health": 2000,
				"initScript": function() {
					clone(vars.game.scroll + width, 225, "Enemy_Rocket_6", 6)
				},
				"mainScript": function() {

				}
			}
		}
		// Eden
		*/
	]
}
vars.game.initEnemies()
