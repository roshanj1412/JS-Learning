


var year;

//  var numType=typeof num1;
var leapYear= function (year) {
if(isNaN(year) || year==null ){
    console.log(`you have entered ${year}. This is not valid year.Please enter valid year.  `);
}
else{
    if(year%4==0){
        console.log(`The year ${year} is a leap year`);
    }else{
        console.log(`The year ${year} is not a leap year`);
        
    }
}
    
    
}
leapYear(2020);
leapYear(1990);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear('Twenty Twenty');
leapYear(undefined);
leapYear(NaN);
leapYear(1750);

