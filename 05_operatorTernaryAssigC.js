
// console.log("***Ass01 TernaryAssignC****");

// console.log("****step1***");
// function maleMarriageEligibility(gender,age,boyName){

//     var result = gender=='Male' && age>=21 ?
//     `Hey ${boyName} you are eligible for marriage, Congrats!`:
//     `Sorry, ${boyName} you are not eligible,  please try next time.`;

//     return result;
// }

// var result=maleMarriageEligibility("male",25,"Bill Gates");
// console.log(result);
// var result = maleMarriageEligibility("male",17,"Stew Jobs");
// console.log(result);
 
 

//  console.log("*****step2****");

// function femaleMarriageEligibility(gender,age, girlName){
//      var result = gender == "female" && age>=18 ?

//      `Hey ${girlName} you are eligible for marriage, Congrats!`:
//     `Sorry, ${girlName} you are not eligible,  please try next time.`;

//     return result1;
//  }

//  var result1 = femaleMarriageEligibility("female",16,"Jenifer");
// console.log(result1);
// var result = femaleMarriageEligibility("female",27,"Malina Gates");
// console.log(result1);
 











console.log(`=================STEP 01======================`);
function maleMarriageEligibilty(gender, age, boyName) {

    var result = gender=='Male' && age>=21 ? 
    `Hey ${boyName} you are eligible for marriage, Congratulation!!` :
    `Sorry, ${boyName} you are not eligible, pls try next time.`;

    return result;
}
var result=maleMarriageEligibilty("Male",25,"BillGates");
console.log(result);
var result=maleMarriageEligibilty("Male",17,"Stew Jobs");
console.log(result);


console.log(`=================STEP 02======================`);

function femaleMarriageEligibilty(gender,age, girlName) {
    var result1= gender=="female" && age>=18 ? 
    `Hey ${girlName} you are eligible for marriage, Congratulation!!` :
    `Sorry, ${girlName} you are not eligible, pls try next time.`;

    return result1;
}
var result1=femaleMarriageEligibilty("female", 16, "jenifer");
console.log(result1);
var result1=femaleMarriageEligibilty("female", 27, "Malina Gates");
console.log(result1);