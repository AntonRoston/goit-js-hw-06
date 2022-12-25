// HTML містить список категорій ul#categories.
// Напиши скрипт, який:

//1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
//   В результаті, в консолі будуть виведені наступні повідомлення.


const categories = document.getElementById("categories");

console.log("Number of categories:",categories.children.length);


const items = categories.querySelectorAll(".item");
// console.log("Category:", items[0].textContent)
for(let item of items){
    console.log("Category:",item.firstElementChild.textContent)
    console.log("Elements:",item.lastElementChild.children.length)
}

