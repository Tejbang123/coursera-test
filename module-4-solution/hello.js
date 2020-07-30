(function(window){
	var helloword = {};
	var greet = "Hello";

	helloword.say = function(name){
		console.log(greet + " " + name);
	}
	window.helloword = helloword;
})(window);