// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById("go-btn");
let menuEl = document.getElementById("menu");
let outputEl = document.getElementById("output");

// Global Variables
let contacts = [];

// Go Btn - Menu Listener
goBtnEl.addEventListener("click", goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === "display-all") {
    displayContacts();
  } else if (selection === "add") {
    addContact();
  } else if (selection === "remove") {
    removeContact();
  } else if (selection === "display-name") {
    displayByName();
  } else if (selection === "display-country") {
    displayByCountry();
  }
}

// MENU FUNCTIONS
function displayContacts() {
  console.log("Display Contacts");
}

function addContact() {
  let contactName = prompt("Enter contact's name: ");
  let contactEmail = prompt("Enter contact's email: ");
  let contactPhoneNum = prompt("Enter contact's phone number: ");
  let contactCountry = prompt("Enter contact's country: ");

  contacts = [contactName, contactEmail, contactPhoneNum, contactCountry];
  console.log(contacts);
}

function removeContact() {
  console.log("Remove Contact");
}

function displayByName() {
  console.log("Display by Name");
}

function displayByCountry() {
  console.log("Display by Country");
}

//
