let vowel = ["a","e","i","o","u","A","E","I","O","U"];

function countVowels(sentence){

    let makeArrayFromUser = Array.from(sentence);
    makeArrayFromUser.forEach(function(value,index,arr){
        if (vowel.includes(value)) {
            console.log("Values are : "+ value);
            console.log("Indexs are : "+ index);
            console.log("Array is "+ arr);
        }
    })

}


countVowels("I love Sabah matin");


console.log(`Ddfdshfshbfsdkasdhsu`);
