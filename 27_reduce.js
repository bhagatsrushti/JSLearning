

//const array = [2, 5, 3, 2, 7, 11];
// let sum = 0;
// for (const element of array) {
//     sum = sum + element;
    
// 
//reduce method
const array =  [2, 5, 3, 2, 7, 11];
const sum = array.reduce( (runningTotal, value)=>{
    return runningTotal + value;
}, 0);
console.log(sum);


const nestedArray =  [ [2, 5], [4, 5, 6],[ 2, 7, 11] ];
const arrayNum = nestedArray.flatMap( (element => element));

console.log(arrayNum);



// const str = "How are you mate"; // "HoW ArE YoU MatE"
// const arrayWord = str.split(' ');
// let finalStr = '';
// for (const word of arrayWord) {
//     let firstChar = word.charAt(0).toUpperCase();
//     let lastChar = word.charAt(word.length-1).toUpperCase();
//     // Replace word,  first char by firstChar
//     // Replace word,  last char by lastChar
//     finalStr = finalStr + word;
//     console.log(word, firstChar, lastChar );
// }
// console.log(finalStr);