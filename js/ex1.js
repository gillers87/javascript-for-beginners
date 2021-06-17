/**
 * Question 1
 */

console.log("This is ex1.js");


/**
 * Question 2
 */

var firstName = "Chris";
var surname = "Gilroy";
var yearOfBirth = 1987;
var age = 2021-yearOfBirth;

document.getElementById("student_message").innerHTML = "Hi, my name is " 
                                                        + firstName + " " + surname 
                                                        + ", I'm " + age.toString
                                                        + " years old and I'm learning Javascript";


/**
 * Question 3
 */


var num1 = parseInt(document.getElementById("num_1").innerText);
var num2 = parseInt(document.getElementById("num_2").innerText);

document.getElementById("result").innerHTML = ((num1 + num2) / 2).toFixed(2);


/**
 * Question 4
 */

 var phone1 = "988866552";
 var phone2 = "99087612366";
 var phone3 = 876543123;
 var phone3String = phone3.toString;

 console.log("phone1 phone number is valid: " + (phone1.length == 9));
 console.log("phone2 phone number is valid: " + (phone2.length == 9));
 console.log("phone3 phone number is valid: " + (phone3String.length == 9));


 /**
  * Question 5
  */

 console.log("The value of 32^6 is: " + (Math.pow(32,6)));

 /**
  * Question 6
  */

 /**
a) var NAME;
VALID

b) var $num1;
INVALID
ACTUALLY IS VALID

c) var typeof;
INVALID

d) var first-name;
INVALID

e) var attempt_2;
VALID

f) var 2ndAttempt;
INVALID

g) var full name;
INVALID
  */

/**
 * Question 7
 */

 var quantity = "25";
 var number = 6;
 var pressure;
 var temperature = null;

 console.log(quantity += quantity);
 //50
 console.log( (7+5) / number + 2 );
 //1.5
 console.log(pressure);
 //undefined
 console.log(temperature);
 //null
 console.log(typeof pressure);
 //undefined
 console.log(typeof temperature);
 //object


 /**
  * Question 8
  */

 var url1 = document.getElementById("url_1").innerText;
 document.getElementById("url_2").innerHTML = "https://" + url1;

 var url3 = document.getElementById("url_3").innerText;
 document.getElementById("url_4").innerHTML = url3.substring(8);