class Calculator {
  constructor();
  constructor(a: number, b: number);
  constructor(a?: number, b?: number) {
    if (a !== undefined && b !== undefined) {
      console.log("Addition is: " + (a + b));
    } else {
      console.log("Default constructor");
    }
  }

  add(a: number, b: number): number;
  add(a: number, b: number, c: number): number;
  add(a: number, b: number, c?: number): number {
    if (c !== undefined) {
      return a + b + c;
    }
    return a + b;
  }
}

let calc1 = new Calculator();
let calc2 = new Calculator(100, 200);

let cal3 = new Calculator();

console.log(cal3.add(10, 20));
console.log(cal3.add(10, 20, 30));
