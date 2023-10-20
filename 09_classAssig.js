class Vehicle{
    carName
    companyName 
    chessesNo
    price 
    seatingAbility
   

    constructor(carName,companyName,chessesNo,price,seatingAbility){
        this.carName=carName;
        this.companyName=companyName;
        this.chessesNo=chessesNo;
        this.price=price;
        this.seatingAbility=seatingAbility;
    }
}
const Ennova= new Vehicle('ENNOVA','TOYOTA',200000000,'21.50 Lakh','7 Seater');
//console.log(Ennova);
const fortuner= new Vehicle('FORTUNER','TOYOTA',48998000000,'45.50 Lakh','7 Seater');
//console.log(fortuner);
const hector= new Vehicle('HECTOR','Moris Gareges',5645600000,'23.50 Lakh','7 Seater');
// console.log(hector);
const xuv700= new Vehicle('Mahindra XUV 700','Mahindra',894000000,'24.70 Lakh','7 Seater');
// console.log(xuv700);

const harrier= new Vehicle('HARRIER','TATA',587000000,'18.50 Lakh','6 Seater');
//console.log(harrier);

const myCarsGroup=[Ennova,fortuner,hector,xuv700,harrier];
// console.log(myCarsGroup);

for (const key in myCarsGroup) {
   console.log(`Key:${key}  values: ${myCarsGroup[key]}`);
    
}

