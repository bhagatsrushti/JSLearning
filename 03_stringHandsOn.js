console.log(`===================Assignment-02 StringHandsOn======================`);

var str="    Hey you are doing good, keep it up   ";

function stringHandsOn(){ }
stringHandsOn()
console.log("Step-1 String is ==>", str);

var result=str.length
console.log(`Step-2 Length Of String is: ${result}`);

var result1= str.trim();
console.log(`Step-3   Removed All Spaces: ${result1} `);

var result2= result1.length;
console.log(``);
  
var removedSpace=result-result2
console.log("Step-4 Total Number of Extra Spaces is:",removedSpace);

var charStart= result1.charAt(0);
var charEnd= result1.charAt(result1.length-1);
console.log(`Step-5 First Character after Trim is:: ${charStart} Last Character After Trim:: ${charEnd}`);

var allWord= result1.split(" ")

console.log("Step-6 Count of Total Word After Trim is:",allWord.length);
console.log(``);
  
var indexOfWord= result1.indexOf("good")
console.log(`Step-7 Index of Word "good" is: ${indexOfWord}`);

var portion=result1.slice(22);

console.log(`Step-8 Substring Starting From Index "22" is: ${portion}`);

var endWith=result1.endsWith("up");
console.log(``);

console.log(`Step-9 Is String Ends With word "up": ${endWith}`);

var started=result1.startsWith("Hey")

console.log(`Step-10 Is String Started With word "Hey": ${started}`);