// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById("go-btn");
let menuEl = document.getElementById("menu");
let outputEl = document.getElementById("output");

// Global Variables
let contacts = loadContacts();

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
  let outputStr = "";

  for (let i = 0; i < contacts.length; i++) {
    outputStr += getContactHTMLStr(contacts[i], i);
  }
  outputEl.innerHTML = outputStr;
  loadContacts();
  saveContacts();
  console.log("Display Contacts");
}

function addContact() {
  let contactName = prompt("Enter contact's name: ");
  let contactEmail = prompt("Enter contact's email: ");
  let contactPhoneNum = prompt("Enter contact's phone number: ");
  let contactCountry = prompt("Enter contact's country: ");
  contacts.push(newContact(contactName));
  contacts.push(newContact(contactEmail));
  contacts.push(newContact(contactPhoneNum));
  contacts.push(newContact(contactCountry));

  outputEl.innerHTML = `<p>Contact added: ${contactName}.</ p>`;
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

// Helper Functions

function newContact(name) {
  return {
    contactName: name,
  };
}
function newContact(email) {
  return {
    contactEmail: email,
  };
}
function newContact(phoneNum) {
  return {
    contactPhoneNum: phoneNum,
  };
}
function newContact(country) {
  return {
    contactCountry: country,
  };
}

// Get HTML for chosen Contact
function getContactHTMLStr(contact, i) {
  return `
    <div> 
      <h3><i>${i}</i>: ${contact.contactName}</h3>
      <p>${contact.contactEmail}</p>
      <p>${contact.contactPhoneNum}</p>
      <p>${contact.contactCountry}</p>

    </ div>`;
}

// Save Contacts to Local Storage
function saveContacts() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

//Load Contacts from Local Storage
function loadContacts() {
  let contactsStr = localStorage.getItem("contacts");
  return JSON.parse(contactsStr) ?? [];
}
