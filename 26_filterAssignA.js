
console.log(`26_filterAssigA.js`);
const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log(`(01==>All numbers which greater than 50)`);
const greaterThan50=arrayNumbers.filter((currentValue)=>{
    return currentValue>50;
});
console.log(greaterThan50);
console.log(`All even numbers from array`);

const evenNumbersList=arrayNumbers.filter((currentValue)=>{
    return currentValue%2==0;
});
console.log(evenNumbersList);

console.log(`(03==>)All odd numbers from array`);

const oddNumbersList=arrayNumbers.filter((currentValue)=>{
    return currentValue%2!=0;
});
console.log(oddNumbersList);
console.log(`(04==>)The numbers which are multiple of 5`);

const multipleOft5=arrayNumbers.filter((currentValue)=>{
    return currentValue%5==0;
});
console.log(multipleOft5);

console.log(`(05==>)The numbers which are between 20 and 50`);
 
const between20And50=arrayNumbers.filter((currentValue)=>{
    return currentValue>20 && currentValue<50;
});
console.log(between20And50);