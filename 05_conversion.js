

var n1 = "20";
var n2 = 20;
console.log(n1==n2); //implicit conversion automatic

console.log(n1, typeof n1); //explicit conversion we do 
n1=+n1;
console.log(n1, typeof n1);

console.log('4'-true); //4-1
console.log(`Ans:4 implicit converted to 4 (number) and true (boolean)`);

//string to number
//1.using + operator
//2.number
var n1 = "20";
var n2 = Number(n1); //Number("30");
console.log(n2, typeof n2);
var isMarried = true;
var result = Number(isMarried);
console.log(result, typeof result);
//always conversion string to number
//number to boolean converter
console.log(`==================`);
var n4 = 30;
var result  = String (n4);
console.log(result, typeof result);

var result = Boolean("Jenny");
console.log(result,typeof result);
