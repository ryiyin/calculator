const buttons = document.querySelectorAll(".num");
const display = document.querySelector(".display");
const operators = document.querySelectorAll(".operator");
const evalu = document.querySelector(".eval");
const clear = document.querySelector(".clear");
let acum = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display.innerHTML += button.innerHTML;
  });
});



operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (operator.value === "+" && display.innerHTML !== '') {
      acum = `${display.innerHTML}+`;
      display.innerHTML = '';
    }
    if (operator.value === "-" && display.innerHTML !== '') {
      acum = `${display.innerHTML}-`;
      display.innerHTML = "";
    }
    if (operator.value === "*" && display.innerHTML !== '') {
      acum = `${display.innerHTML}*`;
      display.innerHTML = "";
    }
    if (operator.value === "/" && display.innerHTML !== '') {
      acum = `${display.innerHTML}/`;
      display.innerHTML = "";
    }
  });
});

evalu.addEventListener("click", () => {
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

clear.addEventListener("click", () => {
  display.innerHTML = "";
});
