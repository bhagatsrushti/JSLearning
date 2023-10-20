
console.log(`****25_mapMethodAssignA.js****`);

console.log(`===========Step1============`);
const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19]

const newArray = arrayNumbers.map((currentValue,index)=>{
 return currentValue +10;
})
console.log(`add 10 into each element of array:`);
console.log(newArray);
console.log(`_____________________________________________________________________________________`);


console.log(`===========Step2============`);
//cube the each array element
const arrayNumbers1=[20,11,40,25,23,11,9,31,60,2,19]

const cubeArray = arrayNumbers1.map((currentValue,index)=>{
 return currentValue ** 3;
})
console.log(`Given cube each element of array are:`);
console.log(cubeArray);
console.log(`_____________________________________________________________________________________`);

console.log(`===========Step3============`);
//add the index value into its corresponding each array element
const arrayNumbers2=[20,11,40,25,23,11,9,31,60,2,19]

const newArray1 = arrayNumbers2.map((currentValue,index)=>{
return currentValue + index;
});
console.log(`Given Index values of array are:`);
console.log(newArray1);
console.log(`_____________________________________________________________________________________`);






