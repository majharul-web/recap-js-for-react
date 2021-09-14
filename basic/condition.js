// condition
let a = 10,
  b = 5,
  c = 12;

if (a > b && a > c) {
  console.log('a is large', a);
} else if (b > a && b > c) {
  console.log('b is large', b);
} else {
  console.log('c is large', c);
}

// for loop
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

// while loop
let number = 0;
while (number <= 10) {
  console.log(number);
  number++;
}

// do while
let num = 30;
do {
  console.log(num);
  num++;
} while (num <= 50);
