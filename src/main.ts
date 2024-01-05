// type Aliases are a name that we can use to refer to a type set

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

interface Guitarist {
  name?: string,
  active: boolean,
  albums: stringOrNumberArray
}

type userId = stringOrNumber;

// literal names
let myName: 'Jesse';

let userName: 'Dave' | 'John' | 'Amy'
userName = "Amy"

// functions
const add = (a: number, b: number): number => a + b;

const logMsg = (message: any): void => {
  console.log(message);
}

logMsg('Hello World');
logMsg(add(5, 5));

let subtract = function (c: number, d: number): number {
  return c - d;
}

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number) : number
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
}
logMsg(multiply(5, 5));

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
}

//default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c
}

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(undefined, 3));

// rest parameters
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
}
logMsg(total(1, 2, 3, 11));

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
}








