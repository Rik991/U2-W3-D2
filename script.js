// esercizio 1

const buttonSave = document.getElementById("saveBtn");
const buttonClear = document.getElementById("clearBtn");
const localStorageInput = "userName-storage";
const myForm = document.querySelector("form");
let oldName = document.createElement("p");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  myForm.reset();
});

const saveName = () => {
  nameInput = document.getElementById("userName").value;
  localStorage.setItem(localStorageInput, nameInput);
  oldName.innerText = localStorage.getItem(localStorageInput);
  myForm.appendChild(oldName);
};

const clearName = () => {
  localStorage.removeItem(localStorageInput);
  oldName.innerText = "";
};

buttonSave.addEventListener("click", saveName);
buttonClear.addEventListener("click", clearName);

// esercizio 2
