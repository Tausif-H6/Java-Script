// Encapsulation is a fundamental concept in object-oriented programming that refers to the 
// practice of hiding the internal details of an object and exposing only the necessary information 
// to the outside world.
//  Encapsulation helps in maintaining the integrity of data and ensures that it is not accessed or modified inappropriately.

//Smimilar behaviout of a subject in one place

class Student {
  #name //With the # we can make a property private
  constructor(name, age, roll, tutionFees) {
    this.#name = name;
    this.age = age;
    this.roll = roll;
    this.tutionFees = tutionFees;
  }
  summary() {
    console.log("student Name", this.#name="Tausif", "Fees", this.tutionFees * 500);
  }
}

const firyStudent  = new Student()
firyStudent.name="Tausif Hossain"
firyStudent.tutionFees=5;
firyStudent.summary()