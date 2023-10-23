
console.log(`***************27_sortingAssignA.js*************`);

console.log(`===================Step-1=================`);
const arrayRollNumbers=[113,45,56,11,32,45,109,799,56,45];
console.log(`Given Array Is ==>> [${arrayRollNumbers}]`);
const result=arrayRollNumbers.reverse();
console.log(`Reversing Given Array As It Is :   [${result}] `);
console.log(`______________________________________________________________________________________________`);


console.log(`===================Step-2=================`);
const sortArray=arrayRollNumbers.sort();
console.log(`Sorting Array Without Any Custom Logic is :  [${sortArray}]`);
console.log(`______________________________________________________________________________________________`);


console.log(`===================Step-3=================`);
const newArray = arrayRollNumbers.sort( (a, b) => {
    return a>b ? 1 : -1;
} );
console.log(`Sorting Given Array In Ascending Order : [${newArray}]`);
console.log(`______________________________________________________________________________________________`);


console.log(`===================Step-4=================`);
const greatestNumber=newArray[newArray.length-1];
console.log(`Greatest Number From Given Array : ${greatestNumber}`);
console.log(`______________________________________________________________________________________________`);



console.log(`===================Step-5=================`);
console.log(`Smallest Number From Given Array : ${newArray[0]}`);
console.log(`______________________________________________________________________________________________`);


console.log(`===================Step-6=================`);
arrayNumber = [...new Set(newArray)];
console.log(`After Removing Duplicate Element From Given Array ::`);
console.log(arrayNumber);console.log(`_______________________________________________________________________`);