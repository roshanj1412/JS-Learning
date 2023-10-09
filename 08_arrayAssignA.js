const arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(arrayFruits);

let lastElement=arrayFruits[arrayFruits.length-1];
let firstElement=arrayFruits[0];
console.log(`(01==>)Element at first and last elements are:${firstElement} and ${lastElement}`);


let addPapaya=arrayFruits.unshift("Papaya");
console.log(`(02===>) Add "Papaya" element before "Banana": `);
console.log(arrayFruits);

console.log(`(03===>) Remove "Mango"`);
let removeMango=arrayFruits.splice(4,1)
console.log(arrayFruits);

console.log(`(04===>)Insert ELement "PineApple" at last position`);
arrayFruits.push('PineApple');
console.log(arrayFruits);

console.log(`(05===>)Insert Element 'Dragon Fruit' Before 'Water Melon' `);
arrayFruits.splice(4,0,"Dragon Fruit");
console.log(arrayFruits);

console.log(`(06===>)  Replace an element 'Orange' with 'Kiwi'`);
arrayFruits.splice(2,1,"Kiwi");
console.log(arrayFruits);

console.log(`(07===>)"Select elements from 1 to 4":${arrayFruits.slice(1,5)}`);

console.log(`Lat 3 elements using length property`);
console.log(arrayFruits.slice(arrayFruits.length-3));