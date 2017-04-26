var lang = document.getElementById("lang");
var input = document.getElementById("input");
var button = document.getElementById("translate");
var output = document.getElementById("output");

button.addEventListener("click", function(){
	var inputArray = input.value.split(" ");

	if (lang.value == 0) {
		output.innerHTML = Tranzlate.toFrench(inputArray);
	} else if (lang.value == 1){
		output.innerHTML = Tranzlate.toYiddish(inputArray);
	} else if (lang.value == 2){
		output.innerHTML = Tranzlate.toSpanish(inputArray);
	} else if (lang.value == 3){
		output.innerHTML = Tranzlate.toGerman(inputArray);
	} else {
		alert("please select a value");
	}
	console.log(Tranzlate);
});


