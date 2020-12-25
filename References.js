/**
 * REFERENCES
 */

// instead of
// var kitchen = 1 ...
const kitchen = 1;

// use let to reassign a reference, not const
// let is block-scoped, not function scoped ...
let problem = 1;
if (problem) {
    problem += 1;
}

// const and let only exist in the blocks each is defined in
// { LET => EXISTS } LET => REFERENCE ERROR