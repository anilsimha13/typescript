let a: number = 10;
let b: number = 20;

//Arithmetic Operator
console.log(a + b);
console.log(a - b);
console.log(b ** a);
console.log(a / b);
console.log(a % b);

//Assignment Operator

a = 10;
b = 5;

//a = a + b;
//console.log(a); //15
// a += b; // a = a + b
// console.log(a);

console.log((a -= b));
console.log((a += b));
console.log((a /= b));
console.log((a %= b), "modulus");
console.log((a **= b));

//Relational Operator
console.log("Relational Operators");
a = 10;
b = 20;

console.log(a > b);
console.log(a < b);
console.log(a <= b);
console.log(a >= b);
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);

let fName: string = "Anil";
let lName: string = "anil";
console.log("String Relational Operators");
console.log(fName == lName);
console.log(fName === lName);
console.log(fName != lName);
console.log(fName !== lName);

let num1: any = 10;
let num2: any = "10";
console.log("String Relational Operators1");

console.log(num1 == num2); //true
console.log(num1 === num2); //false
console.log(num1 != num2); //false
console.log(num1 !== num2); //true

//Logical Operator
console.log("Logical Operators");
let x: number = 10;
let y: number = 20;
let z: number = 30;

console.log(x < y && y < z); //true && true => true
console.log(x < y && y > z); //true && false => false
console.log(x > y && y > z); //false && false => false

console.log(x < y || y < z); //true || true => true
console.log(x < y || y > z); //true || false => true
console.log(x > y || y > z); //false || false => false

console.log(!(x < y)); // !(true) => false
console.log(!(x > y)); // !(false) => true
console.log(!(x == y)); // !(false) => true
console.log(!(x != y)); // !(true) => false
console.log(!!(x != y)); // !!(true) => true
console.log(!!(x == y)); // !!(false) => false

//Increment/Decrement Operator

let m: number = 10;
console.log(m, "m value");
console.log(++m, "++m"); //11
console.log(m, "m value"); //11
console.log(m++, "m++"); //11
console.log(m, "m value"); //12

let n: number = 20;
console.log(n, "n value");
console.log(--n, "--n"); //19
console.log(n, "n value"); //19
console.log(n--, "n--"); //19
console.log(n, "n value"); //18

let zee: number = 5;

let res = zee++;
console.log(res, "res value"); //5
console.log(zee, "zee value"); //6

let zee1: number = 6;

let res1 = ++zee1;
console.log(res1, "res1 value"); //7
console.log(zee1, "zee1 value"); //7

let zee2: number = 5;

let res2 = zee2--;
console.log(res2, "res2 value"); //5
console.log(zee2, "zee2 value"); //4

let zee3: number = 6;

let res3 = --zee3;
console.log(res3, "res3 value"); //5
console.log(zee3, "zee3 value"); //5
