
let arrayNumbers=[22,11,44,55,77,33];
console.log(`Array is:${arrayNumbers}`);
console.log(`Elements at even position of array are`);
for (let index = 0; index < arrayNumbers.length; index++) {
const element=arrayNumbers[index];
    
    if(index%2==0){
        console.log(element);
    }
}
let count=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element=arrayNumbers[index];
    count=count+element;
}
console.log(`Sum of elements of array is:${count}`);