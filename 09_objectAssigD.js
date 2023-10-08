let professor={
    name : 'prof.Sharma',
    collegeName: 'Sinhgad Institute Of management and computer application',
    Designation:  'Head of department',
    Subject : 'Java',
    age : 40,
    degrees : {
        management:'master in computer application',
        engineering :'CSC',
        PHD :'Adv Computing',
        certificates : ['Hacker Rank Participation', 'Certification in IFE course', 'Certificate in Adv Programming','Certification in nasscom']
    }
}
console.log(`Total objects are :`);
console.log(professor);
console.log(`====*====*====*===*===*===*===*====*====*====*====*=====*====*====*===*====*========*====*=====*======*=====*=====*======*=======*=====`);
console.log(`Added new property Total Experience :`);
professor.totalExperience ="14 years";

console.log(professor);
console.log(`==*==*=====*=====*======*======*======*=====*=====*=====*=======*======*=====*=====*====*=====*======*======*=====*=====*====*======`);
console.log(`Modified existing property age 40 :`);
professor.age=40;
console.log(professor.age);

console.log(`==*===*===*==*===*===*===*====*======*=====*====*====*===*=====*====*====*======*=====*===*===*===*====*=====*===*===*===*===*===*===*====*==`);
console.log(`Added new certificate in the array at end "Oracle Certificate"===`);
professor.degrees.certificates.push("Oracle Certificate");
console.log(professor.degrees.certificates);

console.log(`===*===*===*===*===*===*===*===*===*===*===*===*===*===**===*====*===*===*===*===*===*====*===*=====*====*====*===*===*===*===*===*===*===*===*===*`);
console.log(`Last element of array certificates :`);
 let lastElement =professor.degrees.certificates[professor.degrees.certificates.length-1];
console.log(lastElement);


console.log(`===*======*======*======*=====*=====*======*=====*====*======*====*=====*======*====*======*======*====*======*====*======*========`);
console.log(`Complete objects are :`);
console.log(professor);
console.log(professor.degrees);

console.log(professor.degrees.certificates);
console.log(`====*======*=======*====*=====*=====*======*======*=====*===*=====*======*=======*======*======*=====*=======*======*=======*=====`);
console.log(`========== traversing array ===========`);
for (const certificates of professor.degrees.certificates) {
    console.log(certificates);
}