

{

}
var num1=100;
var num2=200;
console.log('Before swap==>',num1,num2);
var temp=num1;
num1=num2;
num2=temp;
console.log('After swap==>',num1,num2);

console.log("1----------Function Type:Function with no Arguments and no return type---------");

    function myDetails(){
        console.log("Name:Roshan");
        console.log("Age:24");

    }
    myDetails();
console.log("2----------Function Type:Function with Arguments and no return type---------");
function swap(valueOne,valueTwo){
    console.log(valueOne,valueTwo);
    console.log("Before Swap==>",valueOne,valueTwo);

    var temp=valueOne;
    valueOne=valueTwo;
    valueTwo=temp;

    console.log("After Swap=====",valueOne,valueTwo);
}

swap(200,400);

swap('Roshan',"Jaiswal")

console.log("3.----------Function Type:Function with Arguments and with return type---------");
function roshan(rs){
    console.log("I went market and bought vegetables");

    var bag="Vegetables Required for a week"

    return bag;
}

roshan(100);

function square(num){
    var result= num*num;
    return result;
}
var squareNum=square(5);

console.log("Square of 5:",squareNum);
