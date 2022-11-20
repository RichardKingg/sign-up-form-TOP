let passField = document.getElementById("pass");
let passConfField = document.getElementById("confirmPass");
let confP = document.getElementById("confP");
let button = document.querySelector("button");

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
  button.disabled = true;
}

//Re evaluates everytime you finish typing at confirm password input and styles its border and span
passConfField.addEventListener("keyup", () => {
  if (passConfStr === "" || passStr !== passConfStr) {
    confP.textContent = "✖";
    confP.style.color = "#79008e";
    passConfField.style.borderColor = "#79008e";
    button.disabled = true;
  } else if (passStr === passConfStr) {
    confP.textContent = "✓";
    confP.style.color = "#07008d";
    passConfField.style.borderColor = "#07008d";
    button.disabled = false;
  }
});

//Checks to see if password input and confirm password input still are the same after using BACKSPACE
passField.addEventListener("keyup", () => {
  if (passStr !== passConfStr) {
    confP.textContent = "✖";
    confP.style.color = "#79008e";
    passConfField.style.borderColor = "#79008e";
    button.disabled = true;
  } else if (passStr === passConfStr) {
    confP.textContent = "✓";
    confP.style.color = "#07008d";
    passConfField.style.borderColor = "#07008d";
    button.disabled = false;
  }
});
