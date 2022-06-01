let arr = ["Tauldar", "Optima", "Jahangir", "Etiqua"];
arr.sort();
console.log(arr);
arr.reverse();
console.log(arr);

let point = [6, 66, 9, 22, 8, 4, 3, 2];

//Sort the array accending order
point.sort(function (a, b) {
    return a - b;
})
console.log(point);

//Sort array decending order
point.sort(function (a, b) {
    return b - a;
})

console.log(point);

//The Fisher Yates Method to sort an array

const points = [40, 1000, 1, 500, 250, 10];

//   const result = Math.max.apply(null,points);

let maxVaule = [];
for (let index = 0; index < points.length; index++) {

    if (points[index] > maxVaule)
        maxVaule = points[index];


}

console.log("Max Value : " + maxVaule);

