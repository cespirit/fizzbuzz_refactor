$(document).ready(function(){
	$("button").click(runFizzBuzz);	
	$("#number").keyup(function(e){
		if(e.keyCode === 13) {
			runFizzBuzz();
		}
	});
});

function runFizzBuzz(){
	$("#results").empty();
	
	var num = $("#number").val();	
	
	if(isValidNumber(num)) {
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
	$("#results").append("<h3>Fizz buzz up to " + num + "</h3>");
	
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
		$("#results").append("<p>" + printStr + "</p>");
	}
}