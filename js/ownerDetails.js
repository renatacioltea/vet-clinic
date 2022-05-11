import {
  addToStorage,
  readFromStorage,
  writeToStorage,
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

function getOwnersDetails() {
  console.log(ownersList);
  return ownersList.find((owner) => {
    return owner.id === parseInt(ownerId, 10);
  });
}
const currentOwner = getOwnersDetails();

// populate DOM with owners full name and email address
const card = document.querySelector(".card");

const fullName = document.querySelector(".full-name");
fullName.innerHTML = `${currentOwner.firstName} ${currentOwner.lastName}`;
card.appendChild(fullName);

const email = document.querySelector(".email");
email.innerHTML = currentOwner.email;
card.appendChild(email);

// create a table with the owner`s pets

const arrayOfPets = new Array();

currentOwner.pet.forEach((pet) => {
  arrayOfPets.push({
    petName: pet.petName,
    petAge: pet.petAge,
    petType: pet.petType,
    firstName: currentOwner.firstName,
    lastName: currentOwner.lastName,
  });
});

const petTableDiv = document.querySelector(".pets-table");
const tableOfPets = buildTableOfPets(arrayOfPets);
petTableDiv.appendChild(tableOfPets);

function cell(cellType, cellText, node = false) {
  const bodyCell = document.createElement(cellType);
  if (!node) {
    const bodyCellText = document.createTextNode(cellText);
    bodyCell.appendChild(bodyCellText);
  } else {
    bodyCell.appendChild(cellText);
  }

  return bodyCell;
}

function buildTableOfPets(arrayOfPets) {
  const tableOfPets = document.createElement("table");

  const tableOfPetsHeading = document.createElement("tr");

  const petNameHeading = cell("th", "Pet Name");
  const petAgeHeading = cell("th", "Pet Age");
  const petTypeHeading = cell("th", "Pet Type");

  tableOfPetsHeading.append(petNameHeading, petAgeHeading, petTypeHeading);
  tableOfPets.appendChild(tableOfPetsHeading);

  for (let pet of arrayOfPets) {
    const tableRow = document.createElement("tr");
    const petNameCell = cell("td", pet.petName);
    const petAgeCell = cell("td", pet.petAge);
    const petTypeCell = cell("td", pet.petType);
    tableRow.append(petNameCell, petAgeCell, petTypeCell);
    tableOfPets.appendChild(tableRow);
  }
  return tableOfPets;
}

// add id for Url
function generateLink(url) {
  const a = document.querySelector(".edit-button");
  a.href = url;

  return a;
}
const a = generateLink(`/editForm.html?id=${currentOwner.id}`, "");

const deleteBtn = document.getElementsByClassName("delete-btn");
deleteBtn[0].addEventListener("click", deleteCurrentOwner);

function deleteCurrentOwner(e) {
  e.preventDefault();
  deleteOwner(ownerId);
  window.location.href = "/vetStructure.html";
}

function deleteOwner(ownerId) {
  const newList = ownersList.filter((owner) => {
    return owner.id.toString() !== ownerId;
  });

  writeToStorage("ownerList", newList);
}
