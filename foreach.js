let fruits=["Mango","Banana","Jackfruit","oranges"];


function getFruits(value){
  console.log(value);
}


fruits.push("Lemon");

                                       
fruits[fruits.length]="Coktail"; //Dynamicly push korte chaile

fruits.forEach(getFruits);

let person=[];

/*  Do not try this    */
person["Name"]="Tausif";
person["ROle"]="Software Engineer";

console.log("Persion er length : "+ person[0]   );// Will provide a undifined statement

console.log(Array.isArray(person));//check an array
