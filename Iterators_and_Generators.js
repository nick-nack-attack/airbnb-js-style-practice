// DON'T USE ITERATORS
// USE HIGHER-ORDER FUNCTION INSTEAD
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

const increasedByOne = numbers.map((num) => num + 1);
console.log(increasedByOne); // [ 2, 3, 4, 5, 6 ]

// DON'T USE GENERATORS, lulz

