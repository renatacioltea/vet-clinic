import ownerList from "../data/owners.js";
import {
  writeToStorage,
  addToStorage,
  deleteFromStorage,
  readFromStorage,
} from "./storageHelper.js";

// get emails of owners
const emailList = ownerList.map((owner) => owner.email);

// write emails to storage
writeToStorage("emailList", emailList);

writeToStorage("ownerList", ownerList);
// add email to storage

// console.log(readFromStorage("emailList"));
// addToStorage("emailList", "ion@gmail.com");
// console.log(readFromStorage("emailList"));
// addToStorage("emailList", "vasile@gmail.com");
// console.log(readFromStorage("emailList"));
// deleteFromStorage("emailList", "ion@gmail.com");
// console.log(readFromStorage("emailList"));
