
console.log(`*****1-_Assignment A ObjectCloning and Traversing.js******`);
// 1. Create the object → ‘bankSbi’ using literals with at least 4 properties
// 2. Create the object → ‘bankLocation’ using literals with properties: street, city, pin
// console.log(`======Step1===============`);
console.log(`Creating the object ‘bankOfSBI ’ `);
let bankOfSBI ={
branchName:" bankOfSBI Chandrapur",
ifscCode:"sbi456987",
branchManager:"Mr.Gaikwad",
contactDetails:5896321478
}

// console.log(`======Step2===============`);
console.log(`Creating the object bankLocation `);
let bankLocation= {
    street:"samata Chowk",
    city: "Chandrapur",
    pin: 415015
   
}
// console.log(`======Step3===============`);
// Clone the step 1 ( bankSbi ) and step 2 ( bankLocation ) objects using
// ○ Object.assign( )
Object.assign(bankOfSBI,bankLocation);
console.log(`Merged object is - `);
console.table(bankOfSBI);
console.log("Object clone using spread operator ");
 bankSbi = { ...bankLocation}; 
 console.log(bankOfSBI);



// Create the object using object literals → rateOfInterest with properties
// ○ homeLoanInterest, personalLoanInterest, dueInterest
console.log(`Creating the object rateOfInterest `);
const rateOfInterest= {
    homeLoanInterest: "15%",
    personalLoanInterest:"12%",
    dueInterest:"17%"   
}

// console.log(`======Step4===============`);
// 5. Merge the step 1, step 2 and step 4 objects into new object namely → sbiDetails
// Log all the properties that ‘sbiDetails’ got after merging with meaning message
console.log(`Merge the bankOfSBI, bankLocation and rateOfInterest objects into new object namely → sbiDetails`);
const sbiDetails=Object.assign(bankOfSBI,bankLocation,rateOfInterest);
// console.log(sbiDetails);
console.table(sbiDetails);


// console.log(`======Step5===============`);
// 6. Traverse this merged object - step 5 using for in loop and log details properly
for (const key in sbiDetails) {
    console.log(`${key} :- ${sbiDetails[key]}`);
}

const bank =Object.assign(bankSbi,bankLocation);
console.log(bank);
console.table(bank);