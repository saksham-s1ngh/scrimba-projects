import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-database.js";

const firebaseConfig = {
  databaseURL: "https://leads-tracker-app-30a5f-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
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

onValue(referenceInDB, function (snapshot) {
  const snapshotValues = snapshot.val();
  const leads = Object.values(snapshotValues);
  render(leads);
});

deleteBtn.addEventListener("dblclick", function () {
  remove(referenceInDB);
  // Challenge: Clear all the leads from ulEl
  ulEl.innerHTML = "";
});

inputBtn.addEventListener("click", function () {
  push(referenceInDB, inputEl.value);
  inputEl.value = "";
});
