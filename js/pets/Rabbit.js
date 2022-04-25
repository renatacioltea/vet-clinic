import Pet from "./Pet.js";

class Rabbit extends Pet {
  constructor(petName, petAge, earLength, ownerId) {
    super(petName, petAge, "rabbit", ownerId);
    this.earLength = earLength;
  }
}

export default Rabbit;
