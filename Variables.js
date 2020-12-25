/**
 * Variables
 */

// ALWAYS USE CONST OR LET
const superPower = 'true';

// USE ONE CONST OR LET PER VARIABLE DECLARED
// GROUPS ALL CONSTs AND LETs
const items = [1, 2];
const goSportsTeam = true;
const dragonball = 'z';
let age = 1000;
let length = 10;

// LET AND CONST ARE BLOCK SCOPED — NOT FUNCTION SCOPED

// DON'T CHAIN VARIABLE ASSIGNMENTS
(function example() {
    let a = 1;
    let b = 2;
    let c = 3;
}());

// AVOID USING UNARY IN/DECREMENTS
const array = [1, 2, 3];
let num = 1;
num += 1;
num -= 1;

const sum = array.reduce((a, b) => a + b, 0);
const truthyCount = array.filter(Boolean).length;

// NO LINEBREAKS BEFORE OR AFTER = ASSIGNMENT
const foo = (
  looooooooooooongFunction()
);

// DISALLOW UNUSED VARIABLES

