

var show = function () {
    console.log(`Inside Function Expression...`); //function body
    
}
show(); //function call

//argument no return value

// var add = function(value1,value2){
//   console.log(value1+value2);

//  }
//  add(20,10);

var square = function(value){
return value * value;
}
 var result = square(25);
 console.log(`Square of 25 is ${result}`);
 
 //which does not have name is anonymous function