function jennyHomework(Callback) {
    console.log(`Jenny started assignments`);
    console.log(`Her assignments solving is in progress`);
    console.log(`'Jenny's assignment is completed`);
    console.log(`=========================`);
    Callback();
    return function () {
        console.log(`Yahoo . we both complete assignments`);
        
    }
}
let elonCopyHomework = function(){
    console.log(`Thank you Jenny for calling me back`);
    console.log(`Elon started copying assignment`);
    console.log(`Elon copied all assignments`);
    console.log(`======================`);
}
//  const result = jennyHomework(elonCopyHomework);
// result();
jennyHomework(elonCopyHomework)();