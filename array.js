
let arr=["Bus","Cars",63232.33];
arr[3]="Out side of the array";

arr[4]="Manush";

// How to get the last element os an array?

//Step 1
/* Amra jani array.length full length ta int number e dekhai  tahole oita theke minues kore amr index number ta set korte parbo */
arr[5]="Sabah";
const last_element= arr[arr.length-1];

const fruites=["Mango","Apple","Pine Apple"];

const length=fruites.length;

let text="<ul>";
for( i=0;i<length;i++ ){
  text += "<li>" + fruites[i]+"</li>";   
}
text +="</ul>";

document.getElementById("para").innerHTML=text;





// Kam kaj with h1

let names=["Arnab","Sayem","Rahat","Sanzid"];

let h="<ul>";
for (let j = 0; j < names.length; j++) {
    h+="<li>"+names[j]+"</li>";
    
}
h+="</ul>";
document.getElementById("head").innerHTML=h;


// Apply array methods
let students=[
{
    id:1,
    name:"Tausif",
    Roll:2025
},
{
    id: 2,
    name:"Ahona",
    Roll:2026
},
{
    id:3,
    name:"Ayaz",
    Roll:2027
}

];

students.push({id:4,
name:"Arnab",
Roll:5556
});
console.log(students);

console.log(students[1]);