import Pet from "../pets/Pet.js";

class Owner {
  constructor(
    firstName,
    lastName,
    phoneNumber,
    email,
    id,
    password,
    repeatPassword,
    pet = new Pet()
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.id = id;
    this.password = password;
    this.repeatPassword = repeatPassword;
    this.pet = pet;
  }
}

export default Owner;
