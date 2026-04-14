

let colorBox = document.getElementById("color-box");
let changeBtn = document.getElementById("change-btn");
let checkBtn = document.getElementById("check-btn");
let guessInput = document.getElementById("guess");
let result = document.getElementById("result");

let currentColor = "";

let colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "gray", "black", "Skyblue", "brown"];

function changecolors() {
  let index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

changeBtn.addEventListener("click", () => {
  currentColor = changecolors();
  colorBox.style.backgroundColor = currentColor;
  result.textContent = "";
  guessInput.value = "";
});

checkBtn.addEventListener("click", () => {
  let userGuess = guessInput.value.trim().toLowerCase();
  if (userGuess === currentColor) {
    result.textContent = "✅ Correct!";
    result.style.color = "green";
  } 
  else {
    result.textContent = `❌ Wrong! It was ${currentColor}`;
    result.style.color = "red";
  }
});
