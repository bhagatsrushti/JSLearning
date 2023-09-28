console.log("===================Assignment 01: OperatorB.js====================");

console.log("*****step1*****");
function greaterNumber(n1,n2){
var result= n1>n2 ? n1 : n2
console.log(`The Greater Number between "10" and "-10" is: ${result}`);
}
greaterNumber(10,-10  )


function greatNum( n1,n2){
var result= n1>n2 ? n1 : n2
console.log(`The Greater Number between "800" and "899" is: ${result}`);

}

greatNum(800,899)
console.log(``);


function isEvenorOddNum(n1,n2,n3,n4){

var result= n1%2==0 ? "Given Number is Even": "Given Number is odd"
return result


}
console.log("****step2****");
var output= isEvenorOddNum(29,);
console.log(`is 29 Even or Odd: ${output}`);

var num=44;

var result= num%2==0 ? "Given Number is Even": "Given Number is odd"
console.log(`is 44 Even or Odd: ${result}`);

var num1=101;
var result= num1%2==0 ? "Given Number is Even": "Given Number is odd"
console.log(`is 101 Even or Odd: ${result}`);

console.log(``);


console.log("*******step3*******");
var str1="Javascript"
var length1=str1.length

var result= length1%2==0 ? " Even": "Odd"
console.log(`Lenghth Of "JavaScript" is: ${result}`);

var str2="developer"
var length2=str2.length
var result= length2%2==0 ? "Even" : "Odd"
console.log(`Lenghth Of "developer"  is:  ${result}`);

var str3="Google"

var length3= str3.length
var result= length3%2==0 ? "Even" : "Odd"
console.log(`Lenghth Of "Google"     is:  ${result}`);