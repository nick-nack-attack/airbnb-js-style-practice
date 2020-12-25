/**
 * ARROW FUNCTIONS
 */

// WHEN USING ANON FUNCTION (i.e. PASSING INLINE CALLBACK), USE ARROW FUNCTION
const numbers = [1, 2, 3];
numbers.map((x) => {
    const y = x + 1;
    return x * y
});

// USE IMPLICIT RETURN WITH SINGLE STATEMENT RETURNING EXPRESSION
numbers.map((number) => `A string containing the number ${number}.`);

numbers.map((number) => {
    const nextNumber = number + 1;
    return `A sting containing the ${nextNumber}`;
});

numbers.map((number, index) => ({
    [index]: number,
}));

let cool = true;
foo (() => {
    bool = true;
});

// WRAP MULTIPLE LINE EXPRESSION IN ( )
['get', 'post', 'put'].map((httpMethod) => (
    Object.prototype.hasOwnProperty.call(
        httpMagicObject,
        httpMethod
    )
));

// ALWAYS INCLUDE ( ) AROUND ARGUMENTS
numbers.map((x) => x * x);

numbers.map((num) => (
    `A long string ...`
));

numbers.map((x) => {
    const y = x + 1;
    return x * y;
});

// DON'T CONFUSE => WITH <= OR >=

// ENFORCE LOCATION OF ARROW FUNCTION BODIES WITH IMPLICIT RETURNS



