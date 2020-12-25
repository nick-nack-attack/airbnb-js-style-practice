/**
 * MODULES
 */

// ALWAYS USE MODULES
import { es6 } from './AirbnbStyleGuide';
export default es6;

// DON'T USE WILDCARD IMPORTS
// import * as AirbnbStyleGuide from './AirbnbStyleGuide';
import AirbnbStyleGuide from './AirbnbStyleGuide';

// DON'T EXPORT DIRECTLY FROM IMPORT
// file es6.js
import { es6 } from './AirbnbStyleGuide';
export default es6;

// ONLY IMPORT FROM A PATH IN ONE PLACE
import foo, { bar, biz } from 'foo';

import bang, {
    dang,
    chang,
} from 'foobar';

// DON'T EXPORT MUTABLE BINDINGS
const doobar = 3;
export { doobar };

// PREFER DEFAULT EXPORT OVER NAMED EXPORT WITH SINGLE EXPORT
export default function boobar() {}

// PUT ALL IMPORTS ABOVE OTHER STATEMENTS

// INDENT MULTILINE IMPORTS
import {
    longA,
    longB,
    longC,
    longD,
} from 'certainModule';

// DISALLOW WEBPACK LOADER SYNTAX

// DO NOT INCLUDE JAVASCRIPT FILENAME EXTENSTIONS
import joeJohn from './joeJohn';