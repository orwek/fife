/*
Last Flight of the Pelican

Kendall Purser
2-115.-15.29

*/

var pelican = {
	config : {
		title : "Last Flight of the Pelican",
		author : "Kendall Purser"
		start_room : -1,
		intro_text : "You watch the last spaceworthy lifepod eject from the SS Pelican. At first it is a large fireball, then it rotates and turns slowly assuming its desired course toward Earth. Soon it is nothing more than a speck, and you are forced to return to the dull metal shell of an environment around you. The other lifepods are damaged and all around you red lights flash and an alarm is blaring in your ears. <br /><br />You, Captain Reeves, are now alone on the SS Pelican."
	},
	rooms : [{
		name : "Pod bay",
		short : "Where the escape pods are accessed.",
		long : "The remaining lifepods appear to be excessively damaged and would not survive the flight to Earth, let alone reentry.",
		exits : [-1,-1,-1,-1,-1,-1]
	},{
		name : "Bridge",
		short : "The brain of the SS Pelican.",
		long : "Control panels and monitors line the north, east, and west walls of this room. South is a doorway that appears to lead to the rest of the ship. West is the doorway to the Pod Bay. The floor is the same disgusting shade of gray that the rest of the ship is made of. The roof is lined with metal panels as well as a large grate.",
		exits : [-1,0,-1,-1,-1,-1]
	},{
		name : "Corridor",
		short : "This narrow corridor is the main passageway connecting each chamber of the ship.",
		long : "",
		exits : [-1,-1,-1,-1,-1,-1]
	},{
		name : "Engineering",
		short : "The nerve center of the SS Pelican.",
		long : "",
		exits : [-1,-1,-1,-1,-1,-1]
	},{
		name : "Crew Quarters",
		short : "Vertical bunks line the walls of this small chamber.",
		long : "Vertical bunks line the walls of this small chamber. Each bunk has straps to hold the corresponding crew member in bed while in flight.",
		exits : [-1,-1,-1,-1,-1,-1]
	},{
		name : "Mess Hall",
		short : "",
		long : "",
		exits : [-1,-1,-1,-1,-1,-1]
	},{
		name : "Bay1",
		short : "Through the window in the bay door you see a gaping hole in the side of the spacecraft.",
		long : "A 12 foot wide meteorite is lodged in the floor and is likely the reason for this emergency.",
		exits : [-1,-1,-1,-1,-1,-1]
	},{
		name : "Bay2",
		short : "",
		long : "",
		exits : [-1,-1,-1,-1,-1,-1]
	},{
		name : "Maintenance Shaft",
		short : "This cramped shaft is just large enough to be uncomfortable.",
		long : "",
		exits : [1,-1,-1,-1,-1,-1]
	},{
	}],
	items : {
		"screwdriver" : {

		},
		"meteorite" : {

		},
		"grate" : {

		},
		"control panel" : {

		},
		"lever" {

		},
		"monitor" {

		},
		"screen" {

		}
	},
	npcs : {

	},
	puzzles : {

	}
}