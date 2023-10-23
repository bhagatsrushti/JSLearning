//1.WAP to print numbers from 5 to 15 by incrementing1.
//2/WAP to print numbers from 50 to 40 by decrementing by 1
//3.WAP to find first 15 odd numbers
//4.WAP  to find 10 even numbers
//5.WAP to print table of 5 as like --> 5,10,15,20,25...50
//6.WAp to print table of 10 like that-->10,20,30,40,50....100
//7.WAp to print table of 10 in reverse order like -->100,90,80.....10

console.log(`====Step1==========`);
console.log(`WAP Print number from 5 to 15 increment 1`);
console.log(`By using  for loop`);
var  index=5;
for (let index = 5; index <=15; index++) {
   console.log(index);
    
}
console.log(`______________________________________________`);
console.log(`by using method..`);
function incrementNumbers(value1,value2,value3) {
    for (let index = value1; index <=value2; index += value3) {
       console.log(index);
        
    }
}
incrementNumbers(5,15,1)
console.log(`______________________________________________`);
console.log(`by using array`);

var arrayNum = [5,15,1];
let index = 0;
array.from




// var arrayNumber = [22, 11, 44, 55, 77, 33];
// let index = 0;
// while (index <arrayNumber.length) {
//     console.log( arrayNumber[index]);
//    index ++;
// }