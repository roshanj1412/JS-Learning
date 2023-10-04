let count=0;
var countCharA= function (str) {
    for (let i=0; i< str.length; i++) {
        if (str.charAt(i)== "A" || str.charAt(i)== "a") {
            count++;
        }
        
    }
    console.log(`The no of 'a' or'A' available in string ${str} is :${count}`);
    
    count=0;
}
countCharA("I AM Learning JavaScript,The Language of Internet");
countCharA("My favorite movie is LAggAn");