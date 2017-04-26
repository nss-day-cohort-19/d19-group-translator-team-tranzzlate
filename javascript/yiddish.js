var Tranzlate = (function(taco){
	var yiddish = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"},
		str = "";

	taco.toYiddish = function(arr){
		console.log(arr);
		for (var i = 0; i < arr.length; i++) {
			for(prop in yiddish){
				if (prop == arr[i].toLowerCase()){
					str += yiddish[prop] + " ";
				}
			}
		}
		return str;
	}
	return taco
})(Tranzlate);