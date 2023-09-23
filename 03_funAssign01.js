console.log("-------------Part 1-------------------------------------");
console.log("1st Function Name:massage() "); 
function massage(){
    console.log("Hi Good Morning Everybody");
    console.log("Best of Luck.....");
 }
 massage();
 console.log("-----------------------------------------------------------------");

 console.log("2nd Function Name:dataTypes()");
 function dataTypes(){
    console.log("Data Types In Java Script:");
    console.log("1.Primitive Data Type ");
    console.log("2.Non-Primitive Data Type");
    console.log("3.Reference Data Type");
 }
 dataTypes();
 console.log("---------Part 2-------------------------------------------");
 console.log("Function:personalDetails()");
 function personalDetails(firstName,lastName,course,collegeName){
    console.log("First Name:",firstName);
    console.log("Last Name:",lastName);
    console.log("Course:",course);
    console.log("College Name:",collegeName);
   // console.log("My Personal Details:",firstName, lastName,collegeName);
 }
 personalDetails("Roshan","Jaiswal","MCA","School of Computer Science North Maharastra University Jalgoan.");
 console.log("----------------------------------------------------------------------------------");
 console.log("-----------------Part 3------------------------------------");
 console.log("Function Name:swapValues()");
 function swapValues(value1,value2){
    console.log("Values Before Swapping:");
    console.log("1st Value:",value1);
    console.log("2nd Value:",value2);
    console.log("Values after Swapping:");
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("1st Value:",value1);
    console.log("2nd Value:",value2);
 }
 swapValues(200,300);
 console.log("------------------------------------------");
 console.log("-------------Part 4------------------------------");
console.log("Function Name:addThreeValues()");
function addTheeValues(val1,val2,val3){
    console.log("Value 1:",val1);
    console.log("Value 2:",val2);
    console.log("Value 3:",val3);
    var adds=(val1+val2+val3);
    return adds;
}
var addition=addTheeValues(10.23,600,40);
console.log("Addition:-",addition);

var addition=addTheeValues("Hello"," Good"," Morning")
console.log("Addition:",addition);
console.log("-----------------------------------------------------");


