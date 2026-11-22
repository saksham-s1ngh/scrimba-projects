import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-database.js";

const firebaseConfig = {
  databaseURL: "https://leads-tracker-app-30a5f-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// Challenge: Create a const called 'referenceInDB' and use the ref function to create a reference called 'leads' in the database
const referenceInDB = ref(database, "leads");

const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");

function render(leads) {
  let listItems = "";
  for (let lead of leads) {
    listItems += `<li><a href="${lead}" target="_blank" rel="noopener noreferrer">${lead}</a></li>`;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {});

inputBtn.addEventListener("click", function () {
  push(referenceInDB, inputEl.value);
  inputEl.value = "";
});
