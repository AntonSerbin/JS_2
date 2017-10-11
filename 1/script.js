function calculateAge() {
    var x = document.getElementById("yearOfBirth").value;
    var age;
	if (x<17) {(age=2017-2000-x);}
		else {age=2017-x};
    document.getElementById("resultTask1").innerHTML = "You are " + age + " years old";
}

function calculateTask2() {

	var a=parseInt(document.getElementById("numberOne").value);
	var b=+document.getElementById("numberTwo").value;
	var resultTask2;
	if (a>b) {resultTask2= "The fist number is bigger then second"; }
		else if (a<b) {resultTask2= "The second number is bigger then first"}
			else {resultTask2 = "Numbers are equal"};
	document.getElementById("resultTask2").innerHTML = resultTask2;
}

function task3Appartment() {
	var a=document.getElementById("numberOfAppartment").value;
	var resultTask3;
	if (a>0 && a<21) {resultTask3 = "Entrance number 1"}
		else if (a>20 && a<65) {resultTask3 = "Entrance number 2"}
			else if (a>64 && a<81) {resultTask3 = "Entrance number 3"}
				else {resultTask3 = "Not correct number of the appartment"};
	document.getElementById("resultAppartment").innerHTML = resultTask3;
}

function task4Login() {
	var a=document.getElementById("login").value;
	var b=document.getElementById("password").value;
	var resultTask4;
	switch (a) {
  		case "ivan" :
  			if (b =="333") {resultTask4 = "Wellcome"}
  				else resultTask4= "Wrong password";
       		break
  		case "ssss":
			if (b =="666") {resultTask4 = "Wellcome"}    
				else resultTask4= "Wrong password";
		    break
  		case "gibs":
			if (b =="0000") {resultTask4 = "Wellcome"}    
				else resultTask4= "Wrong password";
		    break
 	 default: resultTask4= "Wrong login";
 				}

	document.getElementById("result4Login").innerHTML = resultTask4;
}

function task5Max() {
	let result5Max;
	var a=+document.getElementById("number1Task5").value;
	var b=+document.getElementById("number2Task5").value;
	var c=+document.getElementById("number3Task5").value;
	if ((a>b) && (a>c)) {resultTask5 = a; } 
		else if ((b>a) && (b>c)) {resultTask5 = b; }
			else if ((c>a) && (c>b)) {resultTask5 = c; }
				else {resultTask5="Some numbers are equal or there is a mistake in numbers"};
document.getElementById("result5Max").innerHTML = resultTask5;					

}