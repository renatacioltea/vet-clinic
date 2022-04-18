import Pet from "./Pet.js";

class Rabbit extends Pet {
  constructor(petName, petAge, earLength) {
    super(petName, petAge, "rabbit");
    this.earLength = earLength;
  }
}

export default Rabbit;
