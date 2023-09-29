
var greet = "Good Morning";
// var result = typeof strName;
// console.log(result);



console.log("******length property******");
 var totalLength = greet.length;
console.log('Length of string is:',totalLength);


console.log("**************charAt***************");
var charAt0 = greet.charAt(0);
console.log("Character at index 0 is:",charAt0);
var charAt5 = greet.charAt(5);
console.log("Character stored at index 5 is:",charAt5);
//when long string find character act

greet.length-1; //last character value find
 var lastIndexChar = greet.charAt(greet.length-1);
 console.log('Last Index char is :', lastIndexChar);
 //find the 3rd last character
 greet.length -3;
 var thirdLastChar = greet.charAt( greet.length -3);
 console.log('third last char is :',thirdLastChar);



 console.log("**************concatenation****************");
//  console.log('1'+'1');
//  "Good" + "afternoon"//concatenation means join two things
 var firstName = "Jenny";
 var lastName = "Gates";
  var result = firstName.concat(lastName);
  console.log(result);
 


  console.log("****************IndexOf****************");
  var indexOfM = greet.indexOf('M')//give char result index
  console.log('Index of M is:',indexOfM);
  console.log(greet.indexOf('nin'));
  console.log('Index of char z:',greet.indexOf('z')); //-1
  console.log('Index of char D:', greet.indexOf('D')); //-1 always when any char not available in string



  console.log("****************replaceMethod****************");
  var result = greet.replace('Morning','Afternoon');
  console.log(result);
  var result = greet.replace(' ',"_");
  console.log(result);


 console.log("========== trim() =============== "); //trim used removed space
var str = "   Good Afternoon  ";
var lengthBeforeTrim = str.length;
console.log("Length before trim : ", str.length);
var result = str.trim()
console.log("Length after trim: ", result.length);
var lengthAfterTrim = result.length;
var result = lengthBeforeTrim - lengthAfterTrim;
console.log('Removed extra spaces are: ', result);



console.log("========== includes() =============== ");
var result = greet.includes('Morning');
console.log("Is Morning word available: ", result);
var result = greet.includes('nin');
console.log("Is nin word available: ", result);
var result = greet.includes('good');
console.log("Is good word available: ", result);



console.log("========== search() =============== ");
var greet = "Good Morning";
var result = greet.search('orn');
console.log(result);
var result = greet.search('after');
console.log(result);



console.log("========== slice() =============== ");
var greet = 'Hello Good Morning!';
var result = greet.slice(6);
console.log(result);
var result = greet.slice(6, 10);
console.log(result);



//how to count total no of string
console.log("========== split() =============== ");  //return multiple values
var result = greet.split(" ");
console.log(result);   //use non primitive data type
//WAP to count the total number words
var str = "I am UI developer";
var words = str.split(" ");
console.log(words);  //object is reference datatype
console.log(typeof words);
console.log('Total words is : ',words.length);
//console.log('total words is :${word.length});
// Console.log(typeof words);


// String template
console.log(`I am "UI" Developer `);
var num1 = 10;
var num2 = 20;
var result = num1 + num2;
console.log("Addition of ", num1, "and ", num2, "is :", result);
console.log(` Addition of ${num1} and ${num2}  is: ${result}`);


//string template
