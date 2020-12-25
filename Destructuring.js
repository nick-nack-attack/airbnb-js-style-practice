/**
 * DESTRUCTURING
 */

// USE OBJECT DESTRUCTURING WHEN ACCESSING & USING MULTIPLE PROPS OF AN OBJECT
const superAdmin = {
    firstName: 'Joe',
    lastName: 'Schmo'
}

const fullName = ({ firstName, lastName }) => {
    return `${firstName} ${lastName}`
};
console.log(fullName(superAdmin)) // => Joe Schmo

// USE ARRAY DESTRUCTURING
const niceArray = [1, 2, 3, 4, 5];
const [first, second] = niceArray;
console.log(first, second); // => 1 2

// USE OBJECT DESTRUCTURING FOR MULTIPLE RETURN VALUES
const processInput = input => {
    return { left, right, top, bottom };
};

const { left, bottom } = processInput(input);

