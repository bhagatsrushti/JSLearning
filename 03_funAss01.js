console.log("**********03_funAssignment01******");
console.log("********************function with no arguments and no return type************");

function word () {
    console.log(" Hello Srushti Bhagat");
    console.log(" I love Angular JS");
}
word();

console.log(" ====== function with  arguments and no return type ===== ");

function personalDetails(firstName,lastName,collegeName) {

 console.log( "First Name :=",firstName );
    console.log("Last Name :=",lastName);
    console.log("College Name :=",collegeName);
}
personalDetails("Srushti","Bhagat","Sinhgad Institute SIMCA Pune");
    

console.log(" ====== function with  arguments and no return type ===== ");


function swapValues(valueOne,valueTwo)
{
console.log("====before swap===",valueOne,valueTwo);
var temp=valueOne;
valueOne=valueTwo;
valueTwo=temp;
console.log("====after swap====",valueOne,valueTwo);

}
swapValues("Virat","Anushka");
swapValues(1000,2000);

console.log(" ====== function with  arguments and return type ===== ");

function addThreeValues(numOne,numTwo,numThree)
{
var result=numOne+numTwo+numThree;
//console.log(numOne+numTwo+numThree);
return result;
}
var addition=addThreeValues(10.23,600,40);
console.log("Addition of numbers 10.23,600,40 :=",addition);
var word=addThreeValues("Hello","   Good","  Morning");
console.log("Addition of 3 words :=", word );