var Tranzlate = (function(taco){
	var french = {"merry":"joyeux", "christmas":"noel", "and":"et", "happy":"content", "new":"nouveau", "year":"an"},
		str = "",
		newStr;

	taco.toFrench = function(arr){
		console.log(arr);
		for (var i = 0; i < arr.length; i++) {
			for(prop in french){
				if (prop == arr[i].toLowerCase()){
					str += french[prop] + " ";
				}
			}
		}
		newStr = str;
		str = "";
		return newStr;
	}
	return taco
})(Tranzlate || {});