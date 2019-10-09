//alert ('Hello from external JS file');

/* multiple lines comment
Alert() produces output in an alert box
document.write() produces on the browser window
*/

// document.write('Greetings from document.write()');//used for debugging

console.log('Hi, I am happy to help you with debugging');//used for debugging

console.log('you can\'t delete me');

//not a secured way
// document.getElementById('heading').innerHTML += "</br>Learning JS , produced by innerHTML</br>";

//secured but reduced performance
// document.getElementById('heading').innerText += 'Hi, I am produced by innerText';

//secured and increased performance
// document.getElementById('heading').textContent += 'Hello from textContent'

/* Data types
data - raw values, facts, and figures
after processing data will be called as information
numeric type...example +1, -5, 5.4
string type... can contain alphabets, numbers, special characters
boolean or logical type - yes/no, true/false , 1/0
Date format
time format
currency format - $, pound symbol
*/

// values to be stored in a variable should be declare

var name = "Daniel";// var is a keyword used to declare a variable
// A variable is a name used to store a value/Data
var myName = "Beula";
// double or single quotes can be used to store a string value
//camelcase is preferred
var yourName = 'Samuel'; // variable names can be mentioned as an identifier
var myAge = 16;
var yourAge = 20;
var a = 5;
var b = 12;
var c = a + b;
/*semicolon is used at the end of every statement to denote
the end*/
// numeric values are not written with quotation mark, only strings are

console.log('c');//produces the letter c, treats as a string values
console.log(c); // produces the value of c that is calculated

console.log(myName + ' ' + yourName);//adding strings is called string concatenation

var x = '650' //string value

var y = '50' //string values
var z = x + y;
console.log (z);

/*operators
Mathematical /arithmetic operators ..... + ...-....*(asterisk)..../(slash)
relational operators .....<(less than)...>(greater than).....
<=(less than or equal).....>=(greater than or equal)
==(equal)
*/

var myExpression = a + 25 - 3 * 2;//60 or 24 ? follows BODMAS
console.log(myExpression);

var ageResult = myAge < yourAge;
console.log(ageResult);

var licenseAge = 16;
var myEligibility = myAge >= licenseAge ;
console.log(myEligibility);

if (myAge >= licenseAge) {
  alert ('Yes, you can drive');

} else {
  alert ('Sorry, you can\'t drive');
}
