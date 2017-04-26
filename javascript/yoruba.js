var Tranzlate = (function(taco){
	var yoruba = {"merry":"ariya", "christmas":"keresimesi", "and":"ati", "happy":"happy", "new":"titun", "year":"odun"},
		str = "",
		newStr;

	taco.toYoruba = function(arr){
		console.log(arr);
		for (var i = 0; i < arr.length; i++) {
			for(prop in yoruba){
				if (prop == arr[i].toLowerCase()){
					str += yoruba[prop] + " ";
				}
			}
		}
		newStr = str;
		str = "";
		return newStr;
	}
	return taco
})(Tranzlate || {});