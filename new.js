console.log("=============> Assignments No-2 <==================");

console.log("====> Function With No Argument And No Return Value <=====");

function Learn(){

    console.log("====Statement 1====");
    console.log("There are two ways of spreading light to be candle, or the mirror that reflects it.");
    console.log("====Statement 2====");
    console.log("Make it work, make it right, make it fast.");
}
Learn();
console.log("-------------------------------------------------------------");

console.log("====================Step-2===================================");

function personalDetails(FirstName,LastName,collegeName){

    console.log("First Name:-",FirstName );
    console.log("Last Name:-",  LastName);
    console.log("College Name:-", collegeName);

}
personalDetails("Rohit", "Kamble","JSPMs RSCOE Pune")

console.log("---------------------------------------------------------------");

console.log("======================Step-3=====================================");

function swap(Name1,Name2){

    console.log("Value Before Swap--->",Name1,Name2);
    

    var temp=Name1;
    Name1=Name2;
    Name2=temp;
   console.log("Value After Swap--->",Name1,Name2);
   console.log("-----------------------------------");


}
swap("Virat","Anushka");
swap(1000,2000);
swap("Earth","Moon")
console.log("---------------------------------------------------------------");

console.log("======================Step-4=====================================");

function addThreeValues(num1,num2,num3){

    var sum=num1+num2+num3;
    return sum;

}
console.log("Given Values For Addition:- 10.23,600,40");
var addition1=addThreeValues(10.23, 600,40);
console.log("Addition Of Value is:", addition1);
console.log("--------------------------------------------------------------");

console.log("Given String for Addition:- Hello,Good, Morning");
var addition2= addThreeValues("Hello","Good","Morning")
console.log("Addition of String Will Be:-",addition2 );

console.log("==========================================================================");