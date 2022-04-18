import ownerList from "../data/owners.js";

console.log(ownerList);
const arrayOfPets = ownerList.map((owner) => {
  return {
    petName: owner.pet.petName,
    petAge: owner.pet.petAge,
    petType: owner.pet.petType,
    firstName: owner.firstName,
    lastName: owner.lastName,
  };
});

console.log(arrayOfPets);

// creating a table

const tableOfOwners = buildOwnerTable(ownerList);
document.body.appendChild(tableOfOwners);
const tableOfPets = buildTableOfPets(arrayOfPets);
document.body.appendChild(tableOfPets);

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

function generateLink(url, text, ownerName) {
  const a = document.createElement("a");
  const link = document.createTextNode(text);
  a.appendChild(link);
  a.href = url;

  a.addEventListener("click", () => {
    showName(ownerName);
  });

  return a;
}

function showName(ownerNameText) {
  const ownerName = document.createTextNode(ownerNameText);
  const ownerNameTag = document.getElementById("owner-name");
  ownerNameTag.innerHTML = "";
  ownerNameTag.appendChild(ownerName);
}

function buildOwnerTable(owners) {
  const tableOfOwners = document.createElement("table");

  const tableOfOwnersHeading = document.createElement("tr");

  const idHeading = cell("th", "Owner id");
  const firstNameHeading = cell("th", "First Name");
  const lastNameHeading = cell("th", "Last Name");
  const phoneNumberHeading = cell("th", "Phone Number");
  const emailHeading = cell("th", "Email");

  tableOfOwnersHeading.append(
    idHeading,
    firstNameHeading,
    lastNameHeading,
    phoneNumberHeading,
    emailHeading
  );
  tableOfOwners.appendChild(tableOfOwnersHeading);
  document.body.appendChild(tableOfOwners);

  for (let owner of owners) {
    const a = generateLink(
      `/vetStructure.html#${owner.id}`,
      owner.id,
      `${owner.firstName} ${owner.lastName}`
    );
    const idCell = cell("td", a, true);
    const firstNameCell = cell("td", owner.firstName);
    const lastNameCell = cell("td", owner.lastName);
    const phoneNumberCell = cell("td", owner.phoneNumber);
    const emailCell = cell("td", owner.email);

    const tableRow = document.createElement("tr");

    tableRow.append(
      idCell,
      firstNameCell,
      lastNameCell,
      phoneNumberCell,
      emailCell
    );

    tableOfOwners.appendChild(tableRow);
  }
  return tableOfOwners;
}

function buildTableOfPets(arrayOfPets) {
  const tableOfPets = document.createElement("table");

  const tableOfPetsHeading = document.createElement("tr");

  const petNameHeading = cell("th", "Pet Name");
  const petAgeHeading = cell("th", "Pet Age");
  const petTypeHeading = cell("th", "Pet Type");
  const firstNameHeading = cell("th", "First Name");
  const lastNameHeading = cell("th", "Last Name");

  tableOfPetsHeading.append(
    petNameHeading,
    petAgeHeading,
    petTypeHeading,
    firstNameHeading,
    lastNameHeading
  );

  //dropdown list
  const options = arrayOfPets.map((pet) => {
    return pet.petType;
  });
  console.log(options);

  const select = document.getElementById("selectPetType");
  for (let i = 0; i < options.length; i++) {
    let option = options[i];
    let element = document.createElement("option");
    element.textContent = option;
    element.value = option;

    select.appendChild(element);
  }

  select.addEventListener("change", selectDropdown);

  petTypeHeading.appendChild(select);
  tableOfPets.appendChild(tableOfPetsHeading);
  document.body.appendChild(tableOfPets);

  for (let pet of arrayOfPets) {
    // console.log(pet);
    const tableRow = document.createElement("tr");

    const a = generateLink(
      `/vetStructure.html#/${pet.firstName} ${pet.lastName}`,
      pet.petName,
      `${pet.firstName} ${pet.lastName}`
    );

    const petNameCell = cell("td", a, true);
    const petAgeCell = cell("td", pet.petAge);
    const petTypeCell = cell("td", pet.petType);
    const firstNameCell = cell("td", pet.firstName);
    const lastNameCell = cell("td", pet.lastName);

    tableRow.append(
      petNameCell,
      petAgeCell,
      petTypeCell,
      firstNameCell,
      lastNameCell
    );

    tableRow.classList.add(pet.petType);
    tableRow.classList.add("table-row");

    tableOfPets.appendChild(tableRow);
  }

  return tableOfPets;
}

/**
 * Event handler when dropdown value changes.
 */
function selectDropdown() {
  // Before filtering we reset the table to its initial state.
  resetTable();

  // Select all table rows that have table-row as a class, but not
  // the selected value from the dropdown.
  // querySelectorAll is used because we have a more complex selector.
  // querySelectorAll will return an array of all the table rows that we need to hide.
  const hidableRows = document.querySelectorAll(
    `.table-row:not(.${this.value})`
  );

  // iterate over all found rows, and hide them(css).
  hidableRows.forEach((row) => {
    row.style.display = "none";
  });
}

/**
 * Reset function that will make all table rows visible in case they are not.
 */
function resetTable() {
  // Select all table rows that have the class: table-row. querySelectorAll() returns
  // an array of elements.
  const tableRows = document.querySelectorAll(`.table-row`);

  // iterate over all table rows found, and set the display(css) to table-row.
  // In case the table row had display=none, it will be reset.
  tableRows.forEach((row) => {
    row.style.display = "table-row";
  });
}
