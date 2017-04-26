var Tranzlate = (function(taco){
	var german = {"merry": "Fröhlich", "christmas": "Weihnachten", "and": "und", "happy": "Glücklich", "new": "Neu", "year": "Jahr"},
		strGerman = "";

	taco.toGerman = function(arr){
		console.log(arr);
		for (var i = 0; i < arr.length; i++) {
			for(prop in german){
				if (prop == arr[i].toLowerCase()){
					strGerman += german[prop] + " ";
				}
			}
		}
		return strGerman;
	}
	return taco
})(Tranzlate);