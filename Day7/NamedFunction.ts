//Named Function with No Parameters and no return type

function display(): void {
  console.log(
    "Welcome to Named Functions without parameters and no return type"
  );
}
display();

//with parameters and return type

function sum(x: number, y: number): number {
  return x + y;
}
console.log(sum(2, 3));

//Rest parameters

function addGivenNumbers(...num: number[]): void {
  let i = 0;
  let sum: number = 0;
  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];
  }
  console.log(sum);
}
addGivenNumbers(1, 3, 43, 24, 56, 7, 8, 76, 2);

function fullName(fName: string, lName: string, age?: number) {
  console.log(`${fName} ${lName}`);

  if (age !== undefined) {
    console.log(`${fName} ${lName} ${age}`);
  }
}

fullName("Anil", "simha");
fullName("Anil", "simha", 30);
