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
	}
	ignore_words : ["the","a","in","with","at","go"],
	init : function () {
		if (fife.register.length === 0) {
			fife.write("No games registered. To register your game use fife.register.push(\"your_game\")");
		}
		if (fife.register.length === 1) {
			fife.write("No games registered. To register your game use fife.register.push(\"your_game\")");
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
		get : ["take"],
		i : ["inventory"],
		n : ["north"],
		e : ["east"],


	}
	commands : {
		// movement
		n : function () {

		},
		e : function () {

		},
		s : function () {

		},
		w : function () {

		},
		up : function () {

		},
		down : function () {

		},
		ne : function () {

		},
		se : function () {

		},
		sw : function () {

		},
		nw : function () {

		},
		//
		look : function () {
			fife.write(data.rooms[fife.location].look);
		},
		i : function () {

		},
		score : function () {

		},
		time : function () {

		},
		get : function () {

		},
		restart : function () {
			location.reload();
		}

	}


}