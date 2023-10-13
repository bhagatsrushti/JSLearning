console.log(`***14_jsonAssign.js*****`);
console.log(`=======step1========`);
const stringGiven=`{
    "name":"Aleix Melon",
    "id":"E00245",
    "role":["Dev","DBA"],
    "age":23,
    "doj":"11-12-2019",
    "married":false,
    "address":{
        "street": "32, Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by":"E0012"
}`
console.log(`=======step2========`);
const personalDetail = JSON.parse(stringGiven);

console.log(`Converted Given Detail  Into Object :`);
console.table(personalDetail);
console.log(`Type Of After Converting Into Object : ${typeof personalDetail}`);

console.log(`========step3=========`);
let role=personalDetail.role[0];
console.log(`logging word dev from role array : ${role}`);

console.log(`========step4==========`);
let lastName=personalDetail.name.split(" ");
console.log(`Logged Only Last Name From Name By Using Split Method :  ${lastName[1]} `);

console.log(`=======step5===========`);
 const date = new Date(personalDetail.doj);
console.log(`Logged Only Joining Year Of Employee : ${date.getFullYear()}`);