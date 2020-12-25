/**
 * FUNCTIONS
 */

// USE NAMED FUNCTION EXPRESSIONS INSTEAD OF FUNCTION DECLARATIONS
const myFunction = function theRealFunctionHere() {
    // ...
};

// WRAP IMMEDIATELY INVOKED FUNCTION EXPRESSIONS IN ( )
(function () {
    console.log('Welcome to the Internet. Please follow me');
}());

// NEVER DECLARE A FUNCTION IN A NON-FUNCTION BLOCK (if, while, etc).
// ASSIGN THE FUNCTION TO A VARIABLE

// A BLOCK IS A LIST OF STATEMENTS
// A FUNCTION DECLARATION IS NOT A STATEMENT
let test;
const currentUser = 'George';
if (currentUser) {
    test = () => {
        console.log('Yup');
    };
}

doingThings('Bob', 'Chuck', 'Ralph');

// DON'T NAME A PARAMETER ARGUMENTS
const doingThings = function doingTheseThingsSpecifically(name, options, args) {
    console.log(`${name} ${options} ${args}`)
}

// NEVER USE arguments, USE REST SYNTAX ...
function concatenateAll(...args) {
    return args.join('');
}

// NEVER MUTATE FUNCTION ARGUMENTS.
// USE DEFAULT PARAMETER SYNTAX
function handleThings(options = {}) {
    // ...
}

// AVOID SIDE EFFECTS WITH DEFAULT PARAMETERS

// PUT DEFAULT PARAMETERS LAST
function handleThose(name, options = {}) {
    // ...
}

// NEVER USE THE FUNCTION CONSTRUCTOR

// ADD SPACING IN A FUNCTION SIGNATURE
const xFunction = function () {};
const yFunction = function doNothingWithY() {};

// NEVER MUTATE PARAMETERS
function f2(obj) {
    const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
}

// NEVER REASSIGN PARAMETERS
function f3(a) {
    const b = a || 1;
}

function f4(a = 1) {
    // ...
}

// PREFER THE SPREAD OPERATOR ... ON VARIADIC FUNCTIONS
const listOfNumbers = [1, 2, 3, 4, 5];
console.log(...x);

const newDate = new Date (...[2016, 8, 5]);

// INDENT MULTILINE LISTS IN FUNCTIONS
// ADD TRAILING COMMA
function foo(
    bar,
    baz,
    quux,
) {
    // ...
}

console.log(
    foo,
    bar,
    baz,
);
