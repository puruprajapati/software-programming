// type annotation - telling typescript that we are goint to use only number for apple
let apple: number = 5;
apple = 10;

let orange = 6; // type inference
orange = 7;

let grape; // type any
grape = 9;

let speed: string = 'fast';
let hasName: boolean = true;
let nothing: undefined = undefined;
let nothingMuch: null = null;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Funciton that returns the 'any' type
const json = '{"x": 10, "y": 20}';
//const coordinates = JSON.parse(json);
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue', 'word'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'word') {
    foundWord = true;
  }
}

// 3) variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
