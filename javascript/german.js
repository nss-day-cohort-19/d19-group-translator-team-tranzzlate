var Tranzlate = (function(taco){
	var german = {"merry": "Fröhlich", "christmas": "Weihnachten", "and": "und", "happy": "Glücklich", "new": "Neu", "year": "Jahr"},
		str = "",
		newStr;

	taco.toGerman = function(arr){
		console.log(arr);
		for (var i = 0; i < arr.length; i++) {
			for(prop in german){
				if (prop == arr[i].toLowerCase()){
					str += german[prop] + " ";
				}
			}
		}
		newStr = str;
		str = "";
		return newStr;
	}
	return taco;
})(Tranzlate || {})