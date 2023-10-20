
function jennyHomework(callback) {
    console.log(`Jenny Started Assignment`);
    console.log(`Her assignment solving in progress`);
    console.log(`Jenny completed her assignment`);
    //console.log(callback);
    callback();

    
}
let elonCopyHomework=function () {
    console.log(`Thank you Jenny for call me back`);
    console.log(`Elon Started copying assignments`);
    console.log(`Elon copied all assignments`);

}
jennyHomework(elonCopyHomework);

console.log(`======setTimeout((function name),(time in milliseconds))`);

let intervalId=setTimeout(function(){
    console.log(`Inside callback function`);
},7000)
// clearTimeout(intervalId);
