// FUNCTION CONSTRUCTOR

// function Owner(
//   firstName,
//   lastName,
//   phoneNumber,
//   email,
//   password,
//   repeatPassword
// ) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.phoneNumber = phoneNumber;
//   this.email = email;
//   this.password = password;
//   this.repeatPassword = repeatPassword;
// }

// const owner1 = new Owner(
//   "Maria",
//   "Lucaci",
//   "0745123456",
//   "maria@gmail.com",
//   "@!@!21",
//   "@!@!21"
// );
// console.log(owner1);

// CLASS

class Owner {
  constructor(
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    repeatPassword,
    petType
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.repeatPassword = repeatPassword;
    // this.petType = petType;
  }
}

function hasPetType(owners) {
  for (let owner in owners) {
    owner.getPetType();
  }
}

const owner1 = new Owner(
  "Maria",
  "Lucaci",
  "0745123456",
  "maria@gmail.com",
  "@!@!21",
  "@!@!21",
  "dog"
);

const owner2 = new Owner(
  "Ion",
  "Ionescu",
  "0745123456",
  "ion@gmail.com",
  "@!@!21",
  "@!@!21",
  "cat"
);

const owner3 = new Owner(
  "Ana",
  "Pop",
  "0745123456",
  "ana@gmail.com",
  "@!@!21",
  "@!@!21",
  "bunny"
);

const owner4 = new Owner(
  "Stefan",
  "Popescu",
  "0745123456",
  "stefan@gmail.com",
  "@!@!21",
  "@!@!21",
  "parrot"
);

const owner5 = new Owner(
  "Marius",
  "Nemes",
  "0745123456",
  "marius@gmail.com",
  "@!@!21",
  "@!@!21",
  "hamster"
);

const owners = [owner1, owner2, owner3, owner4, owner5];
console.log(owners);

console.log(owner1.getPetType());
// // FUNCTION CONSTRUCTOR

// // function Pet(petName, petAge, petType) {
// //   this.petName = petName;
// //   this.petAge = petAge;
// //   this.petType = petType;
// // }

// // const pet1 = new Pet("Stevie", 4, "dog");
// // const pet2 = new Pet("Hero", 2, "cat");
// // const pet3 = new Pet("Bruno", 5, "bunny");
// // const pet4 = new Pet("Jacob", 1, "parrot");
// // const pet5 = new Pet("Bella", 4, "hamster");

// // console.log(pet1);

// // CLASS

class Pets {
  constructor(petName, petAge, petType) {
    this.petName = petName;
    this.petAge = petAge;
    this.petType = petType;
  }

  getPetType() {
    return this.petType;
  }
}

class Cat extends Pets {
  constructor(petName, petAge, petType, likesToEat) {
    super(petName, petAge, petType);
    this.likesToEat = likesToEat;
  }
}

class Dog extends Pets {
  constructor(petName, petAge, petType, breed) {
    super(petName, petAge, petType);
    this.bread = breed;
  }
}

class Rabbit extends Pets {
  constructor(petName, petAge, petType, earLength) {
    super(petName, petAge, petType);
    this.earLength = earLength;
  }
}

class Parrot extends Pets {
  constructor(petName, petAge, petType, featherColor) {
    super(petName, petAge, petType);
    this.featherColor = featherColor;
  }
}

class Snake extends Pets {
  constructor(petName, petAge, petType, length) {
    super(petName, petAge, petType);
    this.length = length;
  }
}

// const pet1 = new Cat("Dolly,");

const pet2 = new Dog("Hero", 2, "dog", "husky");
console.log(pet2.getPetType());
// const pet3 = new Rabbit("Bruno", 5, "rabbit", "10cm");
// const pet4 = new Parrot("Jacob", 1, "parrot", "red");
// const pet5 = new Snake("Bella", 4, "hamster", "2m");

// console.log(pet1);
// console.log(pet2);
// console.log(pet3);
// console.log(pet4);
// console.log(pet5);

// const owners = [owner1, owner2, owner3, owner4, owner5];
// Display a table of pet owners and a table of pets, with link to their owner

// creating a table

const tableWithOwners = buildOwnerTable(owners);
document.body.appendChild(tableWithOwners);

function buildOwnerTable(owners) {
  const tableOfOwners = document.createElement("table");

  const tableOfOwnersHeading = document.createElement("tr");

  const firstNameHeading = document.createElement("th");
  const firstNameHeadingText = document.createTextNode("First Name");
  const lastNameHeading = document.createElement("th");
  const lastNameHeadingText = document.createTextNode("Last Name");

  const phoneNumberHeading = document.createElement("th");
  const phoneNumberHeadingText = document.createTextNode("Phone Number");

  const emailHeading = document.createElement("th");
  const emailHeadingText = document.createTextNode("Email");

  const passwordHeading = document.createElement("th");
  const passwordHeadingText = document.createTextNode("Password");

  const repeatPasswordHeading = document.createElement("th");
  const repeatPasswordHeadingText = document.createTextNode("Repeat-Password");

  firstNameHeading.appendChild(firstNameHeadingText);
  lastNameHeading.appendChild(lastNameHeadingText);
  phoneNumberHeading.appendChild(phoneNumberHeadingText);
  emailHeading.appendChild(emailHeadingText);
  passwordHeading.appendChild(passwordHeadingText);
  repeatPasswordHeading.appendChild(repeatPasswordHeadingText);

  tableOfOwnersHeading.append(
    firstNameHeading,
    lastNameHeading,
    phoneNumberHeading,
    emailHeading,
    passwordHeading,
    repeatPasswordHeading
  );
  tableOfOwners.appendChild(tableOfOwnersHeading);
  document.body.appendChild(tableOfOwners);

  for (let owner of owners) {
    console.log(owner);
    const tableRow = document.createElement("tr");
    const tableRowOwnerFirstName = document.createElement("td");
    const tableRowOwnerLastName = document.createElement("td");

    const tableRowOwnerPhoneNumber = document.createElement("td");
    const tableRowOwnerEmail = document.createElement("td");
    const tableRowOwnerPassword = document.createElement("td");
    const tableRowOwnerRepeatPassword = document.createElement("td");

    const tableRowTextFirstName = document.createTextNode(owner.firstName);
    const tableRowTextLastName = document.createTextNode(owner.lastName);
    const tableRowTextPhoneNumber = document.createTextNode(owner.phoneNumber);
    const tableRowTextEmail = document.createTextNode(owner.email);
    const tableRowTextPassword = document.createTextNode(owner.password);
    const tableRowTextRepeatPassword = document.createTextNode(
      owner.repeatPassword
    );

    tableRowOwnerFirstName.appendChild(tableRowTextFirstName);
    tableRowOwnerLastName.appendChild(tableRowTextLastName);
    tableRowOwnerPhoneNumber.appendChild(tableRowTextPhoneNumber);
    tableRowOwnerEmail.appendChild(tableRowTextEmail);
    tableRowOwnerPassword.appendChild(tableRowTextPassword);
    tableRowOwnerRepeatPassword.appendChild(tableRowTextRepeatPassword);

    tableRow.append(
      tableRowOwnerFirstName,
      tableRowOwnerLastName,
      tableRowOwnerPhoneNumber,
      tableRowOwnerEmail,
      tableRowOwnerPassword,
      tableRowOwnerRepeatPassword
    );

    tableOfOwners.appendChild(tableRow);
  }
  return tableOfOwners;
}

//create pets table
