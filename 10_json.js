
const postInString=`{
    "userId":1,
    "id":1,
    "title":"on trip",
    "body": "Feeling awesome.. after long "
}`
console.log(typeof postInString);

// const id="120";
// let idInNum=+id;
// console.log(idInNum, typeof idInNum);

const post= JSON.parse(postInString);
console.log(typeof post);
console.log(post);

const person={
    name:"Roshan",
    age:25,
    city:"Pune"
}
const personJASON= JSON.stringify(person);
console.log(typeof personJASON);
console.log(personJASON);

const personElon={
    name:"Elon Musk",
    age:54,
    totalCompanies:9,
    companies:{
        tesla:"300B USD",
        tesla:"300B USD",
        spaceX:"200B USD",

    },
    kidsName:["Denny","Wenny","Jenny","Tony"]
}
const personElonJason=JSON.stringify(personElon);
console.log(typeof personElonJason);
console.log(personElonJason);
