


//Object creation using object literals

let person = {
    name: "jenny",
     age: 22,
    isMarried:true,
    show : function () {
        console.log(`hi Hello, How are you ??`);
        
    }
};
console.log(typeof person);
console.log(person);


//Property access
//1.Dot notation
let personName = person.name;
console.log(`Person name is : ${personName}`);
console.log(`person age is :${person.age}`);

//1.[] Notation
let nameOfPerson = person["name"]
console.log(`Person name is : ${nameOfPerson}`);

//Adding property in object
console.log(`Adding property in object`);
person.city = "Pune";
console.log(person);
console.table(person);

console.log(`Update property in object`);
person.age = 20;
console.log(person);

console.log(`delete property in object`);
delete person.age;
console.log(person);

console.log(`Adding method in object`);
person.show()
person.display = function () {
    console.log(`I am  inside  display in function`);
}
console.log(person);
person.display();

//nested object
console.log(`****Nested Object****`);
const personElon = {
    name: "Elon Musk",
    age : 54,
   totalCompany: 9,
companies : {
   Tesla:{
    companyName :"Tesla",
    totalEmployees:4500,
    location:"USA"
   },
   twitter:"150B USD",
   spacex:"200B USD"
},
kidsName:["Denny","Wenny","Ronny","Randy","sony"]

}
console.log(personElon.companies.Tesla);

console.log(personElon.kidsName[0]); //array index
console.log(personElon.kidsName.length);

//"stew"
personElon.kidsName.push("stew");

for (const kid of personElon.kidsName) {
    
}
console.log(personElon.companies.Tesla.location);