

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