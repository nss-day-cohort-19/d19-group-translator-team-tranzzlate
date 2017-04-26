var Tranzlate = (function(taco){
	var spanish = {"merry":"spanish", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"},
		str = "";

	taco.toSpanish = function(arr){
		console.log(arr);
		for (var i = 0; i < arr.length; i++) {
			for(prop in spanish){
				if (prop == arr[i].toLowerCase()){
					str += spanish[prop] + " ";
				}
			}
		}
		return str;
	}
	return taco
})(Tranzlate);