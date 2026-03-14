console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = ["Dumplings", "MacAndCheese", "Chicken", "Burgers", "Tacos", "Sandwiches"];
// 2. Loop through the list and print: "One of my favorite foods is ______."
for (let i = 0; i < favoriteFoods.length; i++) {
    console.log(`One of my favorite foods is ${favoriteFoods[i]}.`);
}
// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.
let rank = ["#1", "#2", "#3", "#4", "#5", "#6"];
console.log(`My ${rank[0]} favorite food is ${favoriteFoods[0]}.`);
console.log(`My ${rank[1]} favorite food is ${favoriteFoods[1]}.`);
console.log(`My ${rank[2]} favorite food is ${favoriteFoods[2]}.`);
console.log(`My ${rank[3]} favorite food is ${favoriteFoods[3]}.`);
console.log(`My ${rank[4]} favorite food is ${favoriteFoods[4]}.`);
console.log(`My ${rank[5]} favorite food is ${favoriteFoods[5]}.`);

// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."
function printFoodRecommendation(favoriteFoods) {console.log(`Have you ever tried ${favoriteFoods}?`);
console.log(`I always recommend ${favoriteFoods} to friends.`);
console.log(`Trust me — ${favoriteFoods} is delicious.`);}


// 4b. Call the function at least 3 times
printFoodRecommendation(favoriteFoods[0]);
printFoodRecommendation(favoriteFoods[1]);
printFoodRecommendation(favoriteFoods[2]);

// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Donuts" would be.
        let foodsWithA = [];
        for (let i = 0; i < friendFavorites.length; i++) {
            if (friendFavorites[i].includes("a")) {
                foodsWithA.push(friendFavorites[i]);
            }
        }


// 6. Store the result in an array called foodsWithA. Print out the array.

console.log(foodsWithA);

// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
let longFoodNames = ["burgers","sandwiches","dumplings","chicken","macandcheese"];
// 8. Create another array shortFoodNames for foods 6 characters or shorter.
let shortFoodNames = ["tacos","pizza","sushi","pasta","ramen","pho","pork","soda","cake","pie","soup"];
// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."
console.log(longFoodNames);
console.log(shortFoodNames);
if (longFoodNames.length > shortFoodNames.length) {
    console.log("There are more long-named foods.");
} else if (longFoodNames.length < shortFoodNames.length) {
    console.log("There are more short-named foods.");
} 
// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
let longestFoodName = "";
for (let i = 0; i < longFoodNames.length; i++) {
    if (longFoodNames[i].length > longestFoodName.length) {
        longestFoodName = longFoodNames[i];
    }
}
console.log(`The longest food name in the list is ${longestFoodName} with ${longestFoodName.length} characters.`);  