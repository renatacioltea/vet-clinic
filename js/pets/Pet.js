class Pet {
  constructor(petName, petAge, petType) {
    this.petName = petName;
    this.petAge = petAge;
    this.petType = petType;
  }

  getPetType() {
    return this.petType;
  }
}

export default Pet;
