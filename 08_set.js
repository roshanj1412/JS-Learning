
const array=[10,20,30,40,20,40];
console.log(array);

const setOfRollNum= new Set();
setOfRollNum.add(11);
setOfRollNum.add(22);
setOfRollNum.add(11);
setOfRollNum.add(33);
setOfRollNum.add(22);
setOfRollNum.add(55);
setOfRollNum.add(66);
setOfRollNum.add(77);

//print Set.
console.log(setOfRollNum);

// Calculate Set size
console.log(`Total Element in set is:${setOfRollNum.size}`);

// setOfRollNum.clear();
setOfRollNum.delete(22);
console.log(setOfRollNum);

//check element is available
let result=setOfRollNum.has(77);
console.log(result);

//set traversing using for of loop
for (const element of setOfRollNum) {
    console.log(element);
}

//Remove Duplicate Element using Set

var arrayNumber=[22,11,33,11,22];
const setNum=new Set(arrayNumber);
console.log(setNum);

var arrayNumber=[... new Set(arrayNumber)];
console.log(arrayNumber);

