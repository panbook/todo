const btn = document.querySelector("button");
const targetDiv = document.querySelector("#container");

btn.addEventListener("click", () => {
  let nowyParagraf = document.createElement("textarea");
  nowyParagraf.setAttribute("class", "note");
  nowyParagraf.setAttribute("type", "text");
  nowyParagraf.placeholder = "To jest nowy paragraf.";
  targetDiv.appendChild(nowyParagraf);
});
