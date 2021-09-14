// example 1
function myFunc1(n1, n2) {
  const sum = n1 + n2;
  return sum;
}
const result1 = myFunc1(10, 15);
console.log(result1);

// example 2

function myFunc2(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

const numbers = [10, 15, 25, 30, 35];
const result2 = myFunc2(numbers);
console.log(result2);
