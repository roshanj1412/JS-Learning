console.log(`(01===>)Remove duplicates from array_numbers`);
var removeDuplicates=function (){
    var array_numbers=[20,11,40,25,23,11,9,9,60,20,19];
    
    for(var index=0;index<array_numbers.length;index++){
        const element=array_numbers[index];
        const element1=array_numbers[index1];
        var numbers=[];
        for (var index1 = 1; index1 <array_numbers.length; index1++){
            if(element==element1){
                array_numbers.splice(index1,1);
            }
            else{
                numbers.push(element1);
            }
            
        }
    } 
    console.log(numbers);
    
}
removeDuplicates();
