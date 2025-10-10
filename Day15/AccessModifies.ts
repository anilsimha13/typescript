class Person {
  public name: string;
  protected age: number;
  private ssn: number;

  constructor(name: string, age: number, ssn: number) {
    this.name = name;
    this.age = age;
    this.ssn = ssn;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age} and SSN: ${this.ssn}`);
  }
}

class Employee extends Person {
  private employeeId: number;

  constructor(name: string, age: number, ssn: number, employeeId: number) {
    super(name, age, ssn);
    this.employeeId = employeeId;
  }

  displayEmployeeInfo() {
    console.log(
      `Employee ID: ${this.employeeId}, Name: ${this.name}, Age: ${this.age}`
    );
    // Note: Cannot access this.ssn here as it is private to Person class
  }
}

let emp = new Employee("John Doe", 30, 123456789, 101);
emp.displayEmployeeInfo();
emp.displayInfo();
console.log(emp.name); // Accessible
// console.log(emp.age); // Error: Property 'age' is protected and only accessible within class 'Person' and its subclasses.
// console.log(emp.ssn); // Error: Property 'ssn' is private and only accessible within class 'Person'.
// console.log(emp.employeeId); // Error: Property 'employeeId' is private and only accessible within class 'Employee'.
