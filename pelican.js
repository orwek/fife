/*
Last Flight of the Pelican

Kendall Purser
2-115.-15.29

*/

var pelican = {
	config : {
		title : "Last Flight of the Pelican",
		author : "Kendall Purser",
		start_room : 0,
		intro_text : ["You watch the last spaceworthy life pod eject from the SS Pelican. At first it is a large fireball, then it rotates and turns slowly assuming its desired course toward Earth. Soon it is nothing more than a speck, and you are forced to return to the dull metal shell of an environment around you. The other life pods are damaged and all around you red lights flash and an alarm is blaring in your ears. <br /><br />You, Captain Reeves, are now alone on the SS Pelican."],
		not_understand : "I don't understand.",
		not_see : "I don't see {{item}} here.",
		pointless : "No time for that captain!",
		ignore_words : ["the","a","in","with","at"]
	},
	rooms : [{
		name : "Pod bay",
		look : "Where the escape pods are accessed. The remaining life pods appear to be excessively damaged and would not survive the flight to Earth, let alone reentry.",
		exits : [-1,1,-1,-1,-1,-1]
	},{
		name : "Bridge",
		look : "The brain of the SS Pelican. Control panels and monitors line the north, east, and west walls of this room. South is a doorway that appears to lead to the rest of the ship. West is the doorway to the Pod Bay. The floor is the same disgusting shade of gray that the rest of the ship is made of. The roof is lined with metal panels as well as a large grate.",
		exits : [-1,-1,-1,0,-1,-1]
	},{
		name : "Corridor",
		look : "This wide corridor is the main passageway connecting each chamber of the ship.",
		exits : [1,-1,3,-1,-1,-1,-1,7,5,4]
	},{
		name : "Engineering",
		look : "The nerve center of the SS Pelican. A mess of wires resembling a ball of spaghetti flow in and out of various panels. There is also a row of levers, and a monitor along one wall.",
		exits : [-1,-1,-1,-1,8,-1]
	},{
		name : "Crew Quarters",
		look : "Vertical bunks line the walls of this small chamber. Each bunk has straps to hold the corresponding crew member in bed while in flight.",
		exits : [-1,2,-1,-1,-1,-1]
	},{
		name : "Mess Hall",
		look : "Loads of food as well as a water cycling system are stored in the walls and floor of this bay.",
		exits : [-1,2,-1,-1,-1,-1]
	},{
		name : "Bay1",
		look : "Through the window in the bay door you see a gaping hole in the side of the spacecraft. A 12 foot wide meteorite is lodged in the floor and is likely the reason for this emergency.",
		exits : [-1,-1,-1,-1,-1,-1]
	},{
		name : "Bay2",
		look : "This bay is packed with crates of elaborate artifacts and merchandise which would have fetched a handsome price on Earth. Fairly useless now though.",
		exits : [-1,-1,-1,2,-1,-1]
	},{
		name : "Maintenance Shaft",
		look : "This cramped shaft is just large enough to be uncomfortable. Cables and pipes line each side of the shaft leading down into each of the bays below.",
		exits : [1,-1,3,-1,-1,-1]
	}],
	items : {
		"screwdriver" : {
			look : "Your typical Phillips screwdriver. Useful for assembling and disassembling, or your average household... er... spaceship repairs.",
			location : 0,
			move : "no",
			take : "yes"
		},
		"meteorite" : {
			look : "A 12 foot wide hunk of dust, ice, and other space junk, must weigh several tons at least.",
			location : "6"
		},
		"grate" : {
			look : "Stretched steel grate that covers some kind of vent or maintenance shaft. It is held in place by several screws around the edge of the frame.",
			location : 1,
			move : "no"
		},
		"control panel" : {
			look : "There are various buttons and dials mounted on this control panel which operate the various navigation and communication systems on the SS Pelican. One particularly large dial grabs your attention.",
			location : 1
		},
		"lever" : {
			look : "One of many levers along the wall of the Engineering bay. This one has a blue handle and is marked \"Solar Array.\" It is currently in the down position.",
			location : 3,
			position : "down"
		},
		"monitor" : {
			look : "This monitor is connected to the interstellar radio transmitter. It currently reads 140.00 MHz.",
			location : 1
		},
		"dial" : {
			location : 1,
			look : "This dial controls the frequency of the SS Pelican's comlink.",
			turn : "You rotate the dial at random, but all you get is static.",
			//rotate : pelican.items.dial.turn, // synonym
			146.88 : function () {
				fife.score += 1;
			},
			parent : "control panel"
		},
		"switch" : {
			location : 1,
			look : "A small red switch marked- Alarm",
			position : "on",
			parent : "control panel"
		},
		"screen" : {
			look : "This screen is covered in static and post-it notes.",
			location : 3
		},
		"post-it" : {
			look : "Among the technical gibberish you read: Earth transmitting frequency- 146.88 MHz.",
			location : 3,
			parent : "screen"
		},
		"book" : {
			look : "Among the technical gibberish you read: Earth transmitting frequency- 146.88 MHz.",
			location : 3
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
			function () {
				fife.write("A mechanical hum reverberates through the ship. Through the window you see the solar panel array deploy and you hear the ship's systems come back on line as power floods back into the ship. Static clears from the display screen and it becomes clear to view.");
				pelican.rooms[1].exits[2] = 2;
				pelican.rooms[3].exits[0] = 2;
				fife.score += pelican.puzzles.power[0];
				fife.items.screen.look = "This screen is covered in post-it notes. It shows real-time stats of the SS Pelican including damage alerts. Bay1 is blinking red and reads: HULL BREACH. ";
			}
		],
		meteorite : [
			1, 
			"pelican.items.meteorite.location", 
			"!==", 
			6, 
			function () {
				pelican.rooms[6].look = "A 12 foot wide hole in the floor is all that remains of the meteorite that started this whole mess.";
			}
		],
		escape : [1],
		grate : [1],
		communication : [1],
		alarm : [1,pelican.items.lever.position]
	}
};

fife.regiest.push("pelican");