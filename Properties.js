/**
 * PROPERTIES
 */

// USE DOT NOTATION WHEN ACCESSING PROPERTIES
const luke = {
    jedi: true,
    age: 28,
};

const isJedi = luke.jedi;

// USE BRACKET NOTATION [] WHEN ACCESSING PROPS WITH A VARIABLE

function getProp(prop) {
    return luke[prop];
}

const aJedi = getProp('jedi');

// USE EXPONENT OPERATOR ** WITH EXPONENTS
const binary = 2 ** 10;