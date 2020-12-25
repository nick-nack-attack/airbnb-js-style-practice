/**
 * Comparison Operators & Equality
 */

// USE === AND !==
// DON'T USE == AND !=

// REMEMBER ...
/*

TRUE                FALSE
————                —————
objects             undefined
                    null
     <- Boolean ->
numbers (if not)    +0, -0, NaN
strings (if not)    empty string ''
 */

function bar() {}

// SHORTHAND BOOLEANS
// LONGHAND STRINGS AND NUMBERS
const isValid = true;
const name = 'Jack';
const numbers = [1, 2];

if (isValid) {
    // ...
}

if (name !== '') {
    // ...
}

if (numbers.length > 0) {
    // ...
}

// USE { } TO CREATE BLOCKS IN CASE AND DEFAULT CLAUSES (unless invoking something)
switch (foo) {
    case 1: {
        let x = 1;
        break;
    }
    case 2:
        bar();
        break;
    default: {
        let z = 100;
    }
}

// DON'T NEST TERNARIES
const foo = 100 > 1 ? 'yes' : 'crazy!';

// AVOID UNNECESSARY TERNARIES
const alpha = a || b;
const bravo = !!c;
const charlie = !c;

// USE ( ) WHEN MIXING OPERATORS
const boobar = (a && b < 0) || c > 0 || (d + 1 === 0);

const doobar = a ** b - (5 % d);

if (a || (b && c)) {
    // ...
}

const goobar = a + (b / c) * d;
