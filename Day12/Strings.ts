let str: string = "Hello, Typescript!";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(2));
console.log(str.indexOf("o"));
console.log(str.substring(1, 3));
console.log(str.includes("Type"));
console.log(str.startsWith("H"));
console.log(str.startsWith("o", 4));
console.log(str.endsWith("!"));
console.log(str.replace("Typescript", "World"));
console.log(str);
//split()
console.log(str.split(" "));

let str1 = "tanilsimha@gmail.com, zyx";
let splitMethod = str1.split(",");
console.log(splitMethod[0]);
