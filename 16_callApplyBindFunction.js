
console.log(`=======CallFunction============`);
const person = {
    name : "Elon Musk",
    age : 54,
    totalCompany : 9
}
function show(greet) {
    console.log(`Inside show function ...`);
    console.log(greet);
    console.log(this.name, this.age);  
}
show.call(person, 'Good Morning'); //call method



// we can pass argument in array apply method 
console.log(`=======ApplyFunction============`);
function details(sonName,wifeName) {
    console.log(this.name,this.age);
    console.log(`Son name : ${sonName}, wife Name : ${wifeName}`); 
}
details.apply(person,['X','Jenny']);




console.log(`=======BindFunction()============`);
//call function with argument

const stewPerson = {
    name : "Stew jobs",
    age : 54,
    companyName : 'Apple'
}
function productsDetails(iphone,laptop) {
    console.log(this.name, this.companyName);
    console.log(`Iphone: ${iphone}, laptop: ${laptop}`);
}
 const newFunction = productsDetails.bind(stewPerson); //bind method
 newFunction('iphone 15', 'MacBook M2');