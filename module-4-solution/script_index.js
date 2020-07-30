(function(window){
var name = ["Yaakov","Jim","John","Alex","Banny","Harry","Jake","Mon"];

for(var i in name){
 
	var letter = ((name[i]).charAt(0)).toLowerCase();

	if (letter == 'j') {
		window.goodbyeword.say(name[i]);
	}
	else {
		window.helloword.say(name[i]);
	}
}
})(window);


