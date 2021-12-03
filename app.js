const output = document.querySelector(".output");
const text = document.querySelector(".output h2");
window.addEventListener("keydown", (event) => {
  if (event.key === "v") {
    output.style.background = "violet";
    text.innerHTML = "'V' for VIOLET";
  } else if (event.key === "i") {
    output.style.background = "indigo";
    text.innerHTML = "'I' for INDIGO";
  } else if (event.key === "b") {
    output.style.background = "black";
    text.innerHTML = "'B' for BLACK";
    text.style.color = "white";
    text.style.border = "2px dotted white";
  } else if (event.key === "g") {
    output.style.background = "green";
    text.innerHTML = "'G' for GREEN";
  } else if (event.key === "y") {
    output.style.background = "yellow";
    text.innerHTML = "'Y' for YELLOW";
  } else if (event.key === "o") {
    output.style.background = "orange";
    text.innerHTML = "'O' for ORANGE";
  } else if (event.key === "r") {
    output.style.background = "red";
    text.innerHTML = "'R' for RED";
  } else {
    text.innerHTML = "WRONG PRESS!!!";
    output.style.background =
      "linear-gradient(120deg,rgb(3, 3, 124),rgb(187, 3, 3))";
    text.style.color = "white";
    text.style.border = "2px dotted white";
  }
});

window.addEventListener("keyup", () => {
  output.style.background = "";
  text.innerHTML = "Press Rainbow Alphabets";
  text.style.color = "black";
  text.style.border = "2px dotted black";
  output.style.transition = "none";
});
