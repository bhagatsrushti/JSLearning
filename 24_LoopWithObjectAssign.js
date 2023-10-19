


class Employee {
   emp_id
   emp_name
   emp_dept
   emp_salary
   emp_compony
   constructor(emp_id,emp_name,emp_dept,emp_salary,emp_salary,emp_compony){
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_compony = emp_compony;

   }
}
const emp_anil = new Employee(22,"Anil","IT",50000,'TCS' );
const emp_radha = new Employee(22,"Radha","HR",74000,'Wipro' );

const arrayEmployee =[emp_anil , emp_radha];
