$(document).ready(function(){
	$("#number-form").submit(runFizzBuzz);
});

function runFizzBuzz(event){
	event.preventDefault();
	var num = $("#number").val();	
	
	if(isValidNumber(num)) {
		clearResults();
		fizzBuzz(num);
	}
	else {
		alert("Please enter a non-decimal number greater than zero");
	}
	
	$("#number").val("");
}

function isValidNumber(num) {	
	if(num.indexOf(".") != -1){
		return false;
	}
	
	num = +$.trim(num);
	
	if(!num || num <= 0) {		
		return false;		
	}	
		
	return true;
}

function fizzBuzz(num) {
	var printStr;
	$("#results-title").html( formatHTMLString("Fizz buzz up to " + num , "h3") );
	
	for(var i = 1; i <= num; i++) {
		printStr = "";
		if(i % 3 === 0) {
			printStr += "fizz";
		}
		if(i % 5 === 0) {
			printStr += "buzz";
		}		
		if(!printStr) {
			printStr = i;
		}
		$("#results").append( formatHTMLString(printStr, "p") );
	}
}

function clearResults() {
	$("#results-title").html("");
	$("#results").empty();	
}

function formatHTMLString(string, element) {
	var html = "<" + element + ">" + string + "</" + element + ">"
	return html;
}