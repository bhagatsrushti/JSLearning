

// let array = [10,20,30,40,50,60];
// console.log(typeof array);
// console.log(array);

// console.log(`Total element in array is :${array.length}`);

// console.log(`==*==*==*==*Accessing or updating array element==*==*==*`);
//  let element0thIndex = array[0];
//  console.log(element0thIndex);
//  console.log(array[1]);
//  console.log(Array[array.length-1]);
//  console.log(`second last element in array is: ${array[array.length-2]}`);

//  console.log(`==*==*==*updating element==*==*==*`);
//  array[1]=70;
//  console.log(array);

//  console.log(`==*==*==*indexOf method==*==*==*`);
//  console.log(array.indexOf(30));


 
//  console.log(`==*==*==*Traversing an array==*==*==*==*`);
//  let arrayNum =[22,11,44,55,77,33];
// //  arrayNum[0];
// //  arrayNum[1];
// //  arrayNum[2];
// //  arrayNum[3];

//  for (let index = 0; index < arrayNum.length; index++) {
//     const element = arrayNum[index];
//     console.log(element);
//  }

// console.log(`========= Traversing an array in reverse order===========`);
// for (let index = arrayNum.length-1; index >=0; index--) {
//     const element = arrayNum[index];
//     console.log(element);
// }

//  let arrayNums = [22, 11, 44, 55, 77, 33];
//  console.log(`====== Adding element in last=========`);
//  arrayNums.push(88);
//  console.log(arrayNums);//push methon when we use last num


//  let arrayNumbers = [22, 11, 44, 55, 77, 33];
// console.log(`====== Removing element in last=========`);
// arrayNumbers.pop();
// console.log(arrayNumbers);
 

// console.log(arrayNumbers); //when we use 1st number
// cConsole.log(`====== Adding element in first position  =========`);
// arrayNumbers.unshift(99);
// console.log(arrayNumbers);

// let arrayN = [22, 11, 44, 55, 77, 33];
// console.log(`====== Removing element in first position =========`);
// arrayN.shift();
// console.log(arrayN);





let array = [10, 20, 30, 40, 50, 60];
console.log(typeof array);
console.log(array);

console.log(`Total elements in array is : ${array.length}`);

console.log(`=========== Accessing or updating array element===============`);
let element0thIndex = array[0];
console.log(element0thIndex);
console.log(array[1]);
console.log(array[array.length-1]);
console.log(`Second last element in array is:  ${array[array.length-2]}`);
console.log(`========= Updating an element===========`);
array[1] = 70;
console.log(array);

console.log(`========= indexOf()===========`);
console.log(array.indexOf(30));

console.log(`========= Traversing an array===========`);
let arrayNum = [22, 11, 44, 55, 77, 33];
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    console.log(element); 
}
console.log(`========= Traversing an array in reverse order===========`);
for (let index = arrayNum.length-1; index >=0; index--) {
    const element = arrayNum[index];
    console.log(element);
}

let arrayNums = [22, 11, 44, 55, 77, 33];
console.log(`====== Adding element in last=========`);
arrayNums.push(88);
console.log(arrayNums);

let arrayNumbers = [22, 11, 44, 55, 77, 33];
console.log(`====== Removing element in last=========`);
arrayNumbers.pop();
console.log(arrayNumbers);