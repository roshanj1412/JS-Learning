const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`(01===>)Total Elements Available in array:${arrayNumbers.length}`);
console.log(`(02===>)First element of array is: ${arrayNumbers[0]} and Last Element is ${arrayNumbers[arrayNumbers.length-1]}`);
console.log(`(03===>)Third last element using length property:${arrayNumbers[arrayNumbers.length-3]}`);

console.log(`(04===>)All Even numbers using for in loop:`);

for(const index in arrayNumbers){
    const element=arrayNumbers[index];
    if(element%2==0){
        console.log(element);
    }
}

console.log(`(05===>)All Odd numbers using for in loop:`);

for(const index in arrayNumbers){
    const element=arrayNumbers[index];
    if(element%2!=0){
        console.log(element);
    }
}

console.log(`(07====)>All even position numbers and its SUM:`);

var count=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    
    var element=arrayNumbers[index];
    if(index%2==0){
        console.log(element);
        count=count+element;
    }    
    
}
console.log(`Sum:${count}`);

console.log(`(08====)>All Odd position numbers and its SUM:`);

var count=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    
    var element=arrayNumbers[index];
    if(index%2!=0){
        console.log(element);
        count=count+element;
    }    
    
}
console.log(`Sum:${count}`);

console.log(`(09===>)Numbers which are multiple of 5`);

for (let index = 0; index < arrayNumbers.length; index++) {
    
    var element=arrayNumbers[index];
    if(element%5==0){
        console.log(element);
        
    }    
    
}
console.log(`(10===>)Is number 115 available in arrayNumbers:${arrayNumbers.includes(115)}`);

console.log(`(11===>)Is number 23 available in arrayNumbers:${arrayNumbers.includes(23)}`);

console.log(`(12===> Insert elements55,66 before index 3)`);
arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);

console.log(`Delete 3 elements from starting index 4:`);
arrayNumbers.splice(4,3);
console.log(arrayNumbers);