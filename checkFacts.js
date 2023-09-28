var num1=0;
var num2='';
var typeOfNum1=typeof num1;
var typeOfNum2=typeof num2;

var result=num1==num2;
var typeOfResult=typeof result;

console.log(`1.Result of 0=='' is:${result} and Type of result is:${typeOfResult}`);
console.log(`${num1} is ${typeOfNum1} and ${num2} is ${typeOfNum2},Here '' this string converted into number and '==' this operator founds both values are equal so result is ${result}.`);
console.log("==================================================================================================================================================================================================");

var num1=0;
var num2='0';
var typeOfNum1=typeof num1;
var typeOfNum2=typeof num2;

var result=num1==num2;
var typeOfResult=typeof result;

console.log(`2.Result of 0=='0' is:${result} and Type of result is:${typeOfResult}`);
console.log(`${num1} is ${typeOfNum1} and ${num2} is ${typeOfNum2},Here '0' this string converted into number and '==' this operator founds both values are equal so result is ${result}.`);
console.log("==================================================================================================================================================================================================");

var num1=0;
var num2=false;
var typeOfNum1=typeof num1;
var typeOfNum2=typeof num2;

var result=num1==num2;
var typeOfResult=typeof result;

console.log(`3.Result of 0==false is:${result} and Type of result is:${typeOfResult}`);
console.log(`${num1} is ${typeOfNum1} and ${num2} is ${typeOfNum2},Here "false" this boolean value also equal to 0  and '==' this operator founds both values are equal so result is ${result}.`);
console.log("==================================================================================================================================================================================================");

var num1=null;
var num2=undefined;
var typeOfNum1=typeof num1;
var typeOfNum2=typeof num2;

var result=num1==num2;
var typeOfResult=typeof result;

console.log(`4.Result of null==undefined is:${result} and Type of result is:${typeOfResult}`);
console.log(`${num1} is ${typeOfNum1} and ${num2} is ${typeOfNum2},I did not understand this result is ${result}.`);
console.log("==================================================================================================================================================================================================");


var num1=1;
var num2=[1];
var typeOfNum1=typeof num1;
var typeOfNum2=typeof num2;

var result=num1==num2;
var typeOfResult=typeof result;

console.log(`5.Result of 1==[1] is:${result} and Type of result is:${typeOfResult}`);
console.log(`${num1} is ${typeOfNum1} and ${num2} is ${typeOfNum2},Here [1] this object converted into number and '==' this operator founds both values are equal so result is ${result}.`);
console.log("==================================================================================================================================================================================================");

var num1=1;
var num2=true;
var typeOfNum1=typeof num1;
var typeOfNum2=typeof num2;

var result=num1==num2;
var typeOfResult=typeof result;

console.log(`6.Result of 1==true is:${result} and Type of result is:${typeOfResult}`);
console.log(`${num1} is ${typeOfNum1} and ${num2} is ${typeOfNum2},Here "true" this boolean value also equal to 1  and '==' this operator founds both values are equal so result is ${result}.`);
console.log("==================================================================================================================================================================================================");

var num1=1;
var num2='1';
var typeOfNum1=typeof num1;
var typeOfNum2=typeof num2;

var result=num1==num2;
var typeOfResult=typeof result;

console.log(`7.Result of 1=='1' is:${result} and Type of result is:${typeOfResult}`);
console.log(`${num1} is ${typeOfNum1} and ${num2} is ${typeOfNum2},Here "1" this string is converted into number  and '==' this operator founds both values are equal so result is ${result}.`);
console.log("==================================================================================================================================================================================================");




