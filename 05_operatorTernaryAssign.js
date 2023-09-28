console.log('===============Assignment OC===============');
console.log(`(01=====>)`);
function maleMarriageEligibility(gender,age,boyName){
    var result=age>=21?"you are eligible for marriage":"you are not eligible for marriage";

    console.log(`Hey ${boyName} ${result}`);
}
maleMarriageEligibility("Male",25,"Bill Gates");
maleMarriageEligibility("Male",17,"Steve Jobs");


console.log(`(02================>)`);

function femaleMarriageEligibility(gender,age,girlName){
    var result=age>=18?"yor are eligible for marriage ":"you are not eligible for marriage";

    console.log(`${girlName} ${result}`);
}
femaleMarriageEligibility("Female",17,"Jenifer");
femaleMarriageEligibility("Female",23,"Malinda Gates");
