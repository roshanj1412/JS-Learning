
let add=function(){
    console.log(`Inside function Expression`);


}


let arrowfun = ()=>{
    console.log(`Inside Arrow function`);
}

add();
arrowfun();

let sub=(num1,num2) =>{
    console.log(`Subtraction is :${num1-num2}`);
}
sub(20,10);

let square=(num1) =>{
    return num1*num1;
}
let result=square(7);
console.log(`Square is: ${result}`);