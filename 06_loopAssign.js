var cube=0;
var cubeSum=function(num){
    for (var index=1; index <= num; index++) {
        var result=index*index*index;
        
    }
    var cube=cube+result;
    console.log(`Sum of cube of 1 to ${num} is: ${cube}`);
}
cubeSum(5)