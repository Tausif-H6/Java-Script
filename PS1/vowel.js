let vowel = ["a","e","i","o","u","A","E","I","O","U"];

function countVowel (sentence){
   let count =0;
   let getThesenTenceArray=Array.from(sentence);//Sentence k array te convert korlam

   getThesenTenceArray.forEach(function(val){
       if (vowel.includes(val)) {//match kore naki check korlam 
           count++;
           console.log(val);
       }
   })
   console.log("Vowels we have : "+ count);
}

countVowel("I love Bangladesh");



// I want to use c++ I dea the I need to follow this way 
// function CountArray(sentence){

//    let vholder;
//    let sholder;
//    let count=0;
//    for (let index = 0; index < vowel.length; index++) {
//        vholder = vowel[index];
//        for (let index = 0; index < sentence.length; index++) {
//            sholder = sentence[index];
//            if (vholder===sholder) {
//                count++;
//                console.log(sholder);
//            }
//        }
       
//    }
//    console.log("Vowels we have : "+count);
// }
// CountArray("I Love Bangladesh");