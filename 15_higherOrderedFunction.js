function jennyHomework(callback){
    console.log(`Jenny started assignments`);
    console.log(`Her assignments solving in under process`);
    console.log(`Jenny's assignment was completed`);
    callback();
    return function(){
        console.log(`Yahoo ... We both completed assignments.`);
    }
}
let elonCopyHomework=function () {
    console.log(`Thank you Jenny for calling me`);
    console.log(`Elon starts copying homework..`);
    console.log(`Elon completed homework`);
}

const result=jennyHomework(elonCopyHomework);

result();