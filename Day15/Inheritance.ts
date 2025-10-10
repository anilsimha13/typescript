class Car {
  name: string;
  model: string;
  color: string;

  constructor(name: string, model: string, color: string) {
    this.name = name;
    this.model = model;
    this.color = color;
  }
  start() {
    console.log(`${this.name} is starting.`);
  }
  stop() {
    console.log(`${this.name} is stopping.`);
  }
  displayInfo() {
    console.log(`Car Name: ${this.name}, Model: ${this.model}`);
  }
}

class Honda extends Car {
  year: number;

  constructor(name: string, model: string, year: number, color: string) {
    super(name, model, color);
    this.year = year;
  }
  start() {
    console.log(`Honda is starting.`);
  }
  stop() {
    console.log(`Honda is stopping.`);
  }
  yom() {
    console.log(
      `Car Name: ${this.name}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`
    );
  }
}

class Maruthi extends Car {
  year: number;
  constructor(name: string, model: string, year: number, color: string) {
    super(name, model, color);
    this.year = year;
  }
  start() {
    console.log("Maruthis is starting");
  }
  stop() {
    console.log("Maruthi is stopping");
  }

  yom() {
    console.log("Maruthi is created on the year " + this.year);
  }

  displayInfo(): void {
    console.log(
      `Car Name: ${this.name}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`
    );
  }
}

//Usage

//HONDA

let honda = new Honda("Honda", "City", 2020, "Red");
console.log(honda.color); // Red
console.log(honda.model); // City
console.log(honda.name); // Honda
console.log(honda.year); // 2020
honda.start(); // Honda is starting.
honda.displayInfo(); // Car Name: Honda, Model: City, Year: 2020
honda.stop(); // Honda is stopping.
honda.yom(); // Car Name: Honda, Model: City, Year: 2020, Color: Red

//MARUTHI

let maruthi = new Maruthi("Maruthi", "Swift", 2019, "Blue");
console.log(maruthi.color); // Blue
console.log(maruthi.model); // Swift
console.log(maruthi.name); // Maruthi
console.log(maruthi.year); // 2019
maruthi.start(); // Maruthis is starting
maruthi.displayInfo(); // Car Name: Maruthi, Model: Swift, Year: 2019, Color: Blue
maruthi.stop(); // Maruthi is stopping
maruthi.yom(); // Maruthi is created on the year 2019

let car: Car = new Car("GMC", "Model X", "Black");
car.start(); // Generic Car is starting.
car.displayInfo(); // Car Name: Generic Car, Model: Model X
car.stop(); // Generic Car is stopping.
