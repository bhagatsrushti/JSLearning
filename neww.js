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