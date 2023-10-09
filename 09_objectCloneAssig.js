
console.log(`**==**Assignment 01 -objectclone**==**`);

console.log(`===Step-1=======`);
console.log(`Create Object is :'BankSbi' using a 4 properties`);
const BankSbi={
    bankName:"SBI Bank ",
    bankBranch:"SBIBank Tagor chowk Wani",
    bankIfSCCode:"1234567890",
    bankManager:"Mr.Kale",
};
console.table(BankSbi);


console.log(`===Step-2=======`);
console.log(`Create Object Bank location:'bankLocation' using literal with properties are : street,city,pin`);

let bankLocation = {
    street:"shukrawar peth ",
    city:"Pune",
    pin:411002,
};
console.table(bankLocation);

console.log(`===Step-3=======`);
console.log(`Clone step1(bankSbi) and step2 is (bankLocation) object assign`);

const CloneBank =Object.assign({},bankLocation);
console.table(CloneBank);


console.log(`===Step-4=======`);
console.log(`rate of interest with properties`);
const  rateOfInterest={
    homeLoanInterest:14,
    personalLoanInterest:10,
    dueInterest:12,
};
console.table(rateOfInterest);


console.log(`===Step-5=======`);
console.log(`merge step 1, step2, and step 4 object into new object namely`);

const sbiDetails = Object.assign({},BankSbi,bankLocation,rateOfInterest);
console.table(sbiDetails);



console.log(`===Step-6=======`);
console.log(`traverse the merge object -step 5 using for in loop`);

for (const key in sbiDetails) {
    console.log(key,sbiDetails[key]);
//   console.log(`${key}=> ${sbiDetails}`);
    }
