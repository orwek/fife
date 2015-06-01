/*
Last Flight of the Pelican

Kendall Purser
2-115.-15.29

*/

var pelican = {
	config : {
		title : "Last Flight of the Pelican",
		author : "Kendall Purser"
		start_room : 0,
		intro_text : "You watch the last spaceworthy lifepod eject from the SS Pelican. At first it is a large fireball, then it rotates and turns slowly assuming its desired course toward Earth. Soon it is nothing more than a speck, and you are forced to return to the dull metal shell of an environment around you. The other lifepods are damaged and all around you red lights flash and an alarm is blaring in your ears. <br /><br />You, Captain Reeves, are now alone on the SS Pelican."
	},
	rooms : [{
		name : "Pod bay",
		look : "Where the escape pods are accessed.",
		examine : "The remaining lifepods appear to be excessively damaged and would not survive the flight to Earth, let alone reentry.",
		exits : [-1,1,-1,-1,-1,-1]
	},{
		name : "Bridge",
		look : "The brain of the SS Pelican.",
		examine : "Control panels and monitors line the north, east, and west walls of this room. South is a doorway that appears to lead to the rest of the ship. West is the doorway to the Pod Bay. The floor is the same disgusting shade of gray that the rest of the ship is made of. The roof is lined with metal panels as well as a large grate.",
		exits : [-1,-1,-1,0,-1,-1]
	},{
		name : "Corridor",
		look : "This narrow corridor is the main passageway connecting each chamber of the ship.",
		examine : "",
		exits : [1,-1,3,-1,-1,-1,-1,7,5,4]
	},{
		name : "Engineering",
		look : "The nerve center of the SS Pelican.",
		examine : "",
		exits : [2,-1,-1,-1,8,-1]
	},{
		name : "Crew Quarters",
		look : "Vertical bunks line the walls of this small chamber.",
		examine : "Vertical bunks line the walls of this small chamber. Each bunk has straps to hold the corresponding crew member in bed while in flight.",
		exits : [-1,2,-1,-1,-1,-1]
	},{
		name : "Mess Hall",
		look : "",
		examine : "",
		exits : [-1,2,-1,-1,-1,-1]
	},{
		name : "Bay1",
		look : "Through the window in the bay door you see a gaping hole in the side of the spacecraft.",
		examine : "A 12 foot wide meteorite is lodged in the floor and is likely the reason for this emergency.",
		exits : [-1,-1,-1,-1,-1,-1]
	},{
		name : "Bay2",
		look : "",
		examine : "",
		exits : [-1,-1,-1,2,-1,-1]
	},{
		name : "Maintenance Shaft",
		look : "This cramped shaft is just large enough to be uncomfortable.",
		examine : "",
		exits : [1,-1,3,-1,-1,-1]
	},{
	}],
	items : {
		"screwdriver" : {
			look : "",
			examine : "",
			location : 0,
			move : "no",
			take : "yes"
		},
		"meteorite" : {
			look : "",
			examine : "",
			location : ""
		},
		"grate" : {
			look : "",
			examine : "",
			location : ""
		},
		"control panel" : {
			look : "",
			examine : "",
			location : ""
		},
		"lever" {
			look : "",
			examine : "",
			location : "",
			position : "down"
		},
		"monitor" {
			look : "",
			examine : "",
			location : ""
		},
		"screen" {
			look : "",
			examine : "",
			location : ""
		}
	},
	npcs : {

	},
	puzzles : {
		power : [
			1,
			"pelican.items.lever.position",
			"===",
			"up",
			"A mechanical hum reverberates through the ship. Through the window you see the solar panel array deploy and you hear the ship's systems come back on line as power floods back into the ship."
		],
		meteorite : [1, "pelican.items.meteorite.location", "!==", 6, pelican.rooms[6].long = "A 12 foot wide hole in the floor is all that remains of the meteorite that started this whole mess." ],
		escape [1, ],
		grate [1,],
		communication [1,]
	}
}