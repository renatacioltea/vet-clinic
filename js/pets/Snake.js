import Pet from "./Pet.js";

class Snake extends Pet {
  constructor(petName, petAge, length) {
    super(petName, petAge, "snake");
    this.length = length;
  }
}
export default Snake;
