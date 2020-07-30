(function(window){
	var goodbyeword = {};
	var greet = "Goodbye";

	goodbyeword.say = function(name){
		console.log(greet + " " + name);
	}
	window.goodbyeword = goodbyeword;
})(window);