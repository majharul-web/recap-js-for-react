// destructuring.js

// array simple way
const numbers = [10, 12, 14, 17, 19, 16, 25, 24];
const [a, , , b, , c] = numbers;
console.log(a, b, c);

// object
const person = {
  name: 'jony',
  address: 'dinajpur',
  hobby: ['game', 'song', 'garden'],
  job: {
    first: 'teacher',
    second: 'Engineer',
    third: {
      bank1: 'sonali bank',
      bank2: 'rupali bank',
      third: 'grameen bank',
    },
  },
  salary: 70000,
};

const {
  name: myName,
  address,
  job: { first },
} = person;
console.log(myName, address, first);

const { bank1 } = person.job.third;
console.log(bank1);
