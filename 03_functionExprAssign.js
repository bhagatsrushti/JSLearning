
console.log("***************03_FunctionExpressAssign**************");


console.log("===========================STEP1- SquareNumber==================================");

var show = function () {
    console.log(`Inside Function Expression...`); //function body
}
show();

var square = function(value){
    return value * value;
    }
     var result = square(5);
     console.log(`Square of 5 is ${result}`);


     var square = function(value){
        return value * value;
        }
         var result = square(6);
         console.log(`Square of 6 is ${result}`);


         var square = function(value){
            return value * value;
            }
             var result = square(25);
             console.log(`Square of 25 is ${result}`);

             var square = function(value){
                return value * value;
                }
                 var result = square(100);
                 console.log(`Square of 100 is ${result}`);

                 var square = function(value){
                    return value * value;
                    }
                     var result = square(67);
                     console.log(`Square of 67 is ${result}`);

                     var square = function(value){
                        return value * value;
                        }
                         var result = square(89);
                         console.log(`Square of 89 is ${result}`);

                         var square = function(value){
                            return value * value;
                            }
                             var result = square(59);
                             console.log(`Square of 59 is ${result}`);


console.log("=======================STEP2-typeOf=========================");

var square = function(){
  
    }
      var result = square(5);
   // console.log(`type of function is: ${result}`);
   console.log("type of function is :");
      console.log(typeof square);

                             
console.log("=======================STEP3-areaOfRectangle=========================");

var  areaOfRectangle = function (length,width) {
    var result = length * width;
    console.log("Area of rectangle is:");
    console.log(result);
}
areaOfRectangle(499,917);
console.log("Area of type is :");
console.log(typeof areaOfRectangle);

console.log("=========================STEP4-swapValue===============================");

function swap(valueOne, valueTwo) { // function declaration
  console.log('Before swap :', valueOne, valueTwo);
 var swapValues = valueOne;
    valueOne = valueTwo;
     valueTwo = swapValues;
  console.log('After swap :', valueOne, valueTwo);
}
swap(55, 77); // function call / invocation
swap("Mahi", "Raina");



console.log("=========================STEP5-stringFinds===============================");
var str= "Js the most popular language of internet";
    console.log("*****5.1.A-find total character Available******")
    var strLen = str.length;
    console.log(`Total character available in string is ${strLen}`);

    console.log("*****5.2.B-find character index 6******")
    var charIndex6 = str.charAt(6);
    console.log(`Character at index 6 is '${charIndex6}' `);

    console.log("*****5.3.C-find character index 11******")
    var charIndex11 = str.charAt(11);
    console.log(`Character at index 11 is '${charIndex11}' `);

    console.log("*****5.4.D-find total character Available******")
    var lastChar = str.charAt(str.length - 1);
    console.log(`Last character is ${lastChar}`);

    console.log("*****5.5.E-find very first character******")
    var firstChar = str.charAt(0);
    console.log(`First character is ${firstChar}`);

    console.log("*****5.6.F-find third character******")
    var thirdLastChar = str.charAt(str.length - 3);
    console.log(`Third last character is ${thirdLastChar}`);

    console.log("*****5.7.G-find total number words given ******")
    var strTrim = str.split(" ");
    var strTrimLength = strTrim.length;
    var squareStrTrimLength = strTrimLength * strTrimLength
    console.log(`Total number of words in the given string is ${strTrimLength} and square of length of given string is ${squareStrTrimLength}`);
