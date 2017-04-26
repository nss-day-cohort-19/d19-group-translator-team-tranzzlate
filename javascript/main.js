console.log("hey");
var lang = document.getElementById("lang");
var input = document.getElementById("input");
var button = document.getElementById("translate");

var inputArray = input.value.split(" ");
var Tranzlate = {};


button.addEventListener("click", function(){
	if (lang.value == 0) {
		Tranzlate.toFrench(inputArray);
	} else if (lang.value == 1){

	} else if (lang.value == 2){

	} else if (lang.value == 3){

	} else {
		alert("please select a value");
	}
});


