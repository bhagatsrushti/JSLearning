var num1 = 100;
var num2 = 200;
console.log("before swap ==>", num1, num2);
var temp = num1;
num1 = num2;
num2 = temp;
console.log("after swap ==>", num1, num2);

var hubby = "Virat";
var wife = "Anushka";
console.log("Before swap==>", hubby, wife);
hubby = wife;
wife = temp;
console.log("after swap=>", hubby, wife);

var city1 = "pune";
var city2 = " Mumbai";

console.log("==========swap=====");
function swap(valueOne, valueTwo) { //function declaration
  console.log(valueOne, valueTwo);
  console.log("Before swap==>", valueOne, valueTwo);
  var temp = valueOne;
  valueOne = valueTwo;
  valueTwo = temp;
  console.log("after swap=>", valueOne, valueTwo); //valuone=hubby,valueTwo=wife
}
swap(100, 200); //calling fuction /inovation
swap("virat","Anushka");
