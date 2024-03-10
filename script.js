const form = document.getElementById("form");
const input = document.querySelector("#number");
const content = document.getElementById("result");

const generateOutput = (message, type, icon, increment = "") => {
  const iconHTML = `<span id=${type} class="material-symbols-outlined">${icon}</span>`;
  content.innerHTML = `${message} ${iconHTML} </br> ${increment}`;
};

document.addEventListener("input", () => {
  content.style.visibility = "hidden";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let number = parseInt(input.value);
  let divisor = 0;

  content.style.visibility = "visible";

  if (number == 0) {
    return generateOutput("NÃO PRIMO", "wrong", "close", "O número zero possui infinitos divisores!");
  }

  for (let count = 1; count <= number; count++) {
    if (number % count == 0) {
      divisor++;
      if (divisor > 2) {
        break;
      }
    }
  }

  if (divisor == 2) {
    return generateOutput("PRIMO", "check", "check");
  } else {
    return generateOutput("NÃO PRIMO", "wrong", "close");
  }
});
