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
  if (nameInput) {
    localStorage.setItem(localStorageInput, nameInput);
    oldName.innerText = localStorage.getItem(localStorageInput);
    myForm.appendChild(oldName);
  } else {
    alert("scrivi qualcosa zio");
  }
};

const clearName = () => {
  if (localStorage.getItem(localStorageInput)) {
    localStorage.removeItem(localStorageInput);
    oldName.innerText = "";
  } else {
    alert("nessun dato salvato in localStorage");
  }
};

buttonSave.addEventListener("click", saveName);
buttonClear.addEventListener("click", clearName);

// esercizio 2

const contatore = () => {
  let tempoTrascorso = parseInt(sessionStorage.getItem("timeElapsed")) || 0; // Ottiene il tempo attuale o lo imposta a 0 se non esiste

  // Funzione per aggiornare il contatore
  function updateCounter() {
    tempoTrascorso++; // Incrementa il tempo trascorso di 1 secondo
    sessionStorage.setItem("timeElapsed", tempoTrascorso); // Salva il valore in sessionStorage
    document.getElementById("timer").innerText = tempoTrascorso; // Aggiorna il DOM
  }

  // Aggiorna il contatore ogni secondo
  setInterval(updateCounter, 1000);
};
contatore();
