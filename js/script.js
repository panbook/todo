const btn = document.querySelector("button");
const targetDiv = document.querySelector("#container");

btn.addEventListener("click", () => {
  // Tworzenie kontenera dla notatki
  let noteContainer = document.createElement("div");
  noteContainer.setAttribute("class", "note-container");

  // Tworzenie pola textarea
  let nowyParagraf = document.createElement("textarea");
  nowyParagraf.setAttribute("class", "note");
  nowyParagraf.setAttribute("placeholder", "Wpisz tutaj tekst:");

  // Tworzenie checkboxa
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "note-checkbox");

  // Tworzenie przycisku do usunięcia notatki
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "usuń notatkę";
  deleteButton.setAttribute("class", "delete-button");

  // Tworzenie przycisku do zamiany notatki na tekst
  let submitButton = document.createElement("button");
  submitButton.innerHTML = "Zatwierdź";
  submitButton.setAttribute("class", "submit-button");

  // Tworzenie przycisku do edycji notatki
  let editButton = document.createElement("button");
  editButton.innerHTML = "Edytuj notatkę";
  editButton.setAttribute("class", "edit-button");
  editButton.style.display = "none"; // Ukrywanie przycisku na początku

  // Funkcja usuwająca notatkę
  deleteButton.addEventListener("click", () => {
    targetDiv.removeChild(noteContainer);
  });

  // Funkcja zamieniająca textarea na tekst
  submitButton.addEventListener("click", () => {
    let textValue = nowyParagraf.value;
    let textElement = document.createElement("div");
    textElement.setAttribute("class", "note-text");
    textElement.innerText = textValue;
    noteContainer.replaceChild(textElement, nowyParagraf);
    submitButton.style.display = "none"; // Ukrywanie przycisku Zatwierdź
    editButton.style.display = "inline-block"; // Pokazywanie przycisku Edytuj

    
  });

  // Funkcja zamieniająca tekst z powrotem na textarea
  editButton.addEventListener("click", () => {
    let textElement = noteContainer.querySelector(".note-text");
    let textValue = textElement.innerText;
    let newTextarea = document.createElement("textarea");
    newTextarea.setAttribute("class", "note");
    newTextarea.value = textValue;
    noteContainer.replaceChild(newTextarea, textElement);
    submitButton.style.display = "inline-block"; // Pokazywanie przycisku Zatwierdź
    editButton.style.display = "none"; // Ukrywanie przycisku Edytuj
    nowyParagraf = newTextarea; // Aktualizacja odniesienia do nowego textarea

    console.log(textValue);
  });

  // Dodawanie elementów do kontenera notatki
  noteContainer.appendChild(nowyParagraf);
  noteContainer.appendChild(submitButton);
  noteContainer.appendChild(editButton);
  noteContainer.appendChild(deleteButton);
  noteContainer.appendChild(checkbox);

  // Dodawanie kontenera notatki do dokumentu
  targetDiv.appendChild(noteContainer);
});
