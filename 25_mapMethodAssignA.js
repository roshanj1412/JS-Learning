 const arrayNumbers=[20,1,40,25,23,11,9,31,60,20,19];

 const add11Each=arrayNumbers.map((currentValue)=>{
        return (currentValue+10);
 });
 console.log(`Add 11 to each element of array `);
 console.log(add11Each);
 console.log(`Cube of each element of array `);

 const cube=arrayNumbers.map((currentValue)=>{
    return Math.pow(currentValue,3);   
 });

 console.log(cube);
 console.log(`Adding index value to each element of array `);
 const addIndex=arrayNumbers.map((currentValue,index)=>{
    return (currentValue+index);
 });
 console.log(addIndex);