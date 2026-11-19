let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
  inputEl.value = "";

  console.log(localStorage.getItem("myLeads"));
});

function renderLeads() {
  let listItems = "";
  for (let lead of myLeads) {
    listItems += `<li><a href="${lead}" target="_blank" rel="noopener noreferrer">${lead}</a></li>`;
  }
  ulEl.innerHTML = listItems;
}
