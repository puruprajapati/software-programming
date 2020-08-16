const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// array
const pepsi = ['brown', true, 40];
pepsi[0] = true;

// tuple
const coke: [string, boolean, number] = ['brown', true, 40];
coke[0] = true;

// type alias
type Drink = [string, boolean, number];
const mirinda: Drink = ['orange', true, 30];
const sprite: Drink = ['clear', true, 35];

// why?
const carSpecs: [number, number] = [400, 3354];
const carStats = {
  hp: 300,
  wt: 3354,
};
