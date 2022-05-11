class Pet {
  constructor(petName, petAge, petType, ownerId) {
    this.petName = petName;
    this.petAge = petAge;
    this.petType = petType;
    this.ownerId = ownerId;
  }

  getPetType() {
    return this.petType;
  }
}

export default Pet;
