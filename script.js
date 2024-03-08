const form = document.getElementById("form");
const input = document.querySelector("#number");
const content = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let number = parseInt(input.value);
  let divisor = 0;

  content.style.visibility = "visible";
  content.textContent = "Buscando resposta...";

  const primeNumber = (increment) => {
    if (increment == undefined) {
      return (content.innerHTML = `PRIMO <span id="check" class="material-symbols-outlined">
      check
      </span>`);
    }
    return (content.innerHTML = `PRIMO <span id="check" class="material-symbols-outlined">
  check
  </span> ${increment}`);
  };

  const notPrimeNumber = (increment) => {
    if (increment == undefined) {
      return (content.innerHTML = `NÃO PRIMO <span id="wrong" class="material-symbols-outlined">
      close
      </span>`);
    }
    return (content.innerHTML = `NÃO PRIMO <span id="wrong" class="material-symbols-outlined">
  close
  </span> ${increment}`);
  };

  if (number == 0) {
    return notPrimeNumber(`</br> O número zero possui infinitos divisores!`);
  }

  for (let count = 1; count <= number; count++) {
    if (number % count == 0) {
      divisor++;
      if (divisor > 2) {
        break;
      }
    }
  }

  setTimeout(() => {
    if (divisor == 2) {
      return primeNumber();
    } else {
      return notPrimeNumber();
    }
  }, 500); // 1 second
});
