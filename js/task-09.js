function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector(".change-color");

inputEl.addEventListener("click", () => {
  const color = getRandomHexColor();

  document.body.style.background = color;
  const span = document.querySelector(".color");

  span.textContent = color;
});
