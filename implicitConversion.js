console.log("********Implicit Conversion***********");
console.log("****Implicit Conversion to String****");
var result;
result='3'+2;
console.log(`js converts the number 2 to a string and perform concatenation with string '3':
 result = "'3'+2" results into  ${result}`);

result='3'+true;
console.log(`'3'and true both are treated as string and perform concatenation of strings 
result = "'3'+true" results into ${result}`);
//console.log(result);

result='3'+undefined;
console.log(`'3'and undefined both are treated as string and perform concatenation of strings
 "'3'+undefined" results into ${result}`);
//console.log(result);

result='3'+null;
console.log(`'3'and null both are treated as string and perform concatenation of strings
 "'3'+null" results into ${result}`);
//console.log(result);

result='4'-'2'
console.log(`'4'and'2' both are implicitly converted from string to 
number "'4'-'2'" results into ${result}`);
//console.log(result);

result='4'+2;
console.log(`'4' is implicitly converted from string to number and then 
perform addition operation "'4'-2" results into ${result}`);
//console.log(result);

result='4'*2;
console.log(`'4' is implicitly converted from string to number and 
then perform multiplication operation "'4'*2" results into ${result}`);
//console.log(result);

result='4'/2;
console.log(`'4' is implicitly converted from string to number and 
then perform division operation "'4'/2" results into ${result}`);
//console.log(result);

console.log('4'+undefined);
console.log('4'-undefined);
console.log(true+undefined);
console.log(null+undefined);