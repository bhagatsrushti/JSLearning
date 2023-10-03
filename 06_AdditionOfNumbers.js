//1 to 10
var sum = 0;
for (let index = 0; index <=10; index++) {
    sum = sum + index; // 0 + 1
    
}
console.log(`Addition of 1 to 10 is :${sum}`);

//1 2 3  4 5  6  7 
//reverse string
var str = "Developer";
var reverseStr="";
for (let index = str.length-1; index >= 0; index--) {
 reverseStr = reverseStr + str.charAt(index);
    
}
console.log(`reverse string is: ${reverseStr}`);


// Reverse the string
var str = "Developer";
var reverseStr = "";
for (let index = str.length-1; index >=0; index--) {
    reverseStr = reverseStr + str.charAt(index); 
}
console.log(`Reverse string is: ${reverseStr}`);


// Count the vowels
var str = "i am ui developer";
var count = 0;
for (let index = 0; index < str.length-1; index++) {
    var char = str.charAt(index);
    if(char=='a' || char=='e' || char=='i' || char=='o' || char == 'u'){
        count = count + 1;
    }  
}
console.log(`Total number of vowels are: ${count}`);

console.log(`=============================`);
var str = "I am ui developer";
var count = 0;
var vowelsCap = "AEIOU";
for (let index = 0; index < str.length-1; index++) {
    var char = str.charAt(index).toUpperCase();
    if(vowelsCap.includes(char)){
        count = count + 1;
    }  
}
console.log(`Total number of vowels are: ${count}`);



console.log(`=======assignment0A loop========`);

//step-21*1 + 2*2+  3*3  + 4*4 + 5*5
var result = 0;
for (let index = 1; index <=5; index++) {
 result = result + index * index;
    
}
console.log(`sum of square: ${result}`);

//step3
function oddPositionedChars(params) {
    for (let index = 0; index < array.length; index++) {
     if (index%2!=0 && str.charAt(index)!=" ") {
        console.log(str.charAt(index));
     }
    }
}
console.log(`String is `);