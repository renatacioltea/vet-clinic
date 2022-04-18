import Pet from "./Pet.js";

class Cat extends Pet {
  constructor(petName, petAge, likesToEat) {
    super(petName, petAge, "cat");
    this.likesToEat = likesToEat;
  }
}

export default Cat;
