import {
  addToStorage,
  readFromStorage,
  writeToStorage,
  deleteFromStorage,
} from "./storageHelper.js";

const ownersList = readFromStorage("ownerList");
console.log(ownersList);

function getUrlParams() {
  const urlParams = new URLSearchParams(window.location.search);

  return urlParams;
}

function getOwnerId(urlParams) {
  return urlParams.get("id");
}
const urlParams = getUrlParams();

const ownerId = getOwnerId(urlParams);
console.log(ownerId);

function getOwnersDetails() {
  return ownersList.find((owner) => {
    return owner.id === parseInt(ownerId, 10);
  });
}
const currentOwner = getOwnersDetails();
console.log(currentOwner);

const arrayOfPets = new Array();

currentOwner.pet.forEach((pet) => {
  arrayOfPets.push({
    petName: pet.petName,
    petAge: pet.petAge,
    petType: pet.petType,
  });
});

function populateForm() {
  const firstName = document.getElementById("firstname");
  firstName.value = currentOwner.firstName;
  const lastName = document.getElementById("lastname");
  lastName.value = currentOwner.lastName;
  const phoneNo = document.getElementById("tel");
  phoneNo.value = currentOwner.phoneNumber;
  const email = document.getElementById("email");
  email.value = currentOwner.email;

  for (let pet of arrayOfPets) {
    const petType = document.getElementById("pet-type");
    petType.value = pet.petType;
    const petName = document.getElementById("pet-name");
    petName.value = pet.petName;
    const petAge = document.getElementById("pet-age");
    petAge.value = pet.petAge;
  }
}

populateForm();

let serializeForm = function (form) {
  let obj = {};
  let formData = new FormData(form);

  for (let key of formData.keys()) {
    obj[key] = formData.get(key);
  }

  return obj;
};

// save changes in local storage

document.addEventListener("submit", function (e) {
  e.preventDefault();
  //   get submitted data
  const formData = serializeForm(e.target);

  //get the updated values from form
  handleClientExists(formData);
});

function handleClientExists(formData) {
  const newOwnerList = ownersList.map((owner) => {
    let newOwner = { ...owner };
    if (owner.id === ownerId) {
      newOwner = { ...newOwner, ...formData };
    }
    return newOwner;
  });

  writeToStorage("ownerList", newOwnerList);
}
