// console.log(`=======Object destructuring======`);
// let person={
//     name:"Jenny",
//     age:22,
//     isMarried:false,
//     city:"London",
//     pin:22222
// };
// // const name=person.name;
// // const age=person.age;
// // const isMarried=person.isMarried;
// // const city=person.city;
// console.log(`Object destructuring without default value`);
// // let {name,age,isMarried,city}=person;
// console.log(`Object destructuring without default value`);
//  let {name,age,isMarried,city="Pune",country='America'}=person;

// console.log(name,age,isMarried,city,country);

// console.log(`=======Array destructuring======`);

// const array=['Jayesh','Gaurav','Sunil','Shekhar'];

// let [element1,element2,element3,element4,element5="Narendra"]=array;
// console.log(element1,element2,element3,element4,element5);class Employee {


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

arrayTcsEmployee=arrayEmployees.filter( (employee)=>{
    return employee.emp_company === "TCS";
});
console.log(arrayTcsEmployee);

const arrayTcsSalary=arrayTcsEmployee.map((employee)=>{
    return employee.emp_salary;
}
)
console.log(arrayTcsSalary);