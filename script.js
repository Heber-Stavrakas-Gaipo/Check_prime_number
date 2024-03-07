const form = document.getElementById("form");
const input = document.querySelector("#number");
const content = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  content.style.visibility = "visible";
  content.textContent = "Buscando resposta...";
  
  let number = parseInt(input.value);
  let divisor = 0;

  for (let count = 1; count <= number; count++) {
    if (number % count == 0) {
      divisor++;
    }
  }
  
  setTimeout(() => {
    if (divisor == 2) {
      content.textContent = "É PRIMO!";
    } else {
      content.textContent = "NÃO É PRIMO!";
    }
  }, 1000); // 1 second
});
