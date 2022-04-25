import ownerList from "../data/owners.js";
import Owner from "./owner/Owner.js";
import Cat from "./pets/Cat.js";
import Dog from "./pets/Dog.js";
import Parrot from "./pets/Parrot.js";
import Pet from "./pets/Pet.js";
import Rabbit from "./pets/Rabbit.js";
import {
  addToStorage,
  readFromStorage,
  writeToStorage,
} from "./storageHelper.js";

// Get emails from storage
const emailList = readFromStorage("emailList");

const ownersList = readFromStorage("ownerList");

/**
 * Check if email exists in the local storage
 * @param {string} emailAddress
 * @returns
 */
function emailExists(emailAddress) {
  const foundEmail = emailList.find((email) => email === emailAddress);

  return foundEmail !== undefined;
}

/**
 * Serialize form from the register html.
 */
let serializeForm = function (form) {
  let obj = {};
  let formData = new FormData(form);

  for (let key of formData.keys()) {
    obj[key] = formData.get(key);
  }

  return obj;
};

document.addEventListener("submit", function (event) {
  event.preventDefault();

  //   get submitted data
  const formData = serializeForm(event.target);

  //   check if email exists
  const clientExists = emailExists(formData.email);
  let pet = createPetObject(formData);

  if (clientExists) {
    handleClientExists(formData, pet);
  } else {
    handleClientDoesntExists(formData, pet);
  }
});

/**
 * Create pet by pet type
 * @param {string} petName
 * @param {string} petAge
 * @param {string} petType
 * @returns
 */
function createPet(petName, petAge, petType) {
  let pet = {};

  switch (petType) {
    case "cat":
      pet = new Cat(petName, petAge, true, 1);
      break;

    case "dog":
      pet = new Dog(petName, petAge, true, 1);
      break;

    case "parrot":
      pet = new Parrot(petName, petAge, true, 1);
      break;

    case "rabbit":
      pet = new Rabbit(petName, petAge, true, 1);
      break;

    case "snake":
      pet = new Snake(petName, petAge, true, 1);
      break;
  }

  return pet;
}

/**
 * Generate a new owner id from ownerList
 * @returns
 */
function generateId() {
  return ownersList[ownersList.length - 1].id + 1;
}

/**
 * Create a pet for owner
 * @param {*} formData
 * @returns
 */
function createPetObject(formData) {
  return createPet(formData["pet-name"], formData["pet-age"], formData.pet);
}

function handleClientExists(formData, pet) {
  const newOwnerList = ownerList.map((owner) => {
    if (owner.email === formData.email) {
      owner.pet.push({ ...pet, ownerId: owner.id });
    }
    return owner;
  });

  writeToStorage("ownerList", newOwnerList);
}

function handleClientDoesntExists(formData, pet) {
  const newOwner = new Owner(
    formData["first-name"],
    formData["last-name"],
    formData["phone"],
    formData["email"],
    generateId(),
    formData["password"],
    formData["password-repeat"],
    [pet]
  );
  addToStorage("ownerList", newOwner);
}
