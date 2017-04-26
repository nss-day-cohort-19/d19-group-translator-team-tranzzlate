var Tranzlate = (function(taco){
	var french = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"},
		str = "";

	return {
		toFrench: function(words){
			console.log(words);

			for (var i = 0; i < words.length; i++) {

				for(prop in french){

					if (prop == words[i].toLowerCase()){
						str += french[prop] + " ";
					}
				}
			}
			return str;
		}
	}
	return taco
})(Tranzlate);