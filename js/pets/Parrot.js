import Pet from "./Pet.js";

class Parrot extends Pet {
  constructor(petName, petAge, featherColor) {
    super(petName, petAge, "parrot");
    this.featherColor = featherColor;
  }
}

export default Parrot;
