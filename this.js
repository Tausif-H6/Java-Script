
//object er baire function k function e bole 
const person={
   
    fulname:function (){
        return this.firstName+ " "+ this.lastName //Internal this !!!!!!!!  Ei this ta hobe person two er this.
    }//Object er bhitor function k method bole
}

const person2={//Explicit this use korte hoile ki korte hoi
    firstName:"Jhon",
    lastName:"Brad"
}


console.log(person.fulname.call(person2));

