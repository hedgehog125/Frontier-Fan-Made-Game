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
			},
			{
				"chance": 20,
				"health": 100,
				"damage": 5,
				"cos": "Enemy_Rocket_2",
				"size": 4,
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
						if (me.vars.shown) { // Make sure that I've shown myself first.
							//me.vars.fireCooldown = 5 // Make me fire really fast
							me.vars.fireCooldown = Game.rnd.integerInRange(200, 400)

							playSound("Launch")

							clone(me.x, me.y, "Enemy_Bullet", 2)
						}
					}
					else {
						me.vars.fireCooldown--
					}
				}
			},
			{
				"chance": 0,
				"health": 1,
				"damage": 10,
				"cos": "Enemy_Bullet",
				"disableSpawnMove": true, // Overived the moving back at when I spawn.
				"size": 1.5,
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
							deleteClone()
						}
					}
				}
			}
		]
	}
]
