let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]; // dummy lead urls for testing
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  console.log(myLeads.value);
});

for (let lead of myLeads) {
  ulEl.innerHTML += `<li>${lead}</li>`;
}
