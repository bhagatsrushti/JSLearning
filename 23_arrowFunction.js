

//function Expression with no argument name

let add = function(){
    console.log(`Inside function expression`);
}
add();

//arrow function , no argument neither be have return value
let arrowFun = ()=>{
    console.log(`Inside  arrow function`);
}
arrowFun();

//arrow function with arguments
let sub  = (num1,num2)=>{
console.log(`Subtraction is: ${num1-num2}`);
}
sub (20,10)

//argument with return value
let square = (num)=>{
 let result = num * num;
  return result;
}
// let square = num => num * num; //direct 
let result = square(7)
console.log(`square of 7 is : ${result}`);