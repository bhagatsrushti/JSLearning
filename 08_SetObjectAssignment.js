
console.log(`*****08_setObjectAssignment1.js******`);



class Bank{
    constructor( bank_Name,location,account_no,ifac,interest_rate ){
        this.bank_Name=bank_Name;
        this.location=location;
        this.account_no=account_no;
        this.ifac=ifac;
        this.interest_rate=interest_rate;

    }
}

let arraybank =new Bank('Axis bank','pune');
console.log(`bank_Name==>${arraybank.bank_Name} ,location : ${arraybank.location}`);

let arraybank2=new Bank('HDFC bank','mumbai');

console.log(`bank_Name :: ${arraybank2.bank_Name} ,location : ${arraybank2.location}`);

let arraybank3=new Bank('panjab bank','delhi');
console.log(`bank_name :: ${arraybank3.bank_Name} , location : ${arraybank3.location}`);

let arraybank4=new Bank('kotak bank','jalgao');
console.log(`bank_name :: ${arraybank4.bank_Name} ,location : ${arraybank4.location}`);
let arraybank5=new Bank ('icic bank','dhule');
console.log(`bank_name :: ${arraybank5.bank_Name} ,location : ${arraybank5.location}`);