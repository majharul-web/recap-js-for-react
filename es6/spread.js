// file name:spread.js

// example :1
const arr = [10, 15, 25, 30, 28];
console.log(arr);

const newArr = [...arr, 'new'];
console.log(newArr);

// example 01
const maxNum = Math.max(...arr);
console.log(maxNum);
