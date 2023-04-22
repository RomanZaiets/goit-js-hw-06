const categoriesListEl = document.querySelectorAll(".item");

console.log(`Number of categories:${categoriesListEl.length}`);
categoriesListEl.forEach((element) => {
  console.log(`Category:${element.firstElementChild.textContent}`);
  console.log(
    `Elements:${element.lastElementChild.querySelectorAll("li").length}`
  );
});
