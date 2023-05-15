let myArray = [0, 1, 2, 3, 4];
myArray.shift()// removes from first
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.push("Tausif","Sumaiya","Tasmia");
console.log(myArray.splice(1,2));

console.log(myArray)

for (let i in myArray){
    console.log(myArray[i])
}