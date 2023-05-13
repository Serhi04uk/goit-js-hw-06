const output = document.querySelector("#name-output");
console.log(output);

const textInput = document.querySelector("#name-input");
console.log(textInput);

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});
