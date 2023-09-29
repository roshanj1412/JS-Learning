console.log("=============Assignment B===============");
function greaterNumber(num1,num2){
    var result=num1>num2?num1:num2;

    console.log(`(01==>)The Greatest number between ${num1} and ${num2} is:${result}`);

}
greaterNumber(10,-10);
greaterNumber(800,899);

function isEvenOrOdd(num){
    var result=(num%2==0)?"Even":"Odd";
    return result;
}
console.log(`(02==>)`);
var result=isEvenOrOdd(29);
console.log(`The number '29' is ${result}`);
var result=isEvenOrOdd(44);
console.log(`The number 44 is ${result}`);
var result=isEvenOrOdd(0);
console.log(`The number 0 is ${result}`);
var result=isEvenOrOdd(101);
console.log(`The number 101 is ${result}`);

function wordLength(str){
    var stringLength=str.length;
    var result=(stringLength%2==0)?'Even':'Odd';
     return result;
}
console.log(`(03=====>)`);
var result=wordLength("JavaScript");
console.log(`Length of string "JavaScript" is: ${result}`);

var result=wordLength("developer");
console.log(`Length of string "Developer" is: ${result}`);
 var google='Google';
var result=wordLength(google);
console.log(`Length of string ${google} is: ${result}`);


