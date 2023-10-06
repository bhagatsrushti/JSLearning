console.log(`==*==*==*===*=*==08_arrayAssignA.==*===*===*==*==*==*`);



const arrayFruits = ["Banana","Orange","Apple","Mango","water Melon"];
console.log(`Given array is :${arrayFruits}`);


console.log(`***************************Step-1**********************************************`);
arrayFruits[0];
console.log(`first element is Given array :${arrayFruits[0]}`);



console.log(`******************************Step-1******************************************`);
let length =arrayFruits.length;
arrayFruits[4];
console.log(`last element is given array :${arrayFruits[arrayFruits.length-1]}`);

console.log(`*****************************Step-2*******************************************`);

arrayFruits.unshift("Papaya");
console.log(`Added papaya  before banana :${arrayFruits}`);

console.log(`******************************Step-3*****************************************`);
arrayFruits.splice(4,1)
console.log(`Removed Mango from array the string :${arrayFruits}`);


console.log(`******************************Step-4******************************************`);
arrayFruits.push("Pineapple")
console.log(`Added element Pineapple at last position : ${arrayFruits}`);

console.log(`******************************Step-5*****************************************`);
arrayFruits.splice(4,0,"Dragon Fruit");
console.log(`Insert Element Dragon Fruit before Water Melon :${arrayFruits} `);


console.log(`=********************************Step-6******************************************`);
arrayFruits[2]="Kiwi";
console.log(`Replace element Orange with KiWI Fruit :${arrayFruits}`);



console.log(`*******************************Step-7=********************************************`);

let out = arrayFruits.slice(1,4);
console.log(` Slices 1 to 4 element :${out}`);



console.log(`*********************************Step-8**********************************************`);
let res = arrayFruits.slice(arrayFruits.length -3);
console.log(` Only select last element :${res}`);