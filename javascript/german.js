var Tranzlate = (function(taco){
	var german = {"merry": "fröhlich", "christmas": "Weihnachten", "and": "und", "happy": "glücklich", "new": "neu", "year": "Jahr"},
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