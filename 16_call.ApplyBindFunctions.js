console.log(`=========call() function=========`);
const person={
    name:"Elon Musk",
    age:54,
    totalCompany:9
}
// console.log(person);
function show(greet) {
    console.log(`Inside show function`); 
    console.log(greet);
    console.log(this.name,this.age);  
}
show.call(person,'Good Morning');

console.log(`=========apply() function=========`);

function details(sonName,wifeName) {
   console.log(this.name,this.age);
   console.log(`Sun name:${sonName} ,Wife name:${wifeName}`); 
}
details.apply(person,["X",'Jenny'])

console.log(`=========bind() function=========`);

const stewPerson={
    name:"Stew Jobs",
    age:54,
    companyName:'Apple'
}

function productsDetails(iphone,laptop) {
    console.log(this.name,this.age);
    console.log(`Iphone:${iphone} ,Laptop:${laptop}`); 
 }

 const newFunction=productsDetails.bind(stewPerson);
 newFunction('iPhone 15','Mac book 2');