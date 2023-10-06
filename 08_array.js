


var arrayNumber=[22,11,44,55,77,33];
console.log(`==============Slice()=========`);
const arraySliced=arrayNumber.slice(1,4);
console.log(arraySliced);

console.log(`==============splice()=========`);

var arrayNumber=[22,11,44,55,77,33];
var arraySplice=arrayNumber.splice(4);
console.log(arrayNumber);
console.log(arraySplice);

console.log(`==============splice() to remove elements with index and delete count=========`);
var arrayNumber=[22,11,44,55,77,33];
var removedEle=arrayNumber.splice(2,2);
console.log(arrayNumber);
console.log(removedEle);

console.log(`==============splice() insert element=========`);

var arrayNumber=[22,11,44,55,77,33];
//Insert element 99 at 2 position
arrayNumber.splice(2,0,99);
console.log(arrayNumber);

//Insert element 100,200,400 at 3 position
var arrayNumber=[22,11,44,55,77,33];

arrayNumber.splice(3,0,100,200,400)

console.log(`Insert element 100,200,400 at index 3 at the time of insertion don't replace`);
console.log(arrayNumber);

console.log(`Insert an element 500 at index 2 by replacing an element and `);
var arrayNumber=[22,11,44,55,77,33];
console.log(arrayNumber);
arrayNumber.splice(2,1,500);
console.log(arrayNumber);

console.log(`Insert an element 700  at index 3 by replacing 2 element `);
var arrayNumber=[22,11,44,55,77,33];

arrayNumber.splice(3,2,700);
console.log(arrayNumber);

console.log(`for in loop`);
var arrayNumber=[22,11,44,55,77,33];

for (const key in arrayNumber) {
    // if (Object.hasOwnProperty.call(arrayNumber, key)) {
    //    const element = arrayNumber[key];
     
    // }

    const element=arrayNumber[key];
    console.log(key,element);
}

var arrayNumber=[22,11,44,55,77,33];

for (const index in arrayNumber) {
    // if (Object.hasOwnProperty.call(arrayNumber, key)) {
    //    const element = arrayNumber[key];
     
    // }

    const element=arrayNumber[index];
    console.log(`Index:${index},value:${element}`);
}
console.log(`==============Traversing array using while loop============`);
var arrayNumber=[22,11,44,55,77,33];
//let index=0;
while (index<arrayNumber.length) {
    console.log(arrayNumber[index]);
    index++;
}
console.log('=============(do while loop)===========');
var arrayNumber=[22,11,44,55,77,33];

  var index=1;
do {
    console.log(arrayNumber[index]);
    index++;
} while (index<arrayNumber.length);

// MERN Developer - M: Mongo db, E: Express JS, R: Rect, N: NodeJS
// MEAN Developer - M: Mongo db, E: Express JS, A: Rect, N: NodeJS
var arrayNumber = [22, 11, 44, 55, 77, 33];
console.log(`for of loop`);
for (const element of arrayNumber) {
    console.log(element);
}

console.log('Join Method');
const joinElement=arrayNumber.join("_");
console.log(joinElement);

console.log('Resizing an array');
var arrayNumber = [22, 11, 44, 55, 77, 33];
arrayNumber.length=3;
console.log(arrayNumber);
