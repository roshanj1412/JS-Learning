let person={
    name:"Roshan",
    age:22,
    isMarried:false,
    city:"Jalgoan",

}

const keys=Object.keys(person);
console.log(keys);
const values=Object.values(person);
console.log(values);
// const valueArray = ['name', 'age', 'isMarried', 'city']
// valueArray.splice(2,1,"Graduation");
// console.log(valueArray);

const entry=Object.entries(person);
console.log(entry);

const array0th=entry[0];
console.log(array0th);

for (const element of entry) {
    console.log(element);
}

console.log(`Traversing of an object `);

for (const key in person) {
    console.log(key,person[key]);
}

const isNameAvailable='name' in person;
console.log(isNameAvailable);

const isPinAvailable='pin' in person;
console.log(isPinAvailable);

console.log(`Object Cloning`);
let elon={
    name:'Elon',
    age:54,
    isMarried:true,
    country:'USA'
}

const elonClone=Object.assign({},elon);

console.log(elonClone);

console.log(`Object Merging`);
const address={
    pin:292929,
    city:"Austin Texas"
}

let stew={
    name:'Elon',
    age:54,
    isMarried:true,
    country:'USA'
}

Object.assign(stew,address);
console.log(stew);