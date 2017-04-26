var Tranzlate = (function(taco){
	var german = {"merry":"black", "christmas":"next", "and":"och", "happy":"gott", "new":"nytt", "year":"år"},
		str = "";

	taco.toGerman = function(arr){
		console.log(arr);
		for (var i = 0; i < arr.length; i++) {
			for(prop in german){
				if (prop == arr[i].toLowerCase()){
					str += german[prop] + " ";
				}
			}
		}
		return str;
	}
	return taco
})(Tranzlate);