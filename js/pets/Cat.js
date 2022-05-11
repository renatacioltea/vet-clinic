import Pet from "./Pet.js";

class Cat extends Pet {
  constructor(petName, petAge, likesToEat, ownerId) {
    super(petName, petAge, "cat", ownerId);
    this.likesToEat = likesToEat;
  }
}

export default Cat;
