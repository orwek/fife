/*

The Free Interactive Fiction Engine (fife)
Written by Kendall Purser
2015.05.29

*/

var fife = {
	input : "",
	register : [],
	data : {},
	player : {
		location : 0,
		score : 0,

	}
	ignore_words : ["the","a","in","with","at","go"],
	init : function () {
		fife.write("fife v1.0 <br /> Written by Kendall Purser <br /> 2015-06-05")
		if (fife.register.length === 0) {
			fife.write("No games registered. To register your game use fife.register.push(\"your_game\")");
		}
		if (fife.register.length === 1) {
			fife.write("Loading...");
			fife.load_game(fife.register[0]);
		}
		if (fife.register.length > 1) {
			var temp = "Please select a game:";

			for (i =0; i < fife.register.length(); i +=1) {
				tmp += i + "- " + fife.register[i]
			}
		}
	},
	load_game : function (game) {
		// load given game into fife.data
		fife.data = game;
	},
	parse_input : function () {
		// main engine
	},
	write : function (x) {
		// output to screen
		var ouput = document.getElementById("log").innerHTML();
		output = output += x; 
	},
	get : function () {
		fife.input = document.getElementById("cmd").value();
	},
	synonyms : {
		get : ["take", "grab"],
		i : ["inventory", "inv"],
		n : ["north"],
		e : ["east"],
		s : ["south"],
		w : ["west"],
		ne : ["northeast", "north east"],
		se : ["southeast", "south east"],
		sw : ["southwest", "south west"],
		nw : ["northwest", "north west"],
		look : ["examine", "x"]
	}
	commands : {
		// movement
		n : function () {
			if (fife.data.rooms[fife.player.location].exits.length >= 1) {
				fife.player.location = fife.data.rooms[fife.player.location].exits[0];
			} else {
				fife.write("Can't go that way.");
			}
		},
		e : function () {
			if (fife.data.rooms[fife.player.location].exits.length >= 2) {
				fife.player.location = fife.data.rooms[fife.player.location].exits[1];
			} else {
				fife.write("Can't go that way.");
			}
		},
		s : function () {
			if (fife.data.rooms[fife.player.location].exits.length >= 3) {
				fife.player.location = fife.data.rooms[fife.player.location].exits[2];
			} else {
				fife.write("Can't go that way.");
			}
		},
		w : function () {
			if (fife.data.rooms[fife.player.location].exits.length >= 4) {
				fife.player.location = fife.data.rooms[fife.player.location].exits[3];
			} else {
				fife.write("Can't go that way.");
			}
		},
		up : function () {
			if (fife.data.rooms[fife.player.location].exits.length >= 5) {
				fife.player.location = fife.data.rooms[fife.player.location].exits[4];
			} else {
				fife.write("Can't go that way.");
			}
		},
		down : function () {
			if (fife.data.rooms[fife.player.location].exits.length >= 6) {
				fife.player.location = fife.data.rooms[fife.player.location].exits[5];
			} else {
				fife.write("Can't go that way.");
			}
		},
		ne : function () {
			if (fife.data.rooms[fife.player.location].exits.length >= 7) {
				fife.player.location = fife.data.rooms[fife.player.location].exits[6];
			} else {
				fife.write("Can't go that way.");
			}
		},
		se : function () {
			if (fife.data.rooms[fife.player.location].exits.length >= 8) {
				fife.player.location = fife.data.rooms[fife.player.location].exits[7];
			} else {
				fife.write("Can't go that way.");
			}
		},
		sw : function () {
			if (fife.data.rooms[fife.player.location].exits.length >= 9) {
				fife.player.location = fife.data.rooms[fife.player.location].exits[8];
			} else {
				fife.write("Can't go that way.");
			}
		},
		nw : function () {
			if (fife.data.rooms[fife.player.location].exits.length >= 10) {
				fife.player.location = fife.data.rooms[fife.player.location].exits[9];
			} else {
				fife.write("Can't go that way.");
			}
		},
		//
		look : function () {
			fife.write(fife.data.rooms[fife.player.location].look);
		},
		i : function () {
			var tmp_items = [];
			for (i in fife.data.items) {
				if (fife.data.items[i].location === "i") {
					tmp_items.push(i);
				}
			}
			tmp_items = tmp_items.join(",");
			fife.write(tmp_items);
		},
		score : function () {
			fife.write(fife.player.score);
		},
		time : function () {
			fife.write(fife.player.time);
		},
		get : function (item) {
			if (fife.data.items[item].take == "yes") {
				fife.data.items[item].location = "i"
			} else {
				fife.write("Can't take " + item);
			}
		},
		drop : function (item) {
			if (fife.data.items[item].location == "i") {
				fife.data.items[item].location = fife.player.location;
			} else {
				fife.write("Don't have " + item);
			}
		},
		restart : function () {
			location.reload();
		}
	}
};