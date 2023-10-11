console.log(`***********09_constructorFunction_assign.js*************`);

console.log(`=========Step1===========`);


function Bank(bankName,bankLocation,bankIfSCCode,bankBranchCode) {
    this.bankName =bankName;
    this.bankLocation=bankLocation;
    this.bankIfSCCode=bankIfSCCode;
    this.bankBranchCode=bankBranchCode;
}


const yesBank = new Bank("YES Bank","pune","YES11223344",123456);
console.log(`bank Name : ${yesBank.bankName}, bank Location : ${yesBank.bankLocation}, bank IfSCCode : ${yesBank.bankIfSCCode},bank BranchCode : ${yesBank.bankBranchCode}`);

const sbiBank= new Bank("SBI Bank","Kolhapur","SBI334456",445577);
console.log(`bank Name : ${sbiBank.bankName}, bank Location : ${sbiBank.bankLocation}, bank IfSCCode : ${sbiBank.bankBranchCode},bank BranchCode : ${sbiBank.bankBranchCode}`);

const mahBank= new Bank("Maharashtra Bank","Pune","MAH117756",885570);
console.log(`bank Name : ${mahBank.bankName},bank Location : ${mahBank.bankLocation},bank IfSCCode : ${mahBank.bankIfSCCode},bank BranchCode : ${mahBank.bankBranchCode}`);

const axisBank= new Bank("Axis Bank","Mumbai","Axis334456",771527);
console.log(`bank Name : ${axisBank.bankName},bank Location : ${axisBank.bankLocation},bank IfSCCode : ${axisBank.bankIfSCCode},bank BranchCode : ${axisBank.bankBranchCode}`);


console.log(`===========step2==========`);

Bank.prototype.openTime="9 AM IST";
Bank.prototype.closeTime="6 PM IST";
console.log(`Please Visit Our Bank ${sbiBank.bankName} Between  the Time:: ${sbiBank.openTime} & ${sbiBank.closeTime} `);
console.log(`Please Visit Our Bank ${axisBank.bankName} Between  the Time :: ${axisBank.openTime} & ${axisBank.closeTime} `);
// console.log(`Please Visit Our Bank ${yesBank.bankName} Having Branch Code : ${yesBank.branchCode} At::${yesBank.openTime}`);

console.log(`Please Visit Our ${yesBank.bankName} Having Branch Code : ${yesBank.bankBranchCode} At ===>>${yesBank.openTime}`);