



const array = [4,5,3,2,7] //[16,25,9,4,49]

//multiplication transform
const arrayTransform = array.map((currentValue)=>{ 
    return currentValue*currentValue;
});
console.log(arrayTransform);


// const transformArray = [];
// array.forEach( (element)=>{
//     transformArray.push(element*element);
// });
// console.log(transformArray)


const arrayNum = [4, 5, 3, 2, 7];
const newArray = arrayNum.map((currentValue,index)=>{
return currentValue + index;
});
console.log(newArray);



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

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi];
const arrayEmpNames = arrayEmployees.map( (employee)=> {
    return employee.emp_name;
} );
console.log(arrayEmpNames);


//Give me the salary list of tcs


//Give me the list Infy employee names
