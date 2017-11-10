vars.game.planets = [
	{
		"name": "Oytera",
		"enemies": [
			{
				"chance": [0, 80],
				"health": 10,
				"damage": 2,
				"cos": "Enemy_Rocket_1",
				"initScript": function() {
					me.scale.setTo(4)
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
				"chance": [81, 100],
				"health": 100,
				"damage": 5,
				"cos": "Enemy_Rocket_2",
				"initScript": function() {
					me.scale.setTo(3)
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
						//me.vars.fireCooldown = -1
						me.vars.fireCooldown = Game.rnd.integerInRange(200, 400)
						clone(me.x, me.y, "Enemy_Bullet", 2)
					}
					else {
						me.vars.fireCooldown--
					}
				}
			},
			{
				"chance": [-1, -1],
				"health": 1,
				"damage": 10,
				"cos": "Enemy_Bullet",
				"initScript": function() {
					me.scale.setTo(1.5)
					me.angle = getAngleBetweenSprites(me, Sprites.Rocket)

					me.vars.maxTurn = 100
					me.vars.bored = false
					me.vars.turnAnimation = 10
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
						me.alpha = me.alpha - (2 / 100)
						if (me.alpha <= 0) {
							deleteClone()
						}
					}
				}
			}
		]
	}
]
