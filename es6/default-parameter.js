// file name:default-parameter.js

function add(x, y = 10) {
  const z = x + y;
  return z;
}

// const result = addMultiple(5);
const result = add(5, 20);
console.log(result);

// rest parameter

function addMultiple(a, ...b) {
  console.log(a);
  console.log(b);
  b.map((e) => console.log(e));
}
addMultiple(5, 20, 30, 40, 45);
