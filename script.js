let passField = document.getElementById("pass");
let passConfField = document.getElementById("confirmPass");
let confP = document.getElementById("confP");

let passStr = "";
let passConfStr = "";

//Stores the variable from password input field
passField.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    return (passStr = passStr.slice(0, -1));
  }
  switch (event.key) {
    case "Alt":
    case "Control":
    case "Shift":
    case "Tab":
    case "Escape":
    case "Enter":
    case "ArrowLeft":
    case "ArrowUp":
    case "ArrowDown":
    case "ArrowRight":
      return false;
  }

  return (passStr += event.key);
});

//Stores the variable from confirm password input field
passConfField.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    return (passConfStr = passConfStr.slice(0, -1));
  }
  switch (event.key) {
    case "Alt":
    case "Control":
    case "Shift":
    case "Tab":
    case "Escape":
    case "Enter":
    case "ArrowLeft":
    case "ArrowUp":
    case "ArrowDown":
    case "ArrowRight":
      return false;
  }

  return (passConfStr += event.key);
});

//Initial default state with style for border and span
if (passConfStr === "" || passStr !== passConfStr) {
  confP.textContent = "✖";
  confP.style.color = "#79008e";
  passConfField.style.borderColor = "#79008e";
}

//Re evaluates everytime you finish typing and styles border and span
passConfField.addEventListener("keyup", () => {
  if (passConfStr === "" || passStr !== passConfStr) {
    confP.textContent = "✖";
    confP.style.color = "#79008e";
    passConfField.style.borderColor = "#79008e";
  } else if (passStr === passConfStr) {
    confP.textContent = "✓";
    confP.style.color = "#07008d";
    passConfField.style.borderColor = "#07008d";
  }
});
