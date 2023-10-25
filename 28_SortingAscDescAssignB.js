

console.log(`**************28_SortingAscDescAssignB.js*************`);
class employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil=new employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new employee(88,"Viny","IT",75000,"TCS");
const emp_mahi=new employee(99,"Mahi","HR",85000,"Infy");
let arrayEmployee=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]
const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`========Step1 //Descending order================`);
console.log(`__1.Sort the 'arrayEmployees' in descending order of Employee id's and log employee details are ID,Name,Department`);
console.log(`Given information Employees are :`);
const emp_ids = arrayEmployee.sort((emp1,emp2)=>{
return emp1.emp_id > emp2.emp_id ? -1 : 1 ;
arrayEmployee.forEach(employee => {
    console.log(`ID: ${employee.emp_id},Name:${employee.emp_name}`);
});
})
emp_ids.map((employee)=>{
   console.log(`Employee Id : ${employee.emp_id}, Employee Name : ${employee.emp_name}, Employee Department : ${employee.emp_dept}`);
} );

console.log(`______________________________________________________________________________________________________________________________________`);

console.log(`========Step2 //Ascending Order================`);
console.log(`__2.Sort the 'arrayEmployees' in ascending order of Employee department & log ID,dept & Company`);
console.log(`Given information Employees are :`);

const emp_dept = arrayEmployees.sort( (emp1,emp2) => {
    return emp1.emp_dept > emp2.emp_dept ? 1 : -1 ;
} );
emp_dept.map((employee)=>{
   console.log(` Employee Id : ${employee.emp_id}, Employee Department : ${employee.emp_dept}, Employee company : ${employee.emp_company}`);
});
console.log(`______________________________________________________________________________________________________________________________________`);
console.log(`========Step3 //descending Order for salary================`);
console.log(`__3.Sort the employee array in "descending" order of Employee salary and log Name , Salary & Company`);
console.log(`Given information Employees are :`);
const emp_salary = arrayEmployees.sort((emp1,emp2)=>{
return emp1.emp_salary > emp2.emp_salary ? -1 : 1 ;
});
emp_salary.map((employee)=>{
console.log(`Employee Name : ${employee.emp_name}, Employee Salary: ${employee.emp_salary},Company Name : ${employee.emp_company}`);
});

console.log(`______________________________________________________________________________________________________________________________________`);