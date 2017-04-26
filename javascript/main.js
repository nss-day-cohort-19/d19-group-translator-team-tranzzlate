var lang = document.getElementById("lang");
var input = document.getElementById("input");
var button = document.getElementById("translate");
var output = document.getElementById("output");
var speech = document.getElementById("speech");
var accent;

button.addEventListener("click", function(){
	var inputArray = input.value.split(" ");

	if (lang.value == 0) {
		output.innerHTML = Tranzlate.toFrench(inputArray);
		accent = "French Female";
	} else if (lang.value == 1){
		output.innerHTML = Tranzlate.toYoruba(inputArray);
		accent = "UK English Female";
	} else if (lang.value == 2){
		output.innerHTML = Tranzlate.toSpanish(inputArray);
		accent = "Spanish Latin American Female";
	} else if (lang.value == 3){
		output.innerHTML = Tranzlate.toGerman(inputArray);
		accent = "Deutsch Female"
	} else {
		alert("please select a value");
	}

	speech.onclick = function(){
		responsiveVoice.speak(output.innerHTML, accent);
	}
});