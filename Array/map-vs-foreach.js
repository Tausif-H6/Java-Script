let arr =[6,9,8,7,5,666];

const check = arr.forEach((v)=>{
    return v;// Undefined ashbe karon  eta new kono array return kore nah.
});

const checkWithmap= arr.map((v)=>{
    return v+3;
})
console.log(checkWithmap);
console.log(`Original ${arr}`);
console.write(arr);
