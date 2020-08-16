/*
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

const printVehicle = (vechicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vechicle.name}`);
  console.log(`Year: ${vechicle.year}`);
  console.log(`Broken?: ${vechicle.broken}`);
};

printVehicle(oldCivic);
*/

/*
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  additionalFeature: 'ola',
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
*/

interface Reportable {
  summary(): string;
}

const drinks = {
  color: 'brown',
  carbonated: 'true',
  sugar: 40,
  summary(): string {
    return `My drink has  ${this.sugar} grams of sugar`;
  },
};

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drinks);
