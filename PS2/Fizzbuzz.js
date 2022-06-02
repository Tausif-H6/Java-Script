
let Fizzbuzz = (numbers) => {

    for (let index = 1; index <= numbers; index++) {

     if (index%15===0) {
         console.log(`${index} is a FIZZBUZZ`);
     }else if(index%3===0){
       console.log(`${index} is a FIZZ`);
     }else if(index%5===0){
        console.log(`${index} is a BUZZ`);
     }
    }
}


Fizzbuzz(100);