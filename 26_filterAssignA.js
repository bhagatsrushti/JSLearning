console.log(`****26_filterAssignA.js****`);

console.log(`========Step1=============`);
//find out all the numbers which are greater than 50 and log console
 const arrayNumbers =[20,11,40,25,37,49,9,90,60,2,19];

 const greaterNumber = arrayNumbers.filter((currentValue)=>{
   return currentValue > 50;
 })
console.log(`Given numbers are greater than 50 values are : `);
console.log(greaterNumber);
console.log(`___________________________________________________________________`);

console.log(`========Step2=============`);
//find out even number and log on console

 const arrayNumbers1 =[20,11,40,25,37,49,9,90,60,2,19];
 
 const evenNumbers = arrayNumbers1.filter((currentValue)=>{
   return currentValue%2==0;
 })
console.log(`Given even numbers  values are below : `);
console.log(evenNumbers);
console.log(`___________________________________________________________________`);


console.log(`========Step3=============`);
//find out odd number and log on console

 const arrayNumbers2 =[20,11,40,25,37,49,9,90,60,2,19];
 
 const oddNumbers = arrayNumbers2.filter((currentValue)=>{
   return currentValue % 2 !== 0;
 })
console.log(`Given the Display odd numbers values are: `);
console.log(oddNumbers);
console.log(`___________________________________________________________________`);


console.log(`========Step4=============`);
//find out all the numbers which are multiply by 5

const arrayNumbers3 =[20,11,40,25,37,49,9,90,60,2,19];
 
 const multiplyNumber = arrayNumbers3.filter((currentValue)=>{
   return currentValue %5==0;
 })
console.log(`Given the Display values are multiply by 5: `);
console.log( multiplyNumber );
console.log(`___________________________________________________________________`);



console.log(`========Step5=============`);
//find out all the numbers which are between 20 and 50

const arrayNumbers4 =[20,11,40,25,37,49,9,90,60,2,19];
 
 const  numberBetween = arrayNumbers3.filter((currentValue)=>{
   return currentValue > 20 &&   currentValue < 50;
 })
console.log(`Given the Display Numbers between 20 and 50  values are: `);
console.log( numberBetween );
console.log(`___________________________________________________________________`);





