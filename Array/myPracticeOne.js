let arr=[5,6,9,8,3,6];

// Find method use korle just ekta value find korbe;
// let selectyedValue=arr.find((v)=>{
//     if(v<7){
//         return v;
//     }
// })

let filteredValue= arr.filter((v)=>{
    if (v>5) {
        return v;
    }
})

console.log(filteredValue);