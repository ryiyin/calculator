const buttons = document.querySelectorAll(".num");
const display = document.querySelector(".display");
const operators = document.querySelectorAll(".operator");
const evalu = document.querySelector(".eval");
const clearDisplay = document.querySelector(".clear-entry");
const delet = document.querySelector(".delete");
const point = document.querySelector(".point");
const clearAll = document.querySelector(".clear-all");
let acum = 0;

const opciones = { minimumIntegerDigits: 1, minimumFractionDigits: 0, maximumFractionDigits: 0, useGrouping: true, groupingSize: 3, };
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
  if (event.key === "%" && display.innerHTML !== "") {
    acum = `${display.innerHTML}%`;
    display.innerHTML = "";
  }
});

//detect the button Equal from keyboard and resolve the operator
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    acum.includes("+")
      ? (display.innerHTML = parseFloat(acum) + parseFloat(display.innerHTML))
      : "";
    acum.includes("-")
      ? (display.innerHTML = parseFloat(acum) - parseFloat(display.innerHTML))
      : "";
    acum.includes("*")
      ? (display.innerHTML = parseFloat(acum) * parseFloat(display.innerHTML))
      : "";
    acum.includes("/")
      ? (display.innerHTML = parseFloat(acum) / parseFloat(display.innerHTML))
      : "";
    acum.includes("%")
      ? (display.innerHTML =
          (parseFloat(acum) * parseFloat(display.innerHTML)) / 100)
      : "";
  }
});

//detect point on the keyboard
document.addEventListener("keydown", (event) => {
  if (event.key === ".") {
    let padArray = display.innerHTML.split("");
    !padArray.includes(".") ? (display.innerHTML += ".") : null;
  }
});

//detect point on the pad
point.addEventListener("mouseup", () => {
  let padArray = display.innerHTML.split("");
  !padArray.includes(".") ? (display.innerHTML += ".") : null;
});

//detect buttons on the pad
buttons.forEach((button) => {
  button.addEventListener("mouseup", () => {
    if (parseInt(display.innerHTML.length) <= 16) {
      
      
      
       com(button)
    }
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
    if (operator.value === "%" && display.innerHTML !== "") {
      acum = `${display.innerHTML}%`;
      display.innerHTML = "";
    }
  });
});

//make operations when you press the button "=" on the pad
evalu.addEventListener("mouseup", () => {
  acum.includes("+")
    ? (display.innerHTML = parseFloat(acum) + parseFloat(display.innerHTML))
    : "";
  acum.includes("-")
    ? (display.innerHTML = parseFloat(acum) - parseFloat(display.innerHTML))
    : "";
  acum.includes("*")
    ? (display.innerHTML = parseFloat(acum) * parseFloat(display.innerHTML))
    : "";
  acum.includes("/")
    ? (display.innerHTML = parseFloat(acum) / parseFloat(display.innerHTML))
    : "";
  acum.includes("%")
    ? (display.innerHTML =
        (parseFloat(acum) * parseFloat(display.innerHTML)) / 100)
    : "";
});

//clear-entry display
clearDisplay.addEventListener("mouseup", () => {
  console.log("clear");
  display.innerHTML = "";
});

//clear all the claculator as a reset
clearAll.addEventListener("click", () => {
  acum = "";
  display.innerHTML = "";
});

//delete the last number from the display
delet.addEventListener("mouseup", () => {
  display.innerHTML = display.innerHTML.slice(0, -1);
});

//remove the last number from the display with keyboard "<-"
document.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    display.innerHTML = display.innerHTML.slice(0, -1);
  }
});

//clear all the claculator as a reset from keyboard "supr"
document.addEventListener("keydown", (event) => {
  if (event.key === "Delete") {
    display.innerHTML = "";
  }
});
let  arra = []
let com = (button)=>{
  arra.push(button.innerHTML)
  console.log(arra)
  let pass = arra.join("")
  /* console.log(pass) */
  return display.innerHTML= (Number(pass).toLocaleString('es-US', opciones))
}


