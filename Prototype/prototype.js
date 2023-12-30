/*     Prototype holo Java Script er jkono fuinction er ekta property ja ekta object k point kore*/

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype = {
  // Keeping the common elements together
  eat() {
    console.log(`Person is eating`);
  },
  sleep() {
    console.log(`person is sleepiong`);
  },
};

const tausif = new Person("tausif", 15);
console.log(tausif.age);
tausif.eat();
