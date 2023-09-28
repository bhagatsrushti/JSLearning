console.log(`====  1. Arithmetic Operator ====`);
// + - *
var num1 = 10;
var num2 = 2;
var result = num1 * num2;
console.log(`Multiplication result is: ${result}`);

var result = num1 ** 3;
console.log(`Exponential result is: ${result}`);

var result = num1 / num2;
console.log(`Division result is: ${result}`);

var result = num1%num2;
console.log(`Modulus result is: ${result}`);

console.log(`Modulus result is: ${10 % 3}`);

console.log(`Modulus result is: ${15 % 4}`);

console.log("======Unary Operator======");

var num1 = 10;
var result = num1++; //var result = num1 + 1; //postfix
console.log(`Result is : ${result}`); //postfix
var result = ++num1; //prefix
console.log(`Result is : ${result}`); //prefix

var num2 = 10;
var result = --num2;  // num2--; // num2-1;
console.log(`Result is of decrement is : ${result}`);


console.log("=====Assignment Operator=====");
var num3 = 5;
//Compound Addition +=
 num3+=3; //num3 = num3 +3;
console.log(`result of Compound Addition is : ${num3}`);


console.log("======Comparison Operator ======");
var str1 = "Focus";
var str2 = "Locus";

 var result = str1 == str2; //typeof result;
console.log(`Result of comparison  == is :${result}`);

var result = str1 === str2;
console.log(`Result of comparison === is :${result}`);

var num1 = 10; //datatype number
var num2 = "10"; // datatype string
var result = num1 == num2;
console.log(`Result of comparison == is :${result}`);

var result = num1 === num2;
console.log(`Result of comparison == is :${result}`);

var num3 = 20;
var result = num1 !=num3;
console.log(`Result of comparison != is : ${result}`);

var result = num1 > num3;
console.log(`Result of Greater than > is : ${result}`);
console.log("===========");
var num4 = 20;
var result = num3 >num4;
console.log(`Result of Greater than > is : ${result}`);

var result = num3 >= num4;
console.log(`Result of Greater than equal > is : ${result}`);


var result = 10 < num4;
console.log(`Result of Less than < is : ${result}`);


var result = 20 <= num4;
console.log(`Result of Less than equal <= is : ${result}`);


console.log("======Logical Operator=========");
//AND &&
//OR ||
//NOT !
//jenny sscMarks = 69 hscMarks = 50
// sscMarks grater than equal 60 AND hscMarks also greater than equal 60

