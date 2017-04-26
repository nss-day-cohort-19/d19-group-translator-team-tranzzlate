var Tranzlate = (function(taco){
	var yoruba = {"merry":"ariya", "christmas":"keresimesi", "and":"ati", "happy":"happy", "new":"titun", "year":"odun"},
		str = "";

	taco.toYoruba = function(arr){
		console.log(arr);
		for (var i = 0; i < arr.length; i++) {
			for(prop in yoruba){
				if (prop == arr[i].toLowerCase()){
					str += yoruba[prop] + " ";
				}
			}
		}
		return str;
	}
	return taco
})(Tranzlate);