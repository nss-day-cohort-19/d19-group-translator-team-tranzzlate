var Tranzlate = (function(taco){
	var spanish = {"merry":"feliz", "christmas":"navidad", "and":"y", "happy":"feliz", "new":"nuevo", "year":"año"},
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