
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//console.log(getRandomNumber(1, 6));

// Alphabetically sajate hobe

const names = ["Sabah ","Tausif","Liza","Arnab","Sumit"];

console.log(names.sort());//sort method use korle main array change hoye jai
console.log(names);

// Roll number accordingly sjate hbe 

let rolls = [12,22,3,33,55,6,88,9055,2225];

const sorTed = rolls.sort(function(a,b){
    return a-b;
})

const lowerToupper= rolls.sort(function(a,b){
    return b-a;
})

console.log(sorTed);
console.log(lowerToupper);