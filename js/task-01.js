const text = document.querySelectorAll(".item");
console.log(`Number of categories: ${text.length}`);

const text1 = text.forEach(function (name) {
  const categoriName = name.firstElementChild.textContent;
  console.log(`Category: ${categoriName}`);
  const elements = name.lastElementChild.children.length;

  console.log(`Elements: ${elements}`);
});
