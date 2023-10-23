

//const array = [2,5,3,2,7,11];
//sort method in ascending order
const frdNames = ['Jenny', "Bill", 'Stew', "Elon"];
const sortedArray=frdNames.sort();
console.log(sortedArray);
console.log(frdNames);


//const array = [2,5,3,2,7,11];
//sort method array in descending order

//output ['stew',"Jenny","Elon", 'Bill'];
const reverseArray = sortedArray.reverse();
console.log(reverseArray);

console.log(`========Sorting an array of Number===========`);
//use  internally string
const array = [29, 15, 31, 111, 27, 6];
//provide custom logic
const newArray=array.sort((a,b)=>{
    //we can use if method also
    return a>b ? 1: -1;
    // //descending order
    // return a>b ? -1: 1;
});
console.log(newArray);
console.log(newArray[newArray.length-1]);

// console.log(newArray);
// console.log(newArray[newArray=[0]]);