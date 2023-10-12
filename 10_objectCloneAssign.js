console.log(`*****10_objectCloneAssignment.js*****`);


//Create an object using literals namely→ personalDetails with your actual detail.
// console.log(`=======step1 PersonalDetails ==============`);
const personalDetails={
    firstName: "Srushti",
    lastName:"Bhagat",
    graduation:"MCA",
    city: "Pune"
}

//Create an object using literals → collegeDetails with your college details
// console.log(`=======step2 college Details==============`);
const collegeDetails={
    name: "Sinhgad Institute(SIMCA)",
    city: "Pune",
    noOfDepartments:10,
    university:"Savitribai Phule Pune University",
}

//3. Merge these two objects and log details on console with meaning message.
// console.log(`=======step3 merge two object==============`);
let mergedObject=Object.assign(personalDetails,collegeDetails);
console.table(mergedObject);

// 4. Create an array of your friend names and freeze it.
// console.log(`=======step4 freezed==============`);
let friends=["Jenny","steve","Bill","Elon"];

// 5. Iterate step 4 array using for of loop and log friend names on console
for (const names of friends) {
    console.log(`${names}`);
}
// 6. Given a string company = “Codemind Technology”;
// console.log(`=======step5 string==============`);
// a. Write a code to reverse only word → Technology
// b. Expected output → “ ygolonhceT” 
let company = "Codemind Technology";
console.log(`Given String is ${company}`);
let reverse="";
for (let index =company.length-1 ; index >0; index--) {

    let char=company.charAt(index);
   // console.log(char);
    if(char!=" "){
        reverse=reverse+char;  
    }
    else
     break;
}
console.log(`The Result String is  Given :${reverse}`);