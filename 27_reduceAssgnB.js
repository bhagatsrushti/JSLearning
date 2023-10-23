console.log(`*******27_ReduceAssignB.js********`);
console.log(`===================Step1=======================`);
class Employee{

    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
this.emp_id=emp_id;
this.emp_name=emp_name;
this.emp_dept=emp_dept;
this.emp_salary=emp_salary;
this.emp_company=emp_company;


    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");


const arrayPerson = [emp_anil, emp_radha, emp_rishi, emp_sonali,emp_monika,emp_viny,emp_mahi];
const arrayWipro=arrayPerson.filter((value)=>{
    return value.emp_company=="Wipro";
})
const arrayWipro1=arrayWipro.map((value0)=>{
    return value0.emp_name
})


console.log(`Employee Which Are Working In Wipro : ${arrayWipro1}`);
console.log(`=========================Step2=====================`);
const arrayDept= arrayPerson.filter((value1)=>{
    return value1.emp_dept=="IT" || value1.emp_dept=="HR"
})
const arrayDept1=arrayDept.map((value1)=>{
    return value1.emp_name
})

console.log(`Employee Which Are Working In "IT" or "HR" : ${arrayDept1}`);
console.log(`=========================Step3=====================`);
const arrayGreater50=arrayPerson.filter((value2)=>{
    return value2.emp_id>50;
})
const arrayGreater=arrayGreater50.map((value2)=>{
    return value2.emp_name;
})
console.log(`Employee Who"s ID Are Greater than "50" : ${arrayGreater}`);
console.log(`=========================Step4========================`);
const arrayName=arrayPerson.filter((value)=>{
    return value.emp_name.startsWith("A") || value.emp_name.startsWith("V")|| value.emp_name.startsWith("M");
})
const arrayName1=arrayName.map((value3)=>{
    return value3.emp_name;
})
console.log(`Employee Name Starts With "A" , "V" , "M" :${arrayName1}`);
console.log(`=========================Step5==========================`);
const arraySalary=arrayPerson.filter((element)=>{
    return element.emp_salary
})
const arraySalary1=arraySalary.map((element)=>{
    return element.emp_salary
})

const arraySalary2=arraySalary1.reduce((startElement,element)=>{
    return startElement+element
})
console.log(`Total Salary From All Dept : ${arraySalary2}`);
let avgSalaray=arraySalary2/arraySalary1.length;
console.log(`Average Salary Of All Department : ${avgSalaray}`);
console.log(`=========================Step6===========================`);
const itSalaray=arrayPerson.filter((output)=>{
    return output.emp_dept=="IT"
})
const itSalaray1=itSalaray.map((output1)=>{
    return output1.emp_salary
})
const itSalary2=itSalaray1.reduce((initialValue,output2)=>{
    return initialValue+output2;
})
console.log(`Total Salary From IT Department :${itSalary2}`);
let avgResult=itSalary2/itSalaray1.length;
console.log(`Average Salaray Of IT Department : ${avgResult}`);
