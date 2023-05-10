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
  } else if (selection === "display-email") {
    searchByEmail();
  }
}

// MENU FUNCTIONS

// Display All Contacts
function displayContacts() {
  let outputStr = "";

  for (let i = 0; i < contacts.length; i++) {
    outputStr += getContactHTMLStr(contacts[i], i);
  }
  outputEl.innerHTML = outputStr;
  loadContacts();
  saveContacts();
}

// Add Contact
function addContact() {
  let contactName = prompt("Enter contact's name: ");
  let contactEmail = prompt("Enter contact's email: ");
  findByEmail(contactEmail);
  let contactPhoneNum = prompt("Enter contact's phone number: ");
  let contactCountry = prompt("Enter contact's country: ");

  contacts.push(
    newContact(contactName, contactEmail, contactPhoneNum, contactCountry)
  );

  outputEl.innerHTML = `<p>Contact added: ${contactName}.</ p>`;
  loadContacts();
  saveContacts();
}

// Remove Contact
function removeContact() {
  let emailRemove = prompt(
    "Enter the contact's email which you'd like to remove:"
  );
  findByEmail(emailRemove);

  if (contacts.includes(emailRemove)) {
    let index = contacts.indexOf(emailRemove);
  }

  // for (let i = 0; i < contacts.length; i++) {
  //   let emailSearch = contacts[i].email;
  //   if (emailSearch.includes(emailRemove)) {
  //     let index = emailSearch.indexOf(emailRemove);
  //     console.log(index);
  //     contacts.splice(index, 1);
  //   }
  // }
  // let index = +prompt("Enter # of contact:");

  // if (index >= 0 && index < contacts.length) {
  //   //Valid index
  //   contacts.splice(index, 1);
  //   outputEl.innerHTML = `<p>Contact Removed.</ p>`;
  // } else {
  //   outputEl.innerHTML = `<p>Invalid Index!</ p>`;
  // }
  loadContacts();
  saveContacts();
}

// Display Contact By Name
function displayByName() {
  outputEl.innerHTML = "";

  let nameSearch = prompt("Enter contact's name: ");

  for (let i = 0; i < contacts.length; i++) {
    let nameCheck = contacts[i].name;
    if (nameCheck.includes(nameSearch)) {
      outputEl.innerHTML += getContactHTMLStr(contacts[i], i);
    }
  }
}

// Display Contacts by Country
function displayByCountry() {
  outputEl.innerHTML = "";

  let countrySearch = prompt("Enter contact's country: ");

  for (let i = 0; i < contacts.length; i++) {
    let countryCheck = contacts[i].country;
    if (countryCheck.includes(countrySearch)) {
      outputEl.innerHTML += getContactHTMLStr(contacts[i], i);
    }
  }
}

//Search By Email
function searchByEmail() {
  outputEl.innerHTML = "";

  let emailSearch = prompt("Enter contact's email: ");

  for (let i = 0; i < contacts.length; i++) {
    let emailCheck = contacts[i].email;
    if (emailCheck.includes(emailSearch)) {
      outputEl.innerHTML += getContactHTMLStr(contacts[i], i);
      let index = emailCheck.indexOf(emailSearch);
      console.log(index);
    }
  }
}

// Helper Functions

// New Contact
function newContact(initName, initEmail, initPhoneNum, initCountry) {
  return {
    name: initName,
    email: initEmail,
    phoneNum: initPhoneNum,
    country: initCountry,
  };
}

// Get HTML for chosen Contact
function getContactHTMLStr(contact, i) {
  return `
    <div> 
      <h3>${i}: ${contact.name}</h3>
      <p>${contact.email}</p>
      <p>${contact.phoneNum}</p>
      <p>${contact.country}</p>

    </ div>`;
}

// Save Contacts to Local Storage
function saveContacts() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

// Load Contacts from Local Storage
function loadContacts() {
  let contactsStr = localStorage.getItem("contacts");
  return JSON.parse(contactsStr) ?? [];
}

// Find by Email
function findByEmail(userEmail) {
  for (let i = 0; i < contacts.length; i++) {
    let emailCheck = contacts[i].email;
    let index = emailCheck.indexOf(userEmail);
    console.log(index);
  }

  //   let emailCheck = contacts[i].email;
  //   let index = emailCheck.indexOf(userEmail);
  //   if (index === -1) {
  //     return console.log("Contact with that email could not be found.");
  //   } else {
  //     console.log(emailCheck);
  //     console.log(index);
  //     return console.log(
  //       `Contact with that email was found at posit
  //         ion ${index}.`
  //     );
  // }
}
