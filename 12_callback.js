

function jennyHomework(Callback) {
    console.log(`Jenny started assignments`);
    console.log(`Her assignments solving is in progress`);
    console.log(`'Jenny's assignment is completed`);
    Callback();
}
let elonCopyHomework = function(){
    console.log(`Thank you Jenny for calling me back`);
    console.log(`Elon started copying assignment`);
    console.log(`Elon copied all assignments`);
}
jennyHomework(elonCopyHomework);


console.log(`======Predefined function=========`);
//1 sec = 100 ms
//in bield,predefined
setTimeout(function(){
console.log(`Inside callback function`);
},3000)

//jab function call krne ke bad stop hoga tab used clearTimeOut
// let intervalId = setTimeout(function(){
//     console.log(`Inside callback function`);
//     },5000)
//     clearTimeout(intervalId);