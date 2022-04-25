import ownerList from "../data/owners.js";

//create an array of pets
const arrayOfPets = new Array();

ownerList.forEach((owner) => {
  owner.pet.forEach((pet) => {
    arrayOfPets.push({
      petName: pet.petName,
      petAge: pet.petAge,
      petType: pet.petType,
      firstName: owner.firstName,
      lastName: owner.lastName,
    });
  });
});

document.addEventListener("click", consoleLogEvent);

function consoleLogEvent(e) {
  console.log(e);
}

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
  const actionHeading = cell("th", "Action");

  tableOfOwnersHeading.append(
    idHeading,
    firstNameHeading,
    lastNameHeading,
    phoneNumberHeading,
    emailHeading,
    actionHeading
  );
  tableOfOwners.appendChild(tableOfOwnersHeading);
  document.body.appendChild(tableOfOwners);

  for (let owner of owners) {
    const a = generateLink(
      `/ownerDetails.html?id=${owner.id}`,
      owner.id,
      `${owner.firstName} ${owner.lastName}`
    );
    const idCell = cell("td", a, true);
    const firstNameCell = cell("td", owner.firstName);
    const lastNameCell = cell("td", owner.lastName);
    const phoneNumberCell = cell("td", owner.phoneNumber);
    const emailCell = cell("td", owner.email);
    const actionCell = cell("td");
    actionCell.innerHTML = "<button class='delete-button'>Delete</button>";

    actionCell.addEventListener("mouseover", onHover);

    const tableRow = document.createElement("tr");
    tableRow.classList.add("table-rowOwner");

    tableRow.append(
      idCell,
      firstNameCell,
      lastNameCell,
      phoneNumberCell,
      emailCell,
      actionCell
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
  const actionHeading = cell("th", "Action");

  tableOfPetsHeading.append(
    petNameHeading,
    petAgeHeading,
    petTypeHeading,
    firstNameHeading,
    lastNameHeading,
    actionHeading
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
    const actionCell = cell("td");
    actionCell.innerHTML = "<button class='delete-button'>Delete</button>";
    actionCell.addEventListener("mouseover", onHover);

    tableRow.append(
      petNameCell,
      petAgeCell,
      petTypeCell,
      firstNameCell,
      lastNameCell,
      actionCell
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

//Table rows will change color when we mouse mous over

//Change color on owners table row
const tableRows = document.querySelectorAll(`.table-row`);

tableRows.forEach((row) =>
  row.addEventListener("mouseover", (e) => {
    e.target.parentNode.style.color = "red";
    setTimeout(function () {
      e.target.parentNode.style.color = "";
    }, 900);
  })
);

//Change color on pets table row
const tableRowsOwners = document.querySelectorAll(`.table-rowOwner`);

tableRowsOwners.forEach((row) => {
  row.addEventListener("mouseover", (e) => {
    e.target.parentNode.style.color = "red";
    setTimeout(function () {
      e.target.parentNode.style.color = "";
    }, 900);
  });
});

// we add event listeners to the tables, on click we call de onDeleteRow function
tableOfOwners.addEventListener("click", onDeleteRow);
tableOfPets.addEventListener("click", onDeleteRow);

function onDeleteRow(e) {
  if (!e.target.classList.contains("delete-button")) {
    return;
  }
  const button = e.target;
  let text = "Do you want to delete this row?\nSelect OK or Cancel.";
  if (confirm(text) === true) {
    text = "You pressed OK!";
    button.closest("tr").remove();
  } else {
    text = "You canceled!";
  }
}

//delete button change background color when we hover over
function onHover(e) {
  e.target.style.background = "red";

  setTimeout(function () {
    e.target.style.background = "";
  }, 900);
}
