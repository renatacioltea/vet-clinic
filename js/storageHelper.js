/**
 * Write to local storage. The value will be stringified.
 *
 * @param {string} key
 * @param {any} value
 */
function writeToStorage(key, value) {
  const stringifiedValue = JSON.stringify(value);

  localStorage.setItem(key, stringifiedValue);
}

/**
 * Read key from local storage. Value returned will be object/array.
 *
 * @param {string} key
 */
function readFromStorage(key) {
  const value = localStorage.getItem(key);

  return JSON.parse(value);
}

/**
 * Add element in list.
 */
function addToStorage(key, value) {
  // get the list from local storage.
  const list = readFromStorage(key);
  // add value to the list from above.
  list.push(value);
  // write a new list (that has the new value) in the storage.
  writeToStorage(key, list);
}

function deleteFromStorage(key, value) {
  // get the list from local storage.
  const list = readFromStorage(key);
  // remove the value from the list
  const newList = list.filter((item) => {
    return item !== value;
  });
  // write the new list to the storage
  writeToStorage(key, newList);
}

export { writeToStorage, readFromStorage, addToStorage, deleteFromStorage };
