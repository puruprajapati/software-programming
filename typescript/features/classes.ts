/*
class Vehicle {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  public honk(): void {
    console.log('beep');
  }

  protected light(): void {
    console.log('neon');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }

  startDrivinProcess(): void {
    this.drive();
  }

  switchOnLight(): void {
    this.light();
  }
}

const car = new Car('orange');
car.honk();
car.startDrivinProcess();
console.log(car.color);
*/

class Vehicle {
  constructor(public color: string) {}

  public honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivinProcess(): void {
    this.drive();
  }
}

const car = new Car(4, 'orange');
car.honk();
car.startDrivinProcess();
console.log(car.color);
