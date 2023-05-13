const input = document.querySelector("#validation-input");
input.addEventListener("blur", temp);
function temp() {
  if (+input.dataset.length === input.value.length) {
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

temp();
