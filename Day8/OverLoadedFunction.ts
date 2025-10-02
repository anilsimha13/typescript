//1. Signatures of functions
//2. Implement a function
//3. Calling a function

//Example1:

function getInfo(id: number): string;
function getInfo(name: string): string;

function getInfo(params: number | string): string {
  if (typeof params === "number") {
    console.log("User id is : " + params);
  } else {
    console.log("User name is : " + params);
  }
  return "User info processed";
}

getInfo(101); //User id is : 101
getInfo("Steve"); //User name is : Steve

//Example2:

function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

function add(a: number, b: number, c?: number): number {
  if (c !== undefined) {
    console.log(a + b + c);
  } else {
    console.log(a + b);
  }
}
add(11, 11);
add(11, 11, 11);
