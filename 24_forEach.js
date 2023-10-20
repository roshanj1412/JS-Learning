const array=[10,20,30,40,15];
// const result=array.splice(2,0,2)
// console.log(result);

console.log(`=========== forEach loop to traverse array==========`);
console.log(`forEach using  function`);

array.forEach(function ( currentValue,index,array){
    console.log(`Current value:${currentValue} ,Index:${index}, ${array}`);
});
console.log(`forEach using arrow function`);
array.forEach(  (currentValue,index,array)=>{

    console.log(`${currentValue}`);
});



console.log(`======== forEach() loop to traverse Set  ===============`);
const setOfRollNum = new Set();
setOfRollNum.add(11);
setOfRollNum.add(22);
setOfRollNum.add(11);
setOfRollNum.add(33);
setOfRollNum.add(22);
setOfRollNum.add(44);
setOfRollNum.add(55);

setOfRollNum.forEach( (value)=> {
    console.log(value);
} );