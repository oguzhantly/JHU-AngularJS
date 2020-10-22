let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);

function above5Filter(value) {
  return value > 5;
}
let filteredNumberArray = numberArray.filter(above5Filter);
console.log("Filtered number array: ", filteredNumberArray);

let shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];
console.log("Shopping List: ", shoppingList);

let searchValue = "Bismol";
function containsFilter(value) {
  return value.indexOf(searchValue) !== -1;
}
let searchedShoppingList = shoppingList.filter(containsFilter);
console.log("Searched Shopping List: ", searchedShoppingList);
