// Basically filter er bebohar 

const mixedArr=[
    "lws",
    undefined,
    "",
    false,
    "Tausif",
    "apple",
    40,
    true,
    NaN
]

// let selectedArr= mixedArr.filter((val)=>{
//  if (val) {
//      return true;
//  }else{
//      return false;
//  }
// });
/*Ta chara boolean use klorle o hoito*/
console.log(mixedArr.filter(Boolean));