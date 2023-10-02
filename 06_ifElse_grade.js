console.log(`============Assignment 2===================`);
var voteEligible = function(age){
    if (age<=0 || age>130) {
        console.log(`Invalid data `);
    } else {
        if (age<18) {
            console.log(`Sorry You are not eligible for vote .`);
        } else {
            console.log(`You are eligible for vote , Best of Luck......`);
        }
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);
voteEligible(undefined);
console.log(`${null==undefined}`);


var msg = "Good morning";
function greeting() {
msg = "Good Evening";
console.log(msg);
}
greeting();








