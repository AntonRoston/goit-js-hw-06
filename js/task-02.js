const ul = document.getElementById("ingredients");
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
//* for...of
// for (const ingredient of ingredients){
//   const li = document.createElement("li")
//   li.textContent = ingredient;
//   li.classList.add("item");
//   ul.append(li)
// }

//* map
// const liEl = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join(" ");
// console.log("🚀 ~ liEl", liEl);

// ul.insertAdjacentHTML("beforeend", liEl);
// // ul.innerHTML = liEl;

//* reduce

const liCon = ingredients.reduce(
  (acc, ingredient) => (acc += `<li class="item">${ingredient}</li>`),
  ""
);
console.log("🚀 ~ liCon", liCon);
ul.insertAdjacentHTML("beforeend", liCon);
