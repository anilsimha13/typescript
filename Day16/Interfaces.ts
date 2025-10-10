interface Person {
  name: string;
  age: number;
}
let student: Person = { name: "Alice", age: 20 };
console.log(student.name); // Output: Alice
console.log(student.age); // Output: 20

//Optional Properties

interface Employee {
  id: number;
  name: string;
  department?: string;
}
let emp1: Employee = { id: 1, name: "Bob" };
let emp2: Employee = { id: 2, name: "Charlie", department: "HR" };
console.log(emp1.department); // Output: undefined
console.log(emp2.department); // Output: HR

//Readonly Properties

interface Car {
  readonly vin: string;
  model: string;
}
let myCar: Car = { vin: "1HGCM82633A123456", model: "Honda Accord" };
console.log(myCar.vin); // Output: 1HGCM82633A123456
// myCar.vin = "2HGCM82633A654321"; // Error: Cannot assign to 'vin' because it is a read-only property

//Function Types

interface MathOperation {
  (x: number, y: number): number;
}
let add: MathOperation = function (a, b) {
  return a + b;
};
console.log(add(5, 3)); // Output: 8

//Extending Interfaces

interface Animal {
  species: string;
}
interface Dog extends Animal {
  breed: string;
}
let myDog: Dog = { species: "Canine", breed: "Labrador" };
console.log(myDog.species); // Output: Canine
console.log(myDog.breed); // Output: Labrador

//Implementing Interfaces in Classes

interface Shape {
  area(): number;
}
class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  area(): number {
    return this.width * this.height;
  }
}
let rect = new Rectangle(5, 10);
console.log(rect.area()); // Output: 50
