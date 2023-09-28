console.log("====== Function type:function with no arguments and no return type ===== ");

function myPersonalDetails(){

    console.log("Name: GK");

    console.log('city: Pune');

    console.log('PIN CODE: 123456');

    console.log('Is married: YES');

}

myPersonalDetails();

 

console.log("2. ====== Function type:function with arguments and no return type ===== ");

console.log("==== swap ========");

function swap(valueOne, valueTwo) { // function declaration

    console.log('Before swap ==>', valueOne, valueTwo);

    var temp = valueOne;

    valueOne = valueTwo;

    valueTwo = temp;

    console.log('After swap ==>', valueOne, valueTwo);

}

swap(100, 200); // function call / invocation

swap("Virat", "Anushka");
swap("Pune", "Mumbai");
swap("India", "USA");

 

console.log("3. ====== Function type:function with arguments and return type ===== ");

function square(num){

   var result = num * num; 

   return result;

}

var squareNum = square(5);

console.log('Num is 5 and its square is: ', squareNum);