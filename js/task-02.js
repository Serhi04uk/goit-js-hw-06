const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const item1 = document.querySelector("#ingredients");

const elem = ingredients.map((i) => {
  const li = document.createElement("li");
  li.textContent = [i];
  li.classList.add("item");
  return li;
});

console.log(elem);

item1.append(...elem);
