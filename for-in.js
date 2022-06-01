let people ={fname:"Tausif",lName:"Hossain",age:25};


//Object k loop korte hoile FOr in loop use korte hobe
let text = "";
for (const key in people) {
    text +=people[key];
   console.log(text);
}

