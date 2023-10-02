console.log("*******06_forAssignment-01**********");

console.log("----------step-1 : print 5 to 15 increment by 1----------------");

var result= ""  
for (let index = 5; index <=15 ; index=index+1) {
  result= result + index+ " "

}
console.log(` Numbers From 5 to 15 increment by 1 **`);
console.log(result);

console.log(`--------------------------------------------------`);



var result=""
for (let index = 50; index>=40; index=index-1) {
   result= result + index+ " "
    
}
console.log(` ** Numbers From 50 to 40 decrement by 1 **`);
console.log(result);

console.log(`----------------------------------------------------`);


var str=""
for (let index = 1; index<=30 ; index=index+2) {
    str= str+ index + " "
    
}
console.log(`** First 15 Odd Numbers **`);
console.log(str);

console.log(`-----------------------------------------------------------`);

var result=""
for (let index = 2; index <=20; index+=2) {
 result= result+ index+ " "

    
}
console.log(`** First 10 Even Numbers **`);
console.log(result);

console.log(`-----------------------------------------------------------------------`);

var result=""
for (let index = 5; index <=50; index+=5) {
    result= result+ index+ " "
    
}
console.log(` ** Table Of 5 **`);
console.log(result);

console.log(`---------------------------------------------------------------`);

var result= ""

for (let index = 10; index <=100; index+=10) {
    result= result+ index+ " "
    
}
console.log(` **Table Of 10 **`);
console.log(result);

console.log(`-------------------------------------------------------------------`);

var result=""
for (let index = 100; index>=10; index-=10) {
    result= result+ index+ " "
    
}
console.log(`** Table Of 10 In Reverse Order **`);
console.log(result);