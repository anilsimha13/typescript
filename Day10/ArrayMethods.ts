let num: number[] = [111, 222, 333, 444, 555, 666];
let fruits: string[] = ["Pineapple", "Apple", "Banana", "Berries"];

console.log("Numbers in the given array:", num);

console.log("Fruits in the given array:", fruits);

num.push(777);
fruits.push("Mango");
console.log("After push method:");
console.log("Numbers in the given array:", num);
console.log("Fruits in the given array:", fruits);

num.pop();
fruits.pop();
console.log("After pop method:");
console.log("Numbers in the given array:", num);
console.log("Fruits in the given array:", fruits);

num.shift();
fruits.shift();
console.log("After shift method:");
console.log("Numbers in the given array:", num);
console.log("Fruits in the given array:", fruits);

num.unshift(100);
fruits.unshift("Orange");
console.log("After unshift method:");
console.log("Numbers in the given array:", num);
console.log("Fruits in the given array:", fruits);

num = num.concat([888, 999]);
fruits = fruits.concat(["Grapes", "Watermelon"]);
console.log("After concat method:");
console.log("Numbers in the given array:", num);
console.log("Fruits in the given array:", fruits);

num = num.slice(2, 4);
fruits = fruits.slice(1, 3);
console.log("After slice method:");
console.log("Numbers in the given array:", num);
console.log("Fruits in the given array:", fruits);

let one: number[] = [123, 456, 789, 1011, 1213];

one.splice(2, 3, 1111);
console.log("After splice method:");
console.log("Numbers in the given array:", one);

let resultNum = one.indexOf(456);
console.log("Index of 456 in the given array:", resultNum);

one.includes(456);
console.log("Check if 456 is present in the given array:", one.includes(456));

let greetings: string[] = ["Hello", "Hi", "Hey", "Hola"];
let storedValue = greetings.toString();
console.log("String representation of the greetings array:", storedValue);
