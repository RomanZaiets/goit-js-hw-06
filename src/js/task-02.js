// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.






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
