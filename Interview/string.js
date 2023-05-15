// How do you check if a string contains a specific substring in JavaScript?

let myString = 'Hello, World!';
console.log( myString.includes('Wor'))

const  newString = myString.split(',') //Converting string to an array
console.log(newString)

let secondNewString = myString.replace(/world/i,"Tausif");//Withour i it stays case sensative
console.log(secondNewString);

let text = "Please visit Microsoft and Microsoft! Microsoft Microsoft Microsoft Microsoft Microsoft Microsoft Microsoft Microsoft Microsoft";
let newText = text.replace(/microsoft/ig , 'Tausif' )

console.log(newText)

//Reversing a string
let story ="I don't want to buy a car I want to buy a bike";
let reverseStory;

for (let i = story.length-1; i >=0; i--) {
    reverseStory += story[i]
}

console.log(reverseStory)