import Owner from "../js/owner/Owner.js";
import { Cat, Dog, Rabbit, Snake, Parrot } from "../js/pets/index.js";

const ownerList = [
  new Owner(
    "Maria",
    "Lucaci",
    "0745123456",
    "maria@gmail.com",
    1,
    "@!@!21",
    "@!@!21",
    [new Cat("Dolly", 3, false, 1), new Cat("Moly", 12, true, 1)]
  ),
  new Owner(
    "Ion",
    "Ionescu",
    "0745123456",
    "ion@gmail.com",
    2,
    "@!@!21",
    "@!@!21",
    [new Dog("Hero", 2, "husky", 2)]
  ),
  new Owner(
    "Ana",
    "Pop",
    "0745123456",
    "ana@gmail.com",
    3,
    "@!@!21",
    "@!@!21",
    [new Rabbit("Bruno", 5, "10cm", 3)]
  ),
  new Owner(
    "Stefan",
    "Popescu",
    "0745123456",
    "stefan@gmail.com",
    4,
    "@!@!21",
    "@!@!21",
    [new Parrot("Jacob", 1, "red", 4)]
  ),
  new Owner(
    "Marius",
    "Nemes",
    "0745123456",
    "marius@gmail.com",
    5,
    "@!@!21",
    "@!@!21",
    [new Snake("Bella", 4, "2m", 5)]
  ),
];

export default ownerList;
