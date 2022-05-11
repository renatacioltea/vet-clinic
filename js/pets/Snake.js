import Pet from "./Pet.js";

class Snake extends Pet {
  constructor(petName, petAge, length, ownerId) {
    super(petName, petAge, "snake", ownerId);
    this.length = length;
  }
}
export default Snake;
