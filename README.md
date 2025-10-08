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

  ## Day-9

  ### Arrays

  - Arrays (_Collections_) - Dynamic
    - For...in
    - For...of
    - With Functions
  - Tuple - Fixed size

## Day-10

- push()

  - Adds one or more elements to the end of an array and returns the new length of the array.

- pop()

  - Removes the last element from an array and returns that element. This method changes the length of the array.

- shift()

  - Removes the first element from an array and returns that element. This method changes the length of the array.

- unshift()

  - Adds one or more elements to the beginning of an array and returns the new length of the array.

- concat()

  - Merges two or more arrays. This method does not change the existing arrays, but instead returns a new array.

- slice()

  - Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

- splice()

  - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

- IndexOf()

  - Returns the first index at which a given element can be found in the array, or -1 if it is not present.

- includes()

  - Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

- toString()
  - Returns a string representing the specified array and its elements.

## Day-11

- ForEach()

  - Executes a provided function once for each array element.
  - `array.forEach(function(currentValue, index, array), {})`
  - currentValue - The current element being processed in the array.
  - index (Optional) - The index of the current element being processed in the array.
  - array (Optional) - The array that forEach() is being applied to.

- Map()

  - Creates a new array populated with the results of calling a provided function on every element in the calling array.
  - `array.map(function(currentValue, index, array), thisValue)`
  - currentValue - The current element being processed in the array.
  - index (Optional) - The index of the current element being processed in the array.
  - array (Optional) - The array that map() is being applied to.
  - thisValue (Optional) - Value to use as this when executing callback.

- Filter()

  - Creates a new array with all elements that pass the test implemented by the provided function.
  - `array.filter(function(currentValue, index, array), thisValue)`
  - currentValue - The current element being processed in the array.
  - index (Optional) - The index of the current element being processed in the array.
  - array (Optional) - The array that filter() is being applied to.
  - thisValue (Optional) - Value to use as this when executing callback.

- reduce()
- Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
- `array.reduce(function(accumulator, currentValue, index, array), initialValue)`
- accumulator - It accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied (see below).
- currentValue - The current element being processed in the array.
- index (Optional) - The index of the current element being processed in the array.
- array (Optional) - The array that reduce() is being applied to.
- initialValue (Optional) - A value to use as the first argument to the first call of the callback. If no initialValue is supplied, the first element in the array will be used and skipped. Calling reduce() on an empty array without an initialValue will throw a TypeError.

- some()
  - Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
  - `array.some(function(currentValue, index, array), thisValue)`
  - currentValue - The current element being processed in the array.
  - index (Optional) - The index of the current element being processed in the array.
  - array (Optional) - The array that some() is being applied to.
  - thisValue (Optional) - Value to use as this when executing callback.
- every()
  - Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
  - `array.every(function(currentValue, index, array), thisValue)`
  - currentValue - The current element being processed in the array.
  - index (Optional) - The index of the current element being processed in the array.
  - array (Optional) - The array that every() is being applied to.
  - thisValue (Optional) - Value to use as this when executing callback.

## Day-12

- Strings
  - Properties and Methods
    - length
    - charAt()
    - concat()
    - indexOf()
    - replace()
    - split()
    - toLowerCase()
    - toUpperCase()
    - trim()