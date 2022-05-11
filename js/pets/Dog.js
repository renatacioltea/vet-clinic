import Pet from "./Pet.js";

class Dog extends Pet {
  constructor(petName, petAge, breed, ownerId) {
    super(petName, petAge, "dog", ownerId);
    this.bread = breed;
  }
}

export default Dog;
