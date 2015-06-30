/*

The Free Interactive Fiction Engine (fife)
Written by Kendall Purser
2015.05.29

*/

var fife = {
	input : "",

	verb : "",
	noun : "",
	object : "",

	register : [],
	data : {},
	player : {
		location : 0,
		score : 0,
		time : 0
	},
	ignore_words : ["the","a","in","with","at","go"],
	init : function () {

		// command prompt binding
		var cmd = document.getElementById("cmd");
		cmd.focus();
		cmd.onkeyup = function () {
			if (event.keyCode === 13) {
				fife.input = cmd.value;
				fife.write("<br /><span style='color:green;'>" + fife.input + "</span>");
				cmd.value = "";
				cmd.focus();
				fife.parse_input();
			}
		}

		// fife setup, select a game if need be
		fife.write("<span style='color:green;'>fife v1.0 Written by Kendall Purser 2015-06-08</style>");
		if (fife.register.length === 0) {
			fife.write("No games registered. To register your game use fife.register.push(\"your_game\")");
		}
		if (fife.register.length === 1) {
			fife.write("<br />Loading...<br />");
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
		// load given game into fife.data and start the game
		fife.data = game;
		fife.write("<hr /> <span style='font-weight: bold; color: #3695D5;'>" + fife.data.config.title + "</span>");
		fife.write("By: " + fife.data.config.author);
		fife.write(fife.data.config.date);
		fife.write("<hr /><br />" + fife.data.config.intro_text);
		fife.write("<br /> <span style='color:green;'>Press ENTER to continue</span>");
		fife.player.location = fife.data.config.start_room;
	},
	parse_input : function () {
		// main engine
		//fife.write("Parser offline.");

		// parse into noun, verb, object

		// blank input
		if (fife.input === "") {
			fife.commands.look();
		}

		// prep input (commands)
		var tmp_input = fife.input;
		fife.verb = "";
		fife.noun = "";
		fife.object = "";

		tmp_input = tmp_input.split(" ");
		
		for(i = 0; i < tmp_input.length; i +=1) {
			if (tmp_input[i] === "") {
				tmp_input.splice(i,1);				
			}
			for (j in fife.ignore_words) {
				if (tmp_input[i] === fife.ignore_words[j]) {
					tmp_input.splice(i,1);
					i = 0;		
				}
			}
		}
		console.log(tmp_input);

		// check synonyms in commands or execute command

		if (tmp_input.length === 1){
			var tmp_found = 0;
			if (fife.commands[tmp_input[0]] === undefined) {
				for (i in fife.synonyms) {
					for (j = 0; j < fife.synonyms[i].length; j += 1){
						if (tmp_input[0] === fife.synonyms[i][j]) {
							tmp_input[0] = i;
							tmp_found = 1;
						}
					}
				}

				if (tmp_found === 0){
					// if the command cannot be found in synonyms tell the user
					fife.write(fife.data.config.not_understand);
				} else {
					// command was found in synonyms, run it
					fife.verb = tmp_input[0];
					
				}

			} else {
				// if it is defined run it
				fife.commands[tmp_input[0]]();
			}
		}

		if (tmp_input.length === 2) {
			var valid_item = 0;

			// valid item or npc
			for (i in fife.data.items) {
				if ( i.toLowerCase() === tmp_input[1].toLowerCase() ) {
					valid_item = 1;
					fife.noun = tmp_input[1].toLowerCase();
					fife.verb = tmp_input[0].toLowerCase();
				}
			}

			if (valid_item = 1) {
				for (i in fife.data.items[tmp_input[1]]) {
					if (fife.data.items[tmp_input[1][i]] === tmp_input[0]) {
						fife.write(fife.data.items[tmp_input[1]][tmp_input[0]]);
					}
				}
			} else if (fife.commands[fife.verb] !== undefined) {
				fife.commands[fife.verb] (fife.noun);
			} else {
				fife.write(fife.data.config.not_understand);
			}
		}
		
		// npc check:  tell/ask X about Y, talk to X, etc... save for v2.0



		// *** execute command ***
		var tmp_test = 0;
		if (fife.verb !== "" && fife.noun === "" && fife.object === "") {
			fife.commands[fife.verb]();
		}

		if (fife.verb !== "" && fife.noun !== "" && fife.object === "") {
			
			if (fife.data[fife.noun][fife.verb] !== undefined) {
				fife.write(fife.data[fife.noun][fife.verb]);
				tmp_test +=1;
			}

			if (fife.commands[five.verb] !== undefined) {
				fife.commands[fife.verb] (fife.noun);
				tmp_test +=1;
			}					
		}

		if (fife.verb !== "" && fife.noun !== "" && fife.object !== "") {

		}

		// *** command not understood ***
		if (tmp_test !== 0) {
				fife.write(fife.data.config.not_understand);
			}
	},
	write : function (x) {
		// output to screen
		var output = "",
		log =document.getElementById("log");
		output += log.innerHTML;
		output = output += "<br />" + x ; 
		log.innerHTML = output;
		log.scrollTop = log.scrollHeight;
	},
	get : function () {
		// get input from ui
		var cmd = document.getElementById("cmd");
		fife.input = cmd.value();
		cmd.focus();
	},
	move : function (x) {
		// controls all movement in the game
		var room = fife.data.rooms[fife.player.location];
		if (room.exits.length >= (x+1) && room.exits[x] !== -1 && room.exits[x] !== undefined) {
			fife.player.location = room.exits[x];
			fife.commands.look();
		} else {
			fife.write(fife.data.config.not_move);
		}
	},
	synonyms : {
		get : ["take", "grab"],
		i : ["inventory", "inv"],
		n : ["north"],
		e : ["east"],
		s : ["south"],
		w : ["west"],
		u : ["up"],
		d : ["down"],
		ne : ["northeast", "north east"],
		se : ["southeast", "south east"],
		sw : ["southwest", "south west"],
		nw : ["northwest", "north west"],
		look : ["examine", "x"]
	},
	commands : {
		// movement
		n : function () {
			fife.move(0);
		},
		e : function () {
			fife.move(1);
		},
		s : function () {
			fife.move(2);
		},
		w : function () {
			fife.move(3);
		},
		u : function () {
			fife.move(4);
		},
		d : function () {
			fife.move(5);
		},
		ne : function () {
			fife.move(6);
		},
		se : function () {
			fife.move(7);
		},
		sw : function () {
			fife.move(8);
		},
		nw : function () {
			fife.move(9);
		},
		//
		look : function () {
			var tmp_items = [];

			fife.write("<span class='bold'>" + fife.data.rooms[fife.player.location].name + "</span>");
			fife.write(fife.data.rooms[fife.player.location].look);
			for (i in fife.data.items){
				if (fife.data.items[i].location === fife.player.location && fife.data.items[i].parent === undefined) {
					tmp_items.push(i);
				}
			}
			if (tmp_items.length !== 0) {
				fife.write("<br />You also see: " + tmp_items.join(","));
			}
		},
		i : function () {
			var tmp_items = [];
			for (i in fife.data.items) {
				if (fife.data.items[i].location === "i") {
					tmp_items.push(i);
				}
			}
			tmp_items = tmp_items.join(",");
			fife.write("You are carrying: " + tmp_items);
		},
		score : function () {
			fife.write(fife.player.score);
		},
		time : function () {
			fife.write(fife.player.time);
		},
		get : function (item) {
			if (fife.data.items[item].take === "yes" && fife.data.items[item].location === fife.player.location) {
				fife.data.items[item].location = "i";
				fife.write("Taken.");
			} else {
				fife.write("Can't take " + item);
			}
		},
		drop : function (item) {
			if (fife.data.items[item].location === "i") {
				fife.data.items[item].location = fife.player.location;
			} else {
				fife.write("Don't have " + item);
			}
		},
		restart : function () {
			location.reload();
		},
		exits : function () {
			var room = fife.data.rooms[fife.player.location],
			tmp_exits = [];
			for (i = 0; i < room.exits.length; i += 1) {
				if (i === 0 && room.exits[i] !== -1) {
					tmp_exits.push("north");
				}
				if (i === 1 && room.exits[i] !== -1) {
					tmp_exits.push("east");
				}
				if (i === 2 && room.exits[i] !== -1) {
					tmp_exits.push("south");
				}
				if (i === 3 && room.exits[i] !== -1) {
					tmp_exits.push("west");
				}
				if (i === 4 && room.exits[i] !== -1) {
					tmp_exits.push("up");
				}
				if (i === 5 && room.exits[i] !== -1) {
					tmp_exits.push("down");
				}
				if (i === 6 && room.exits[i] !== -1) {
					tmp_exits.push("northeast");
				}
				if (i === 7 && room.exits[i] !== -1) {
					tmp_exits.push("southeast");
				}
				if (i === 8 && room.exits[i] !== -1) {
					tmp_exits.push("southwest");
				}
				if (i === 9 && room.exits[i] !== -1) {
					tmp_exits.push("northwest");
				}
			}
			fife.write(tmp_exits.join(","));
		}
	}
};