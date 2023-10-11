




function Bank(bankName,city,pin){
this.bankName = bankName;
this.city = city;
this.pin = pin;
this.show =function() {
    console.log(`Bank Details is:${this.bankName}${this.city}`);
}
}
 const sbiBank=new Bank(`SBI`,'Pune',112233);
 console.log(sbiBank);
 console.log(sbiBank.bankName,sbiBank.city,sbiBank.pin);

 const axisBank = new Bank('Axis','Mumbai',445566);
 console.log(axisBank);

 
 const hdfcBank = new Bank('HDFC','Banglore',889977);
 console.log(hdfcBank);

 Bank.prototype.country = "Bharat";
 console.log(axisBank);
 console.log(hdfcBank);
 console.log(hdfcBank.country);

 sbiBank.show();
 axisBank.show();