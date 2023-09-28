console.log("==========Assignment A================");
console.log("==========PART I================");

function squareOfWordLength(word){
    var wordLength=word.length;
    var square=wordLength* wordLength;
    console.log(`(01==>) The length of  "${word}" is ${wordLength} and Square of length is:${square}`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log("===========PART II===========");
function simple(){
    str="I am React Js Developer";
    strLength=str.length;
    console.log(`The string length is:${strLength}`);
    result=str.split(" ");
    resultLength=result.length;
    console.log(`Total no of words available in String is:${resultLength}`);

    var total=resultLength*strLength;
    console.log(`The multiplication of string length and total no in string is :${total}`);
}
simple();

