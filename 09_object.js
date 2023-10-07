
console.log(`========Object creation using literal========`);
let person ={
    name: 'Roshan',
    age:25,
    isMarried: false,
    show: function() {
        console.log(`Hii Hello ,How are you ?`);
    }

};

console.log(person);
console.log(typeof person);

console.log(`=========Property Access:-1)Dot Notation=========`);
let personName=person.name;
console.log(`Person Name is :${personName}`);
console.log(`Person Age is:-${person.age}`);

console.log(`2) [] -Notation`);
let personAge=person["age"];
console.log(`Person Age is:${personAge}`);

console.log(`====Adding property in Object==========`);
person.city="Pune";
console.log(person);

console.table(person)


console.log(`===Updating Property=====`);

person.age=20;
console.log(person);

console.log(`=========Delete Property From Object======`);
delete person.age;
console.log(person);


console.log(`=======Calling function of Object=========`);
person.show();

console.log(`===========Adding Function=========`);
person.show1=function(){
    console.log(`I am Fine`);
}

console.log(person);

person.show1()

console.log(person);

console.log(`=====Nested Object==========`);
const personElon ={
    name:"Elon Musk",
    age: 54,
    totalCompany:9,
    //Nested Array(Object Inside Object)
    companies:{
        tesla:{
            companyName:"Tesla",
            totalEmployees: 4500,
            location: "USA",
        },
        twitter:"150B USD",
        spaceX:"200B USD"
    },
    //Array Inside Object
    kidsName:["Denny","Wenny","Rony","Randy"],

}
console.log(personElon.companies.tesla);

console.log(personElon.kidsName[0]);

console.log(personElon.kidsName.length);

personElon.kidsName.push("Stew");
console.log(personElon);

for(const kid of personElon.kidsName ){
    console.log(kid);
}

console.log(personElon.companies.tesla.location);