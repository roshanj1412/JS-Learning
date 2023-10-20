let global=100;

function outer(){
    //console.log(global);
    let outerVariable=200;
     let inner=function () {
        let innerVariable=300;
        console.log(innerVariable,outerVariable,global);
    }
    return inner;

}
var out=outer();
//console.log(out);
out();

// outer()();