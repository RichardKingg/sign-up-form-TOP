let passField = document.getElementById("pass");
let passConfField = document.getElementById("confirmPass");
let confP = document.getElementById("confP");

let passStr = "";
let passConfStr = "";

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
