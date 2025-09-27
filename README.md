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
