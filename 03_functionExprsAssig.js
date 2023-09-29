
console.log(`(01 and 02==============>)`);
var square= function (number){
    numberType=typeof number;
    numberSquare=number*number;
    return console.log(`The number ${number} is type of ${numberType} and its square is: ${numberSquare} `);

}
square(5);
square(6);
square(25);
square(100);
square(67.89);
square(89);
console.log(`(03==============>)`);

var rectangleArea= function (length,width){
    return length*width;
}
var length=499;
var width=917;
var result=rectangleArea(length,width);
console.log(`Area of rectangle with Length ${length} Feet and with Width ${width} Feet is ${result} SquareFeet.  `);

console.log(`(04==============>)`);
 var swapValues=function(value1,value2){
    console.log(`The values before swapping are: Value1 is ${value1} and Value2 ${value2}`);
    var temp=value1;
    value1=value2;
    value2=temp;
     return (`The values After swapping are: Value1 is ${value1} and Value2 ${value2}`);
    
 }
 var result=swapValues(100,200);
 console.log(result);

console.log(`(05==============>)`);
var stringOperations= function(string){
    console.log(`The string is:${string} `);
    console.log(`(A) Total characters available in String are ${string.length}`);
    
    var charAt6=string.charAt(6);
    console.log(`(B) Character at 6 index  of string is:${charAt6}`);

    var charAt11=string.charAt(11);
    console.log(`(C) Character at 11 index  of string is:${charAt11}`);

    var charAtLast=string.charAt(string.length-1);
    console.log(`(D) Character at last index  of string is:${charAtLast}`);
    
    var charAtFirst=string.charAt(0);
    console.log(`(E) Character at first index  of string is:${charAtFirst}`);

    var charAtLastThird=string.charAt(string.length-3);
    console.log(`(F) Character at last third index  of string is:${charAtLastThird}`);

    var stringLength=string.length;
    console.log(`Total no of words available in string are ${stringLength} and its square is ${stringLength*stringLength}.`);
}
var result=stringOperations("JS the most popular language of internet");

