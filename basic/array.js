const numbers = [10, 20, 25, 27, 31, 45, 85, 98, 65, 74];
console.log(numbers);

// use index
console.log(numbers[3]);

// use push
numbers.push(921);
console.log(numbers);

// use pop
numbers.pop(921);
console.log(numbers);

// use includes
console.log(numbers.includes(85));

// use indexOf
console.log(numbers.indexOf(27));

// use splice
const spliceArr = numbers.splice(2, 3);
console.log(spliceArr);

const spliceArr2 = numbers.splice(2, 3, 588, 478, 245);
console.log(spliceArr2);
console.log(numbers);

// use slice
const sliceArr = numbers.slice(3, 7);
console.log(sliceArr);

if (sliceArr.indexOf(65) != -1) console.log('65 exist');

// array length
console.log(sliceArr.length);

// array short
const friends = ['rani', 'jemi', 'rahul', 'simul'];
const friendsShorted = friends.sort();
console.log(friendsShorted.reverse());

const newNumbers = [12, 25, 6, 3, 78, 15, 89, 75, 45, 96, 3];
const newShorted = newNumbers.sort((a, b) => a - b);
console.log(newShorted);
