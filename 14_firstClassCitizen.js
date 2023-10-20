console.log(`Why we call function as "first class citizen" in javaScript ?`);
console.log(`(ANS==>)`);
console.log(`It is because of three reasons:`);
console.log(`Function can be stored in a variable("Function Expression")`);
console.log(`Function can be passed to another function as argument(Its called callback)`);
console.log(`A function can return another function()`);


function outer(){
    console.log(`Inside outer function`);
    return function () {
        console.log(`Inside Inner function`);
        
    }
}
outer()();