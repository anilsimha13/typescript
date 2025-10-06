//Approach 1: using Letetal

let names: string[] = [];

names[0] = "John";
names[1] = "Smith";
names[2] = "Peter";
names[3] = "Scott";
names[4] = "Max";

let names1: string[] = ["Anil", "Simha", "Tallapragada", "32", "Kakinada"];

console.log(names1[3]);

console.log(names1.length, "Size");

for (let i = 0; i < names1.length; i++) {
  console.log(names1[i]);
}

console.log("~~~~For...in~~~~~~~~~~~~~~~");

for (let i in names1) {
  console.log(names1[i]);
}
console.log("~~~~For..of~~~~~~~~~~~~~~~");

for (let value of names1) {
  console.log(value);
}
console.log("~~~~~~~~~~~~~~~~");

function searchElement(arrayEle: number | string, arr: number[] | string[]) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arrayEle) {
      return true;
    }
  }
  return false;
}

console.log(
  searchElement(9000, [1000, 2000, 3000, 200, 100, 10, 20, 2000, 20000])
);
console.log("~~~~~~~~~~~~~~~~");

function convertCapital(arrWords: string[]): string[] {
  let res: string[] = [];
  for (let i = 0; i < arrWords.length; i++) {
    res[i] = arrWords[i].toUpperCase();
  }
  return res;
}

console.log(convertCapital(["Anil", "simha", "taLLaPragadA"]));

console.log("~~~~~~~Tuple~~~~~~~~~");

let personaDetails: [string, string, number, number] = [
  "Anil",
  "Simha",
  30,
  9000499191,
];

for (let i = 0; i < personaDetails.length; i++) {
  console.log(personaDetails[i]);
}
console.log("~~~~~~~Tuple~~~~~~~~~");

let classRoom: [string, number][] = [
  ["Taksh", 3],
  ["Takshya", 5],
];
console.log("~~~~~~~Tuple~~For..in~~~~~~~");

for (let i in classRoom) {
  console.log(classRoom[i]);
}
console.log("~~~~~~~Tuple~~~For..of~~~~~~");

for (let values of classRoom) {
  console.log(values);
}
