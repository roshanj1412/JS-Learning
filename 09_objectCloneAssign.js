console.log(`(01====>)'bankSbi' object using literals=======`);
const bankSbi={
    accHolderName:'Ram',
    accNo:68750215,
    ifcCode:'SBI001',
    balance:500000,
    nominee:'XYZ'
}


console.log(bankSbi);

console.log(`(02====>)'bankLocation' object using literals=======`);
const bankLocation={
    street:'Karve Nagar',
    city:'Pune',
    pin:556677,

}

console.log(bankLocation);

console.log(`(02(I)====>) Object 'bankSbi' using Object.assign() into object 'bankSbi1'=======`);
 const bankSbi1=Object.assign(bankSbi);
 console.log(bankSbi1);

 console.log(`(02(II)====>) Object 'bankLocation' using Object.assign() into object 'bankLocation1'=======`);
 const bankLocation1=Object.assign(bankLocation);
 console.log(bankLocation1);

 console.log(`(02====>)'rateOfInterest' object using literals=======`);
const rateOfInterest={
    homeLoan:'13%',
    personalLoan:'12%',
    dueInterest:'15%',

}
console.log(rateOfInterest);

const sbiDetails=Object.assign({},bankSbi,bankLocation,rateOfInterest);
// console.log(sbiDetails);
console.log(`(06)Traverse Object 'sbiDetails' using for in loop==================`);

for (const key in sbiDetails) {
   console.log(`Key:${key}  values: ${sbiDetails[key]}`);
}
