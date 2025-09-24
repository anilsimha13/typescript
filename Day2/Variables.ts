var age = 30;
console.log(age);

//Var is the Functional Scope

function greets() {
    if (true) {
        var msg: string = "Hello World";
        console.log(msg, "block scope");
    }
    console.log(msg, "functional scope");
}
greets();

function greet1() {
    if (true) {
        let msg: string = "Hello World";
        const wish: string = 'Happy Birthday'
        var fName: string = 'Anil'
        console.log(msg, wish, fName "block scope");
    }
    console.log(msg, "not functional scope");
    console.log(wish, "not functional scope");
    console.log(fName, "functional scope");

}
greet1();

function scopeDiff() {
    if (true) {
        var num1: number = 20
        let num2: number = 39
        const num3: number = 49
    }
    console.log(num1)
    console.log(num2) //block scope
    console.log(num3) // block scope
}

//Declaration
var x
x = 10
x = 40
let y
y = 20
y = 50
let fName = 'Anil'
let fName = 'Simha' //not accepted
const z = 30
const m // not correct

//Hoisting
console.log(q) // Undefined
var q = 10
console.log(q)

console.log(q) // errors
let q = 10
console.log(q)


console.log(q) // errors
const q = 10
console.log(q)
