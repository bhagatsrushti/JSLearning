let person={
    name:"Jenny",
    age : 22,
    isMarried:true,
    city:"pune"
}

//object methods
const keys = Object.keys(person);
console.log(keys);(person)

const values = Object.values(person)
console.log(values);
console.log(typeof person);


// const valueArray = ['name','age','isMarried','city']
// valueArray.splice(2,1, "graduation");  //replace name
// console.log(valueArray);


const entry = Object.entries(person);
console.log(entry);

entry[0];

const array0th = entry[0]; //how access array element
console.log(array0th);

for (const element of  entry) {
    console.log(element[0],element[1]); //nested array
}

console.log(`traversing of an object`);
for (const key in person) {
  console.log(key,person[key]);
}
const isNameAvailable =  'name' in person;
console.log(isNameAvailable);

const isPinAvailable = 'pin' in person;
console.log(isPinAvailable); 

//one reference variable cant point
let personJenny={
    name:"Jenny",
    age : 22,
    isMarried:true,
    city:"pune"
}
personJenny.age = 25;
console.log(personJenny);

// personJenny= {};//constant value which is not allowed
// const city = "Pune";
// city = "Mumbai";  

//freeze object
Object.freeze(personJenny);
personJenny.city = "Lucknow";
console.log(personJenny);


//object assigned
console.log(`object.assigned()`);
let elon ={
    name:"elon",
    age : 54,
    isMarried:true,
    city:"USA"
}
 const elonClone = Object.assign({},elon) //step5 sbidetails
 console.log(elonClone);

// let n1=100;
// let n2=200;
// n1 = n2;
// n1=600;

//conacate assign merge method
console.log(`merging an object`);
let stew ={
    name:"elon",
    age : 54,
    isMarried:true,
    city:"USA"
}
const address ={
    pin: 234567,
    city:"Austin Texas"
}
Object.assign(stew,address);
console.table(stew);