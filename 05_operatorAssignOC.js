console.log("=====TCS InterView Eligibility Checker================== ");

function tcsInterview(gradScore,hscScore,sscScore,candidateName){
    var result=gradScore>=70 && hscScore>=80 && sscScore>=90
    ?"you are eligible for interview"
    :"unfortunately you are not eligible";

    console.log(`Congrats ${candidateName} ${result} `);
}
tcsInterview(80,86,90,"Roshan");
tcsInterview(70,65,55,"Kishor");
tcsInterview(60,79,78,"Gaurav");


