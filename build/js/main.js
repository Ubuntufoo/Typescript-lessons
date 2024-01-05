"use strict";
// type Aliases are a name that we can use to refer to a type set
// literal names
let myName;
let userName;
userName = "Amy";
// functions
const add = (a, b) => a + b;
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello World');
logMsg(add(5, 5));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//   (a: number, b: number) : number
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(5, 5));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(undefined, 3));
// rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 11));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
