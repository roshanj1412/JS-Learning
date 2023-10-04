console.log(`(01=========>Count No Of Vowels=========)`);
let count=0;
var countVowels= function (str) {
    for (let i=0; i< str.length; i++) {
        if (str.charAt(i)== "A" || str.charAt(i)== "a" || str.charAt(i)== "e" || str.charAt(i)== "E"|| str.charAt(i)== "i" || str.charAt(i)== "I" || str.charAt(i)== "o" || str.charAt(i)== "O"|| str.charAt(i)== "u" || str.charAt(i)== "U") {
            count++;
        }
        
    }
    console.log(`The no Vowels available in string ${str} are :${count}`);
}
countVowels("I am very good IT Developer");

console.log(`(01=========>Cube of numbers 1 to 5=========)`);

var cube=0;
var cubeSum=function(num){
    for (var index=1; index <= num; index++) {
        var result=index*index*index;
         cube=cube+result;
    }
    
    console.log(`Sum of cube of 1 to ${num} is: ${cube}`);
}
cubeSum(5)

console.log(`(01=========>Print odd position characters of given strings=========)`);

var charAtOddPosition=function(str){
    var str1=""
    for (let index = 0; index < str.length; index++) {
        if(str.charAt(index) !=" "){
            str1=str1+str.charAt(index);
        }
    }
    var string2="";
     for (var i = 1; i < str1.length; i=i+2) {
         string2=string2+str1.charAt(i);

     }
     console.log(`Given string is:- ${str} and characters at odd position are:-- ${string2}`);


}
charAtOddPosition("Hard work always pay back");
charAtOddPosition("Soon I will IT champ");
