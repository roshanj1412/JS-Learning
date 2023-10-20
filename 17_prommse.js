
const promiseNotes =new Promise(function(resolve,reject) {
    console.log(`Promise is pending state`);
    const isNotesPrepared=false;

    if(isNotesPrepared){
        resolve(`Notes is prepared and here is notes`);
    }else{
        reject(`Sorry guys ,i did not get time,please prepare notes yourself `)
        
    }

})
promiseNotes.then(function(success){
    console.log(`==========then()================`);

    console.log(success);
    console.log(`Thanks you`);
}).catch(function(err){
    console.log(`==========catch() ================`);

    console.log(`Failure`);
    console.log(`Are yar`);
}).finally(function(){
    console.log(`==========Finally()================`);
    console.log(`I must have notes`);
    console.log(`in case sir won't share instead of , I will prepare notes myself`);
})

