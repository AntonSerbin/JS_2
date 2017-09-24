function task1Odd() {
    var res ="2";
    for (var i = 4; i < 101; i=i+2) {
	res = res + ", " + i;}
   document.getElementById("resultTask1").innerHTML = res;
}

function task2() {
	var res="";
	for (var i = 200; i>=0; i--) {
			res = res + " " + i;
			}
	document.getElementById("resultTask2").innerHTML = res;
}

function task3Sum() {
	var resultTask3 = 0;
	for (var i=0; i!=101;i++) {
		resultTask3 = resultTask3+i;
		}
	document.getElementById("result3").innerHTML = resultTask3;
}

function task4Power() {
	var a=document.getElementById("number").value;
	var b=document.getElementById("power").value;
	var resultTask4=a;
	for (var i=2; i<=b; i++) {
 	resultTask4=a*resultTask4;
			}
	if (b%1>0) {resultTask4= "Please, enter integer number in power form"};
	if (b<0.001) {resultTask4=1;};
	if (b<0) {resultTask4= "Please, enter possitive number in power form"};

	document.getElementById("result4Power").innerHTML = resultTask4;
}


function task5Multiply() {
	let result5="";
	var a=+document.getElementById("numberTask5").value;
	
	for (var i=1; i<=9; i++) {
		if (i%3==0) {result5 = result5 + " " + a + "*" + i + "= " + a*i + ";"+ "<br>";}
		else {result5 = result5 + " " + a + "*" + i + "= " + a*i + ";";};
			}

document.getElementById("resultTask5").innerHTML = result5;					

}

function task6Multiply() {
	let result6="";
	var a=+document.getElementById("number1Task6").value;
	var b=+document.getElementById("number2Task6").value;
	for (var i=1; i<=b; i++) {
		if (i%10==0) {result6 = result6 + " " + a + "*" + i + "= " + a*i + ";"+ "<br>";}
		else {result6 = result6 + " " + a + "*" + i + "= " + a*i + ";";};
			}

document.getElementById("resultTask6").innerHTML = result6;					

}

function task7Chars() {
	let result7="";
	for (var i=1000; i<=2000; i++) {
		result7 = result7 + " &#" + i;
		}

document.getElementById("resultTask7").innerHTML = result7;					

}