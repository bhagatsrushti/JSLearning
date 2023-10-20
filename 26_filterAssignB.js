console.log(`******26_filterAssignB.js**********`);

console.log(`=========Step1===========`);
//find out all the employee from 'TCS' using filter() , 
//and then from the final array result traverse it and log compony name & Employee name 
class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary =emp_salary;
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
  
  const arrayEmployees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monica,emp_viny,emp_mahi];

  const tcsEmployee=arrayEmployees.filter((employee)=>{
    return employee.emp_company=='TCS';
      })
      const tcsEmpName=tcsEmployee.map((emp)=>{
        return (emp.emp_name );
       });
       console.log(`Employee Names given are : ${tcsEmpName}`);
       console.log(`________________________________________________________________________________________________________________`);
       console.log(`=========Step2===========`);
//Average salary of wipro compony emp
       const wiproEmployee=arrayEmployees.filter((employee)=>{
        return employee.emp_company=='Wipro';
          })
          let totalSalary=0;
          const wiproEmpsalary=wiproEmployee.map((emp)=>{
            totalSalary=totalSalary+ emp.emp_salary;
            return (totalSalary);
           });
           console.log(`Wipro Employee Average Salary Given  are: ${totalSalary/wiproEmpsalary.length}`);
           console.log(`_______________________________________________________________________________________________________________`);
           console.log(`=========Step3===========`);
//Average salary of wipro compony emp
const wiproInfyEmployee=arrayEmployees.filter((employee)=>{
    return (employee.emp_company=='Wipro'||employee.emp_company=='Infy');
      })
      let totalSalaryWipInfy=0;
      const wiproInfyEmpsalary=wiproInfyEmployee.map((emp)=>{
        totalSalaryWipInfy=totalSalaryWipInfy+ emp.emp_salary;
        return (totalSalaryWipInfy);
       });
       console.log(`Wipro or Infy Employee Average Salary given are  : ${totalSalaryWipInfy/wiproInfyEmpsalary.length}`);
       console.log(`_______________________________________________________________________________________________________________`);