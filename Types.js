/**
 * Types
 */

// PRIMITIVES
    
const aString = 'This is a string';
const aNumber = 100;
const aBoolean = true;
const aNull = null;
const aUndefined = undefined;
const aSymbol = Symbol("Diamond");
const aBigint = 1234567891011121314151617181920;

// let variable is mutable
const bedroomCount = 1;
let bedrooms = bedroomCount;

bedrooms = 10;

console.log(bedroomCount, bedrooms); // 1, 10

// COMPLEX

const someObject = { name: "Nick" };
const someFunction = () => {
    return 'Returning a string'
}

const someArray = [1, 2];
const anotherArray = someArray;
someArray[0] = 100;

console.log(
    typeof someObject,          // object
    typeof someFunction(),      // string
    someArray[0],               // 100
    anotherArray[0],            // 100
);