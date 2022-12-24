const categories = document.getElementById("categories");

console.log("Number of categories:", categories.children.length);

const items = categories.querySelectorAll(".item");
// console.log("Category:", items[0].textContent)
for (let item of items) {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
}
