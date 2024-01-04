let stringArr = ['one', 'hey', 'Tim']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('Paul')

guitars[0] = 1984
guitars.unshift('Jim')

guitars = stringArr
mixedData = guitars

let test = []
let bands: string[] = []
bands.push('Van Halen')

// tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true]

let mixed = ['John', 1, false]

myTuple[1] = 42

// Objects
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
  prop1: 'test',
  prop2: true
}

exampleObj.prop1 = 'john'

interface Guitarist {
  name?: string,
  active: boolean,
  albums: (string | number)[],
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: ['Van Halen I', 'Van Halen II', 5150]
}
let JP: Guitarist = {
  name: 'Jimmy',
  active: true,
  albums: ['IV', 'Houses of the Holy', 'Physical Graffiti']
}

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}`
  }
  return 'Hello'
}

console.log(greetGuitarist(JP))

// enums
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.C)












