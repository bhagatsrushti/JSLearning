
let person = {
    name: "Jenny",
    age : 22,
    isMarried: true,
    city:"Pune",
    pin:445304
};
//  const name = person.name;
//  const age = person.age;
//  const isMarried = person.isMarried;
//  const city= person.city;
//this is object destructuring
console.log(`========this is object destructuring===========`);
//  let {name,age,isMarried,city} = person;
//  console.log(name,age,isMarried,city);

 //destructuring with default value
 console.log(`===destructuring with default value========`);
 let {name,age,isMarried,city , country ="Bharat"} = person;
 console.log(name,age,isMarried,city,country);



 const array = ['Mona', 'Sona', 'Tona', 'Bawa'];
 let [element1, element2, element3, element4, element5='Khona']= array;
 console.log(element1, element2, element3, element4, element5);