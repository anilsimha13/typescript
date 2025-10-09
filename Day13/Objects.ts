let emp = {
  id: 101,
  name: "Anil",
  age: 30,
  isActive: true,
  skills: ["Java", "JavaScript", "TypeScript"],
};
let emp1 = {
  id: 101,
  name: "Anil",
  age: 30,
  isActive: true,
  skills: ["Java", "JavaScript", "TypeScript"],
  getAddress: function () {
    console.log("Kakinada");
    console.log(this.name, this.age, this.skills);
  },
};

emp1["getAddress"]();
emp1.getAddress();
emp1.age = 31;
emp1.getAddress();

let student: {
  name: string;
  age: number;
  grade: string;
} = {
  name: "John",
  age: 20,
  grade: "A",
};
console.log(student.name);
console.log(student.age);
console.log(student.grade);

//class

class Person {
  ssn: string;
  firstName: string;
  lastName: string;
  getDetails() {
    console.log(`SSN is ${this.ssn} for ${this.firstName} ${this.lastName}`);
  }

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return this.firstName + this.lastName;
  }
}

let person1 = new Person("6198323232", "Anil", "Tallapragada");
person1.getDetails();
//let person2 = new Person("619832", "Anil Simha", "Tallapragada");
//let person3 = new Person("6198323", " Simha", "Tallapragada");
