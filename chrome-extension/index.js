let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  renderLeads();
  inputEl.value = "";
});

function renderLeads() {
  let listItems = "";
  for (let lead of myLeads) {
    listItems += `<li><a href="${lead}" target="_blank">${lead}</a></li>`;
  }
  ulEl.innerHTML = listItems;
}
