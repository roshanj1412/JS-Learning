const arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(arrayFruits);

let lastElement=arrayFruits[arrayFruits.length-1];
let firstElement=arrayFruits[0];
console.log(`(01==>)Element at first and last elements are:${firstElement} and ${lastElement}`);


let addPapaya=arrayFruits.unshift("Papaya");
console.log(`(02===>) Add "Papaya" element before "Banana": `);
console.log(arrayFruits);

let removeMango=arrayFruits.splice(4,4)
console.log();

