const buttons = document.querySelectorAll(".num");
const display = document.querySelector(".display");
const operators = document.querySelectorAll(".operator");
const evalu = document.querySelector(".eval");
const clear = document.querySelector(".clear");
let acum = 0;

//detect the numbers and operators from keyboard
document.addEventListener("keydown", (event) => {
  console.log(event.key);
  event.key >= 0 && event.key <= 9 ? (display.innerHTML += event.key) : null;
  if (event.key == "+" && display.innerHTML !== "") {
    acum = `${display.innerHTML}+`;
    display.innerHTML = "";
  }
  if (event.key == "-" && display.innerHTML !== "") {
    acum = `${display.innerHTML}-`;
    display.innerHTML = "";
  }
  if (event.key == "*" && display.innerHTML !== "") {
    acum = `${display.innerHTML}*`;
    display.innerHTML = "";
  }
  if (event.key == "/" && display.innerHTML !== "") {
    acum = `${display.innerHTML}/`;
    display.innerHTML = "";
  }
  
});

//detect the button Equal from keyboard and resolve the operator
document.addEventListener("keydown", (event) => {
  if(event.key === "Enter"){ 
  acum.includes("+")
    ? (display.innerHTML = parseInt(acum) + parseInt(display.innerHTML))
    : "";
  acum.includes("-")
    ? (display.innerHTML = parseInt(acum) - parseInt(display.innerHTML))
    : "";
  acum.includes("*")
    ? (display.innerHTML = parseInt(acum) * parseInt(display.innerHTML))
    : "";
  acum.includes("/")
    ? (display.innerHTML = parseInt(acum) / parseInt(display.innerHTML))
    : "";
  }
});

//detect buttons on the pad
buttons.forEach((button) => {
  button.addEventListener("mouseup", () => {
    display.innerHTML += button.innerHTML;
  });
});

//detect operators buttons on the pad
operators.forEach((operator) => {
  operator.addEventListener("mouseup", () => {
    if (operator.value === "+" && display.innerHTML !== "") {
      acum = `${display.innerHTML}+`;
      display.innerHTML = "";
    }
    if (operator.value === "-" && display.innerHTML !== "") {
      acum = `${display.innerHTML}-`;
      display.innerHTML = "";
    }
    if (operator.value === "*" && display.innerHTML !== "") {
      acum = `${display.innerHTML}*`;
      display.innerHTML = "";
    }
    if (operator.value === "/" && display.innerHTML !== "") {
      acum = `${display.innerHTML}/`;
      display.innerHTML = "";
    }
  });
});

//make operations when you press the button "=" on the pad
evalu.addEventListener("mouseup", () => {
  acum.includes("+")
    ? (display.innerHTML = parseInt(acum) + parseInt(display.innerHTML))
    : "";
  acum.includes("-")
    ? (display.innerHTML = parseInt(acum) - parseInt(display.innerHTML))
    : "";
  acum.includes("*")
    ? (display.innerHTML = parseInt(acum) * parseInt(display.innerHTML))
    : "";
  acum.includes("/")
    ? (display.innerHTML = parseInt(acum) / parseInt(display.innerHTML))
    : "";
});

//clear pad
clear.addEventListener("mouseup", () => {
  console.log("clear")
  display.innerHTML = "";
});
