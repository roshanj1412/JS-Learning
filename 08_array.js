
var array=[10,20,30,40,50];
console.log(typeof array);

console.log(array);
console.log(`The elements in the array is:${array.length}`);

console.log(`========Accessing or Updating array element==============`);

let element0thIndex=array[0];
console.log(element0thIndex);

let element2thIndex=array[1];
console.log(element2thIndex);

let elementAtLast=array[array.length-1];
console.log(elementAtLast);

console.log(`=========Update an Element=========`);
array[1]=70;
console.log(array);

console.log(`======== indexOf()==============`);
console.log(array.indexOf(50));

console.log(`=========Traversing an array==========`);
let arrayNum=[22,11,44,55,77];
for (let index = 0; index < array.length; index++) {
    const element=arrayNum[index];
    console.log(element);

}

console.log(`=========Traversing an array in reverse order==========`);
let arrayNum1=[22,11,44,55,77];
for (let index = arrayNum1.length-1; index >=0; index--) {
    const element=arrayNum1[index];
    console.log(element);

}

console.log('===========Adding element in last --push()=========');
let arrayNums=[22,11,44,55,77];
arrayNums.push(88);
console.log(arrayNums);

console.log('===========Removing  element from last --pop()=========');
let arrayNums1=[22,11,44,55,77];
arrayNums1.pop();
console.log(arrayNums1);

console.log(`======Adding element in first position --->unshift()=========`);
// console.log(arrayNums1.indexOf(22));
arrayNums1.unshift(99);
console.log(arrayNums1);
// console.log(arrayNums1.indexOf(99));

console.log(`========Removing element from first position---->shift()=========`);
arrayNums1.shift();
console.log(arrayNums1);
// console.log(arrayNums1.indexOf(22));



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
