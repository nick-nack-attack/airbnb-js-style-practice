/**
 * OBJECTS
 */
// use literal syntax
// instead of => const house = new Object() ....
const house = {};

// to define all properties of an object in one place
// use computed property names ...
const getKey = k => {
    return `a key named ${k}`
};

const apartment = {
    id: 1,
    city: 'Minneapolis',
    [getKey('enabled')]: true // put the function in square brackets
};

// use object method shorthand
const pizza = {
    toppings: 1,
    addTopping: value => {
        return pizza.toppings + value;
    }
};

// use property value shorthand
// group shorthand props at the beginning
const darthVader = 'Darth Vader';
const yoda = 'Yoda';
const randomObject = {
    darthVader,         // not darthVader: darthVader
    yoda,               // another shorthand
    numOfJedi: 2,
    lightSabers: 2
};

// unlike JSON, only quote props if they're invalid identifiers
const good = {
    a: true,
    b: false,
    "weird-thing": 5
};

// don't call Object.prototype methods directly
// ex. hasOwnProperty, isPrototypeOf, ...
const has = Object.prototype.hasOwnProperty; // cache the lookup in module scope
console.log(
    has.call(object, key)
);
/* OR */
import has from 'has';
console.log(
    has(object, key)
);

// prefer the object spread operator
const theOriginal = { a: 1, b: 2 };
const aCopy = { ...theOriginal, c: 3 };     // => { a: 1, b: 2, c: 3 }

const { a, ...noAHere } = aCopy;            // noAHere => { b: 2, c: 3 }
