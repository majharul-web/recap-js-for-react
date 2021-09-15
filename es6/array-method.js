// array-method.js
const numbers = [10, 15, 25, 30, 35];
// map
const newNumbers1 = numbers.map((num) => num * 2);
console.log(newNumbers1);

// filter
const newNumbers2 = numbers.filter((num) => num % 2 === 0);
console.log(newNumbers2);

// find
const newNumbers3 = numbers.find((num) => num % 2 === 0);
console.log(newNumbers3);

// foreach
numbers.forEach((num) => console.log(num));
