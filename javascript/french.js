var Tranzlate = (function(taco){
	var french = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"},
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
		}
	}
	return taco
})(Tranzlate);