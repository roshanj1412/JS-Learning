const stringPerson=`{
    "name":"Aleix Melon",
    "id":"E00245",
    "role":["DEV","DBA"],
    "age":23,
    "doj":"11-12-2019",
    "married":false,
    "address":{
        "street":"32, Laham St.",
        "city":"Innsbruck",
        "country":"Austria"
    },
    "referred-by":"E0012"  
}`

const alex=JSON.parse(stringPerson);
// console.log(typeof alex);
// console.log(alex);
// console.log(stringPerson);
// console.log(typeof stringPerson);
console.log(`Role:${alex.role[0]}`);
const nameArray=alex.name.split(" ");
console.log(nameArray[1]);
const dojArray=alex.doj.split("-");
console.log(dojArray[2]);
