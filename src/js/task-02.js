const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientListEl = document.querySelector("#ingredients");
const makeNameIngredients = (content) => {
  return content.map((ingredient) => {
    const ingrItemEl = document.createElement("li");
    ingrItemEl.textContent = ingredient;
    ingrItemEl.classList.add("item");
    return ingrItemEl;
  });
};
const elements = makeNameIngredients(ingredients);
ingredientListEl.append(...elements);
console.log(makeNameIngredients);
