// file name"arrow-function.js
// 1:
const myFunc1 = () => 99;
console.log(myFunc1());

// 02:
const myFunc2 = (x) => x * 12;
console.log(myFunc2(5));

// 03:
const myFunc3 = (x, y) => (x + y) / 4;
console.log(myFunc3(4, 5));

// 04:
const myFunc4 = (x, y) => {
  const a = x + 5;
  const b = y + 5;
  const z = a * b;
  return z;
};

console.log(myFunc4(4, 5));
