type One = string;
type Two = string | number;
type Three = 'hello'

// convert to more or less specific
let a: One = 'hello';
let b = a as Two // assignment to less specific type
let c = a as Three // assignment more specific type

let d = <One> 'world' // assignment to less specific type
let e = <string | number>'world' // assignment to less specific type

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if (c === 'add') {
    return a + b;
  } else {
    return `${a}${b}`;
  }
}

let myVal: string = addOrConcat(1, 2, 'concat') as string;