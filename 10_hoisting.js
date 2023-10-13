




console.log(personName);//alway upar ans undefined
//console.log(age);
var personName = "Elon Musk"; //declaration
let age = 22;
console.log(personName);
console.log(age);

//function hoisting var keyword
add();
function add() {
    console.log(`Addition is : ${10+10}`);
    
}
// not hoisting this is can not be host let keyword not hoisting
const multiply = function () {
    console.log(`Multiplication is: ${10*10}`);
}