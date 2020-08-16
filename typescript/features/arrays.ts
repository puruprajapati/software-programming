const bikeMakers: string[] = [];
const carMakers = ['ford', 'toyota', 'chevy'];

const bikesByMake: string[][] = [];
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const car1 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates0 = [new Date(), '2020-09-09'];

const importantDates: (Date | string)[] = [];
importantDates.push('2020-09-09');
importantDates.push(new Date());
