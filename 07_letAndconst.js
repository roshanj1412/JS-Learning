var num =20;
num=200;
console.log(num);

let num2=30;
num2=40;
num2=50;
console.log(num2 );

const PI=3.14;
// PI=3.755;
console.log(PI);

//Scope =Accessibility
console.log('==========================');
function hii(){
    var greet='Good Morning';
    if(30>20){
        let num3=100;
        const num4=200;
        var result=10+20;
    }
    //console.log(num3);
    // console.log(num4);
    console.log(result);
    
}
hii();

for (let index = 0; index < 3; index++) {
    console.log(index);
}

// console.log(index);