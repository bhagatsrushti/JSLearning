class Person {

    // // properties
    // firstName
    // lastName
    // city
    // graduation
    // constructor
    constructor(firstName, lastName, city, graduation){
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.graduation = graduation;
    }
       // methods
       details(){
        console.log(`Details: ${this.firstName}, ${this.lastName}, ${this.city}, ${this.graduation}`);
    }
}

 const personElon = new Person('Elon', "Musk", 'Austin' ,"MSC Physics");
 console.log(personElon);
 console.log(`Elon Details: ${personElon.firstName},  ${personElon.lastName}, ${personElon.city}, ${personElon.graduation} `);


 const personStew = new Person('Stew', "Job", 'San Francisco', 'Dropout');
 console.log(personStew);
 

 const personBill = new Person('Bill', "Gates", 'San Francisco', 'Dropout');
 console.log(personBill);


 const personRatanSir = new Person('Ratan', "Tata", 'Mumbai', 'Architecture');
 console.log(personRatanSir);

 console.log(`===========================`);
 const   arrayPerson = [personElon,personStew,personBill,personRatanSir];
for (const element of arrayPerson) {
    console.log(element);
}
// console.log(axisBank instanceof Bank);

