
function maleMarriegeEligibility(gender,age,boyName){
    var result=gender=='Male' && age>=21
    ?`Hey ${boyName} you are eligible for marriege, Congrats`
    : `Sorry, ${boyName} you not eligible ,try next time`;
    return result;

}
var result=maleMarriegeEligibility('Male',25,"Roshan");
console.log(result);