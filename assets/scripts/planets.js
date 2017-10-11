vars.game.planets = [
	{
		"name": "Oytera",
		"enemies": [
			{
				"chance": [0, 100],
				"health": 10,
				"cos": "Enemy_Rocket_1",
				"initScript": function() {
					me.scale.setTo(4)
					me.moveTick = 0
				},
				"mainScript": function() {
					if (me.moveTick > 4) {
						me.x = me.x - 1
						me.moveTick = 0
					}
					else {
						me.moveTick++
					}
				}
			}	
		]
	}
]