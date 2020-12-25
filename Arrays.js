/**
 * Arrays
 */

// use literal syntax for array creation —
// instead of const someItems = new Array();
const vegetables = [];


// use array push —
// instead of direct assignment to add items
vegetables.push('Lettuce', 'Tomato');


// use spreads to copy
const copyVeggies = [...vegetables];
console.log(copyVeggies); // => [ 'Lettuce', 'Tomato' ]


/*
// use spreads to convert iterable object to an array...
const allFoos = document.querySelectorAll('.foo');
const fooNodes = [...allFoos];
*/


// use Array.from to convert an array-like object to an array
const aCertainPresident = { 0: 'Abraham', 1: 'Lincoln', 2: 'President', length: 3 };
const newArray = Array.from(aCertainPresident);
console.log(newArray); // => Abraham,Lincoln,President

// use Array.from instead of spread for mapping over iterables
// hint: this avoids creating an intermediate array
const printThis = value => console.log('Value: ' + value);
const mapOverPrez = Array.from(aCertainPresident, printThis); // => Value: Abraham \n Value Lincoln \n Value: President
console.log(mapOverPrez); // => [ undefined, undefined, undefined ]

// USE RETURN STATEMENTS IN ARRAY CALLBACK
// OK TO OMIT `RETURN` IF SINGLE STATEMENT
const books = [
    {
        subject: "Finnegans Wake",
        author: "Joyce"
    },
    {
        subject: "Odyssey",
        author: "Homer"
    }
];

const filterThroughBooks = books.filter(item => {
    const { subject, author } = item;
    return subject === 'Odyssey';
});

console.log(filterThroughBooks); // => [ { subject: 'Odyssey', author: 'Homer' } ]

const numbers = [[0, 1], [2, 3], [4, 5]];

const reduceNumbers = numbers.reduce((acc, item, index) => {
    const flatten = acc.concat(item);
    return flatten
});

console.log(reduceNumbers); // => [ 0, 1, 2, 3, 4, 5 ]
