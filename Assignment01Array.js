console.log(`*****Assignment01Array.js********`);
console.log(`======step1-How to remove duplicate element==========`);

console.log(`Given array are :[11,3,4,11,4,7,3];`);
console.log(`Duplicate Array value are given below: `);
const ArrayNum = [11,3,4,11,4,7,3];
function removeDuplicates(array) {
    return Array.from(new Set(array));
}

const arrayNum = [11, 3, 4, 11, 4, 7, 3];
const uniqueArray = removeDuplicates(arrayNum);
for (let index = 0; index < arrayNum.length; index++) {
    if (uniqueArray.indexOf(arrayNum[index]) === -1) {
        uniqueArray.push(arrayNum[index]);
    }
     
}
console.log(uniqueArray); 

console.log(`======step2-Given String==========`);
console.log(`Given String value are :"How are you mate"`);
console.log(`given output is:`); 
// const str = "How are You mate";


function alternateCase(str) {
   
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            result += str[i].toUpperCase();
        } else {
            result += str[i].toLowerCase();
        }
    }
    return result;
}

const str = "How are you mate";
const Str = alternateCase(str);

console.log(Str);
