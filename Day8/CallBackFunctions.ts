//Callback functions are functions that are passed as arguments to other functions and are executed after some operation has been completed.

//Example of a callback function

function showMsg(message: string) {
  console.log(message);
}

console.log("----------");

function greet(name: string, smg: (showMsg: string) => void) {
  console.log(name);
  showMsg("Hello, Good Evening");
}
greet("Anil", showMsg);

console.log("+++++");

function displayResult(result: number): void {
  console.log(result);
}

function sum(a: number, b: number, cb: (displayResult: number) => void) {
  let res = a + b;
  cb(res);
}

sum(10, 20, displayResult);
