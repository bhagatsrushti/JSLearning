

console.log(`-*******08_MapObjectAssignment-02*********`);

console.log(`========Step1-A==============`);
class Bank {
    constructor(bankName, location, accountNo, IfscCode, interestRate) {
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.IfscCode = IfscCode;
        this.interestRate = interestRate;
    }
}


// console.log(`========Step2-B==============`);
const axisBank = new Bank("Axis Bank", "New York", "12345678", "AXIS1234", "10%");

const bankMap1 = new Map();
bankMap1.set(axisBank.accountNo, axisBank);

console.log(bankMap1);

for (const [accountNo, bankObject] of bankMap1) {
    console.log(`Account Number: ${accountNo}`);
    console.log(`Bank Name: ${bankObject.bankName}`);
    console.log(`Location: ${bankObject.location}`);
    console.log(`IFSC code: ${bankObject.IfscCode}`);
    console.log(`Interest Rate: ${bankObject.interestRate}`);
    console.log(`========Step2-B==============`);
}
const kotakBank = new Bank("kotak Bank","pune","3216544","1236547","12%")

const bankMap2 = new Map();
bankMap2.set(kotakBank.accountNo,kotakBank);
console.log(bankMap2);

for (const [accountNo, bankObject] of bankMap2) {
    console.log(`Account Number: ${accountNo}`);
    console.log(`Bank Name:${bankObject.bankname}`);
    console.log(`Location:${bankObject.location}`);
    console.log(`IFSC:${bankObject.ifsc}`);
    console.log(`Interrest Rate:${bankObject.interestRate}`);
}
console.log(`========Step3-C==============`);
const icicBank = new Bank ("icic Bank","mumbai","6541237","7539514","9%");
const bankMap3 = new Map();
bankMap3.set(icicBank.accountNo,icicBank);
console.log(bankMap3);

for (const [accountNo, bankObject] of bankMap3) {
    console.log(`Account Number: ${accountNo}`);
    console.log(`Bank Name:${bankObject.bankname}`);
    console.log(`Location:${bankObject.location}`);
    console.log(`IFSC:${bankObject.ifsc}`);
    console.log(`Interrest Rate:${bankObject.interestRate}`);
}