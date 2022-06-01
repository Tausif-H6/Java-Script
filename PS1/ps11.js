//Find out a Leap year;

function Leapyear (year){

    if(year % 400 === 0 || year % 4 === 0 && year % 100 !==0){
        console.log(`This Year : ${year} is a Leap Year`);
    }else{
        console.log(`This Year : ${year} is not a LEap Year `);
    }

}

Leapyear(2028);
