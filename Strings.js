/**
 * STRINGS
 */

// SINGLE QUOTES FOR STRINGS
const superMan = 'Clark Kent';

// DON'T BREAK TEXT OVER 100 CHARACTERS

// USE TEMPLATE STRINGS INSTEAD OF CONCATENATION
const sayHi = name => {
    return `How are you, ${name}?`;
};

// DON'T USE eval() on a string

// PREFER NOT TO USE ESCAPE CHARACTERS IN STRINGS
const name = 'Bob';
const quote = `my name is ${name}`;