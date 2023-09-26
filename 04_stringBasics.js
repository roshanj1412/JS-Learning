var greet='Good Morning';
var result=typeof greet;
console.log(result);

// console.log("Character at index 0 is:",greet.charAt(0));
console.log("==============length property=============");
console.log("Length of String:",greet.length);

console.log("============ charAt()==========");
var charAt0=greet.charAt(0);
console.log("Character at index 0 is:",charAt0);

var charAt5=greet.charAt(5);                             
 console.log("Character at index 5",charAt5);

 console.log("Char at last :",greet.charAt(greet.length-1));

 console.log("Char at third last :",greet.charAt(greet.length-3));

 console.log("===========Concatenation==============");
 var firstName="Roshan";
 var lastName="Jaiswal";
 var result=firstName.concat(lastName);
 console.log(result);

 console.log("===========indexOf()==============");
var indexOfM=greet.indexOf("M");
console.log('Index of M',indexOfM);

console.log('Index of D',greet.indexOf('D'));

console.log('Index of D',greet.indexOf('z'));

console.log("==========replace===========");
var result=greet.replace("Morning","Afternoon")
console.log(result);

var result=greet.replace(" ","_")
console.log(result);
console.log("========toUpper() and toLower()============");
var lower=greet.toLowerCase();
console.log(lower);

var upper=greet.toUpperCase();
console.log(upper);

// console.log("=====================trim()===============");

// var str="   Good Morning  ";
// var lengthBeforeTrim=str.length;
// console.log("Length before trim:",str.length);

// var result=str.trim();
// console.log("Length after trim:",result.length);

console.log("========== trim() =============== ");
var str = "   Good Afternoon  ";
var lengthBeforeTrim = str.length;
console.log("Length before trim : ", str.length);
var result = str.trim();
console.log("Length after trim: ", result.length);
var lengthAfterTrim = result.length;
var result = lengthBeforeTrim - lengthAfterTrim;
console.log('Removed extra spaces are: ', result);

 console.log("============includes()============");
 var result=greet.includes("nin");
 console.log("Is available:",result);

 console.log("============search()============");
var result=greet.search("Morning");
console.log("Morning is available:",result);

 console.log(greet.search('orn'));

console.log("============slice()============");
var greet="Hello Good Morning";
var result=greet.slice(6);
console.log(result);

var result=greet.slice(6,10);
console.log(result);

console.log("=============split()================");
var result=greet.split(" ");
console.log(result);

var str='Developer'
var result=str.split("");
console.log(result);

console.log(result);

//WAP to count the total number words
var str = "I am UI Developer";
var words = str.split(" ");
console.log(words);
console.log('Total words is: ', words.length);
// console.log(typeof words);

console.log("=============string template================");
console.log('I am "UI" Developer');

var num1=10;
var num2=20;
var result=num1+num2;

//console.log("Addit");

console.log("Addition of ", num1, "and ", num2, "is :", result);
console.log(` Addition of ${num1} and ${num2}  is: ${result}`);


console.log(`Total word is: ${words.length}`);