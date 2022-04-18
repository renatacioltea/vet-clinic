import Pet from "./Pet.js";

class Dog extends Pet {
  constructor(petName, petAge, breed) {
    super(petName, petAge, "dog");
    this.bread = breed;
  }
}

export default Dog;
