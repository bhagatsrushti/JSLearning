console.log(`******25_mapMethodAssignB.js**********`);

console.log(`=========Step1===========`);
//add all employee objects inside array 
//1.Get the list of all employee salary & log new array console
//2.get list of departments & log on console
//3.get list of employee id& log on console

    class Employee {
        constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
            this.emp_id = emp_id;
            this.emp_name = emp_name;
            this.emp_dept = emp_dept;
            this.emp_salary = emp_salary;
            this.emp_company = emp_company;
        }
    }
    const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
    const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
    const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
    const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
    const emp_monica = new Employee(77, "Monica", "IT", 40000, "Wipro");
    const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
    const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
    
    const  employeeArray = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi];

  const employeeSalary =  employeeArray.map((currentValue,index)=>{
    return currentValue.emp_salary;
  });
  console.log(`Employees Salaries given are :`);
console.log( employeeSalary);
console.log(`___________________________________________________________________________________________________________`);

console.log(`=========Step2===========`);
const departments =  employeeArray.map((currentValue,index)=>{
    return currentValue.emp_dept;
  });
  console.log(`Employees Given departments are :`);
console.log( departments);
console.log(`___________________________________________________________________________________________________________`);


console.log(`=========Step3===========`);
const employeesId =  employeeArray.map((currentValue,index)=>{
    return currentValue.emp_id;
  });
  console.log(`Employees given  Ids are :`);
console.log( employeesId);
console.log(`___________________________________________________________________________________________________________`);
