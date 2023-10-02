var dayNum;
var displayDay=function (dayNum){
    switch(dayNum){
        case 1:
            console.log('Monday');
        break;
        case 2:
            console.log('Tuesday');

        break;
        case 3:
            console.log('Wednesday');
        break;
        case 4:
            console.log('Thursday');
        break;
        case 5:
            console.log('Friday');
        break;
        case 6:
            console.log('Saturday');
        break;
        case 1:
            console.log('Sunday');
        break;
        default:console.log(`Invalid data:${dayNum}`);
    }
}
displayDay(2);
displayDay(4); 