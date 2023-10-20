//creating Map
const map= new Map();
//adding data in Map
map.set(11,"Mohan");
map.set(22,"Roshan");
map.set(33,'Ajay');
map.set(44,'Alex');
//printing map
console.log(map);


//getting value using key
const key33Value=map.get(33);
console.log(key33Value);

//Adding Duplicate value in Map.
map.set(22,"Rutik");
console.log(map);

//Adding duplicate value in Map
map.set(55,"Rutik");
console.log(map);

//getting map size
console.log(`Total Element in Map:${map.size}`);

//removing element from Map.

map.delete(55);
console.log(map);

//check Key is available or not
console.log(map.has(22));

//to get all keys from Map
const keys=map.keys();
console.log(keys);

//to get all values from Map
const values=map.values();
console.log(values);


//Traversing Map using for of loop
for (const key of keys) {
    console.log(key,map.get(key));
}
