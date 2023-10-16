



const array = [20,10,30,70];
console.log(array);


const setOfRollNum = new Set();
setOfRollNum.add(11);
setOfRollNum.add(22);
setOfRollNum.add(11);
setOfRollNum.add(33);
setOfRollNum.add(22);
console.log(setOfRollNum);
console.log(`Total element in set is: ${setOfRollNum}`);
//setOfRollNum}.clear();
setOfRollNum.delete(22);
 let result = setOfRollNum.has(33);
console.log(result);

console.log(typeof setOfRollNum);

for (const element of setOfRollNum) {
    console.log(element);
    
}

var arrayNumber = [22,11,44,22,77,11];
const setNum = new Set(arrayNumber);
console.log(setNum);

new Set(arrayNumber);
arrayNumber = [...new Set(arrayNumber)]; //spread operator
console.log(arrayNumber);
