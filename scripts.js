let name = "prince";
let age = 70;
let major = "computer enginnering";

console.log("Hello, " + name);
console.log("Age: " + age);
console.log("Major: " + major);

function calculateSum(a, b) {
    let sum = a + b;
    alert("The sum of " + a + " and " + b + " is: " + sum);
}
calculateSum(15, 25);

let userInput = prompt("Enter a number to check if it's even or odd:");
let number = Number(userInput); // Convert string input to a number

if (isNaN(number)) {
    console.log("That's not a valid number!");
} else if (number % 2 === 0) {
    alert(number + " is Even.");
} else {
    alert(number + " is Odd.");
}

// 4. Loop through an array of fruits
let fruits = ["Apple", "Banana", "Mango", "Blueberry", "Kiwi"];

console.log("--- Fruit List ---");
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit " + (i + 1) + ": " + fruits[i]);
}
