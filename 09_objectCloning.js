let firstName = "Gajanan";
let lastName = "Kharat";
let myName = firstName; // Deep Clone

console.log(myName);
firstName = 'GK';
console.log(myName);
myName = 'Ganesh';

let person = {
    name: 'Elon',
    city: 'Pune',
    isMarried : true
}
let elonPerson = {
    country: "USA"
}
elonPerson = person; // Shallow clone

elonPerson.city= "Mumbai";
console.log(elonPerson.city); // 
console.log(person.city);

let stdNagesh ={
    name:'Nagesh',
    age:22,
    graduation:"BE - Computer Science"
}

let stdGanesh = {...stdNagesh}; //Deep clone using spread operator
stdGanesh.name = "Ganesh";

console.log(stdGanesh.name);
console.log(stdNagesh.name);



let stdJenny ={
    name:'Jenny',
    age:22,
    gender : "Female",
    //nested object 
    marks :{
        computer : 96,
        math : 70,
        english : 56
    }
}

//let stdBill = stdJenny; //shallow = 
//let stdBill = {...stdJenny}; //deep clone spread operator
let stdBill = JSON.parse(JSON.stringify(stdJenny)) //deep clone with when we have nested object
stdBill.name = "Billgates";
console.log(stdJenny.name);