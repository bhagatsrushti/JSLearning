console.log(`------------Assignment:0A:Control Flow,06_loopAssign.js-----------`);


console.log("=========Step1==============");


// console.log(`Total number of vowels are: ${count}`);

console.log(`=============================`);
var str = "I am very good IT Developer";
console.log(`numbers of given in strings are:"${str}"`);
var count = 0;
var vowels = "AEIOUaeiou";
for (let index = 0; index < str.length-1; index++) {
    var char = str.charAt(index).toUpperCase();
    if(str.includes(char)){
        count = count + 1;
    }  
}
console.log(`Total number of vowels are: ${count}`);




console.log("=========Step2-sum of cube==============");

//step-21*1 + 2*2+  3*3  + 4*4 + 5*5
function sumOfCubes() {
    var sum = 0;
    for (let index = 1; index <=5; index++) {
     sum = sum +  index**3;
         
}
console.log(`sum of cubes numbers from 1 to 5: ${sum}`);
}
sumOfCubes();





console.log("=========Step3-odd position character==============");
function oddPositionedChars(str) {
    console.log(`given string are:"${str}"`);
    var char=" ";
    for (let index = 0; index <=str.length-1; index++) {
     if (index%2!=0 && str.charAt(index)!=" ") {
        char = char + str.charAt(index)+" ";
        // console.log(str.charAt(index));
     }
    }
    console.log(`odd position character ares :${char} `);
}
oddPositionedChars("Hard work always pays back");
console.log(" ");

oddPositionedChars("Soon I will be UI IT Champ");
console.log(" ");



