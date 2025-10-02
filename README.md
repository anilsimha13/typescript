# Typescript

## Day-1

1. ### What is Typescript?

- Typescript is the superset of Javascript
- It compiles into regular Javascript, so it runs anywhere Javascript does
- File ends with .ts

2. ### How Typescript works?

- You write code in Typescript
- Typescript compiler convers it into Javascript
- Javascript runs in browser, Node.js or any JS environment

3. ### Why Typescript ?

- Helps catch mistakes early
- Makes large projects easier to manage
- Type Saftey

4. ### Setup

- Node.js
- Typescript Complier
  - Run it on root as admin `npm install -g typescript` to install
  - `tsc fileName.ts` > Compiles and creates the JS file
  - `node fileName.js` > Run the JS file
- Any IDE
- Typescript executor
  - Run it on root as admin `npm install -g tsx` to install
  - tsx `fileName.ts` > Runs the ts file without creating the js file

## Day-2

### Comments

- Signle Line (//sample code) > cmd + /
- Multi Line (/_ sample story _/) > shift+alt(option)+a

### Variables

- Container which holds the Value/data
- var, let and const
- syntax > ex:`let age:number = 30`
- Scope
  - Functional
  - Block

| Keyword | Scope    | Redeclaration | Reassignment | Hoisting | Usage Recommendation |
| ------- | -------- | ------------- | ------------ | -------- | -------------------- |
| var     | Function | Yes           | Yes          | Yes      | Avoid in modern code |
| let     | Block    | No            | Yes          | No       | Use if value changes |
| const   | Block    | No            | No           | No       | Use by default       |

## Day-3

- Javascript is the Dynamically typed language
- Typescript is the Statically typed language

### Data Types

1. Premitive Datatypes
   - Can store only one single value
     a. Number
     b. String
     c. Boolean
     d. Null
     e. undefined
     f. Any
     g. Union
     h. Void
2. Non-Premitive Datatypes

- Can store group of Objects
  a. Array
  b. Class
  c. Function
  d. Interface, etc..

`let age:number = 32`

1. Type/Data Type
2. Annotations
3. Type Inference

## Day-4

### Operators

- Arithmetic
- Assignment
- Relational
- Logical
- Increment/Decrement
- Conditional(Ternary)

## Day-5

### Statements

- Conditional Statements
  - if
  - if...else
  - if...else if...else
  - switch

## Day-6

### Loops

- While

```javascript
console.log("1 to 10");
let count = 1;

while (count < 11) {
  console.log("Count is: " + count);
  count++;
}
```

- Do-while

```javascript
console.log("5 to 1");
let j = 5;
do {
  console.log(j);
  j--;
} while (j >= 1);
```

- For Loop

```javascript
console.log("1 to 10");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

- Break and Continue

```javascript
console.log("1 to 10 but skip 5");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
```

```javascript
console.log("1 to 10 but stop at 5");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

## Day-7

### Functions

- Named Function
  - Arrow/Lambda function
  - Default Parameters
  - Optional Parameters
  - Rest Parameter

```javascript
function addGivenNumbers(...num: number[]): void {
  let i = 0;
  let sum: number = 0;
  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];
  }
  console.log(sum);
}
addGivenNumbers(1, 3, 43, 24, 56, 7, 8, 76, 2);
```

## Day-8

### Functions - Part-2

- Callback Function
  - Function as a parameter to another function
- Function overloading
  - Multiple functions with same name but different parameters and/or return type
