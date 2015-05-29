/*

The Free Interactive Fiction Engine (fife)
Written by Kendall Purser
2015.05.29

*/

var fife = {
	register : [],
	data : {},
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
				tmp += i + "- " + fife.register.
			}
		}

	},
	load_game : function () {

	},

}