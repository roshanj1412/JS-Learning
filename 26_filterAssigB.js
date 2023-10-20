console.log(`26_filterAssigB.js`);

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

console.log(`(01==>)Company Name and Employee Name`);
const arrayCompanyNameAndEmployeeName=arrayEmployees.filter( (employee)=>{
    return employee;
}).map((employee)=>{
    return{
        emp_company:employee.emp_company,
        emp_name:employee.emp_name
     }
}
);
console.log(arrayCompanyNameAndEmployeeName);



const salWipro=arrayEmployees.filter((employee)=>{
    return employee.emp_company=="Wipro";
    
}).map((employee)=>{
     return employee.emp_salary;

});
//console.log(avgSalWipro);

//console.log(typeof salWipro);
var sum=0;
arrayLength=salWipro.length;

for (const element of salWipro) {
    sum=sum + element;

    
}
const wiproSalAvg=sum/arrayLength;
console.log(`(02==>)Average salary of employee from company Wipro:${wiproSalAvg}`);

const wiproAndInfyEmpList=arrayEmployees.filter((employee)=>{
    return employee.emp_company=="Wipro" || employee.emp_company=="Infy";
}).map((employee)=>{
    return employee.emp_salary;
});
//console.log(wiproAndInfyEmpList);
var sum=0;
for (const element of wiproAndInfyEmpList) {
    sum=sum+element;
}
//console.log(sum);
console.log(`(03==>)Average employee salary from companies wipro and infy:${sum/wiproAndInfyEmpList.length}`);