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

class Cat extends Pet {
  constructor(petName, petAge, likesToEat) {
    super(petName, petAge, "cat");
    this.likesToEat = likesToEat;
  }
}

class Dog extends Pet {
  constructor(petName, petAge, friendly) {
    super(petName, petAge, "dog");
    this.friendly = friendly;
  }
}

class Rabbit extends Pet {
  constructor(petName, petAge, earLength) {
    super(petName, petAge, "rabbit");
    this.earLength = earLength;
  }
}

class Parrot extends Pet {
  constructor(petName, petAge, featherColor) {
    super(petName, petAge, "parrot");
    this.featherColor = featherColor;
  }
}

class Snake extends Pet {
  constructor(petName, petAge, length) {
    super(petName, petAge, "snake");
    this.length = length;
  }
}
// @todo add other pets

class Owner {
  constructor(
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    repeatPassword,
    pet
    // pet = new Dog("Labus", 12, true)
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.repeatPassword = repeatPassword;
    this.pet = pet;
  }
}

const o1 = new Owner(
  "Ion",
  "popescu",
  01234,
  "ion@email.com",
  "123123",
  "123123",
  new Cat("Dolly", 3, false)
);

console.log(o1.pet.getPetType());

const o2 = new Owner(
  "Ion",
  "popescu",
  01234,
  "ion@email.com",
  "123123",
  "123123",
  new Dog("Dolly", 3, false)
);

console.log(o2.pet.getPetType());

// const o1 = new Owner(
//   "Ion",
//   "popescu",
//   01234,
//   "ion@email.com",
//   "123123",
//   "123123",
//   new Cat("Dolly", 3, false)
// );
// const o1 = new Owner(
//   "Ion",
//   "popescu",
//   01234,
//   "ion@email.com",
//   "123123",
//   "123123",
//   new Cat("Dolly", 3, false)
// );
// const o1 = new Owner(
//   "Ion",
//   "popescu",
//   01234,
//   "ion@email.com",
//   "123123",
//   "123123",
//   new Cat("Dolly", 3, false)
// );
