class House {
  #name;
  #holding;
  #tin;
  #numOfhouse;
  constructor(name, holding, tin, numberOfhouse) {
    this.#name = name;
    this.#holding = holding;
    this.#tin = tin;
    this.#numOfhouse = numberOfhouse;
  }
  getName() {
    return this.#name;
  }
  getNumberofHouse() {
    return this.#numOfhouse;
  }
  totalHouses() {
    console.log(
      `your house name is ${this.#name} and holding is ${
        this.#holding
      } You have ${this.#numOfhouse} So You have to pay ${
        this.numberOfhouse * 5
      } as TAX with this TIN ${this.#tin}`
    );
  }
}

class Builder extends House {
  constructor(name,numberOfhouse) {
    super(name,numberOfhouse);
  }
  selleingPrice() {
    console.log(
      "House name",
      this.getName(),
      "Number of Houses",
      Number(this.getNumberofHouse())
    );
  }
}

const a = new House("Tausif Villa", "38/1", "0056", "2");

const Saif = new Builder("Akash Villa",2); 

