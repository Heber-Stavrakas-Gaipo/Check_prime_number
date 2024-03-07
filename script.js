const form = document.getElementById("form");
const input = document.querySelector("#number");
const content = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let number = input.value;

  const result = {
    numberPerTwo: number / 2,
    numberPerThree: number / 3,
    numberPerFive: number / 5,
  };

  const validationNum = (num) => {
    if (number === "2") {
      return false;
    } else if (number === "3") {
      return false;
    } else if (number === "5") {
      return false;
    } else {
      return Number.isInteger(num);
    }
  };

  if (validationNum(result.numberPerTwo)) {
    content.innerHTML = "NÃO É PRIMO";
  } else if (validationNum(result.numberPerThree)) {
    content.innerHTML = "NÃO É PRIMO";
  } else if (validationNum(result.numberPerFive)) {
    content.innerHTML = "NÃO É PRIMO";
  } else if (Number.isInteger(Math.sqrt(number))) {
    content.innerHTML = "NÃO É PRIMO";
  } else if (Number.isInteger(Math.cbrt(number, 1 / 3))) {
    content.innerHTML = "NÃO É PRIMO";
  } else {
    content.innerHTML = "É PRIMO";
  }
});
