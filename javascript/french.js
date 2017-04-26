var Tranzlate = (function(taco){
	var french = {"merry":"joyeux", "christmas":"noel", "and":"et", "happy":"content", "new":"nouveau", "year":"an"},
		str = "";

	return {
		toFrench: function(arr){
			console.log(arr);

			for (var i = 0; i < arr.length; i++) {

				for(prop in french){

					if (prop == arr[i].toLowerCase()){
						str += french[prop] + " ";
					}
				}
			}
			return str;
		}
	}
	return taco
})(Tranzlate);