// const array =[11,22,33,44,33,66,11];
// console.log(`Remove duplicate elements`);

// const uniqueArray=array.filter((currentValue,index)=>{
//     return array.indexOf(currentValue)===index;
// });
// console.log(uniqueArray);
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
// const arrayEmpNames = arrayEmployees.map( (employee)=> {
//     return employee.emp_name;
// } );
// console.log(arrayEmpNames);

// arrayTcsEmployee=arrayEmployees.filter( (employee)=>{
//     return employee.emp_company === "TCS";
// });
// console.log(arrayTcsEmployee);

// const arrayTcsSalary=arrayTcsEmployee.map((employee)=>{
//     return employee.emp_salary;
// }
// )
// console.log(arrayTcsSalary);

 console.log(`(01==>) Get the list of all employees salary list `);
const employeeSalary=arrayEmployees.map( (employee)=>{
    return employee.emp_salary;

});

 console.log(employeeSalary);
console.log(`(02==>) List of all departments`);
 const departments=arrayEmployees.map((employee)=>{
    return employee.emp_dept;
 });

console.log(departments);

console.log(`(03==>) List of employee ids `);
const employeeIds=arrayEmployees.map((employee)=>{
    return employee.emp_id;
}); 
console.log(employeeIds);
