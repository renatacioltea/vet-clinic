import Pet from "./Pet.js";

class Parrot extends Pet {
  constructor(petName, petAge, featherColor, ownerId) {
    super(petName, petAge, "parrot", ownerId);
    this.featherColor = featherColor;
  }
}

export default Parrot;
