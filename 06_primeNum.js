const num=1
function isPrimeNum(num) {
    for (let index = 2; index < num; index++) {
        // const element = array[index];
        if (num%index==0) {
            return false;
        }
        else{
            return true;
        }
    }
}
const result= isPrimeNum(2);
console.log(`Is Number Prime:${result}`);
