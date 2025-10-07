//ForEach

let fruits: string[] = ["Apple", "Banana", "Mango", "Orange"];

console.log("~~~Traditional Way~~~~");
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}
console.log("~~~ForEach~~~~");

fruits.forEach(function (ele, index) {
  console.log(index, ele);
});
console.log("~~~ForEach Arrow function~~~~");

fruits.forEach((ele, index) => {
  console.log(index, ele);
});

fruits.forEach((ele) => {
  let res = ele.toUpperCase();
  console.log(res);
});

console.log("~~~Map() Arrow function~~~~");
//Get squares of all the numbers in an array

let numbers: number[] = [2, 3, 4, 5, 6];

numbers.map((ele) => {
  ele = ele ** 2;
  console.log(ele);
});

let doubleNum = numbers.map((ele) => {
  ele = ele * 2;
  return ele;
});
console.log(doubleNum);

console.log("~~~Filter() Arrow function~~~~");

let originalArray: number[] = [11, 22, 33, 44, 55, 66, 77, 88, 99];

let filteredValue = originalArray.filter((ele) => {
  if (ele % 2 == 0) {
    return ele;
  }
});
console.log(filteredValue);

console.log("~~~reduce() Arrow function~~~~");

// Sum of all the numbers in an array

let numArray: number[] = [10, 20, 30, 40, 50];

let total = 0;
for (let i = 0; i < numArray.length; i++) {
  total = numArray[i] + total;
}
console.log(total, "Sum of all numbers using forLoop");

let reduceRes = numArray.reduce((total, ele) => {
  return total + ele;
});
console.log(reduceRes, "Sum of all numbers using Reduce");

console.log("~~~Some()~~~~");

let ages: number[] = [11, 22, 34, 56, 78, 90];

let checkAge = ages.some((ele) => {
  return ele > 18;
});
console.log(checkAge, "Are there any age greater than 18?");

console.log("~~~Every()~~~~");
let checkAges = ages.every((ele) => {
  return ele > 18;
});
console.log(checkAges, "Are all ages greater than 18?");
