"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; // assignment to less specific type
let c = a; // assignment more specific type
let d = 'world'; // assignment to less specific type
let e = 'world'; // assignment to less specific type
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else {
        return `${a}${b}`;
    }
};
let myVal = addOrConcat(1, 2, 'concat');
