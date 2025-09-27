//Example-1

let age: number = 17;

if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log(`You are yet to grow by ${18 - age} years`);
}

//Example-2

let num: number = 37;

if (num % 2 == 0) {
  console.log(`Given ${num} number is Even`);
} else {
  console.log(`Given ${num} number is Odd`);
}

num % 2 == 0 ? console.log("I am Even") : console.log("I am Odd");

//Example-3

let student1: number = 79;

if (student1 >= 80) {
  console.log("You are topper");
} else if (student1 >= 50 && student1 <= 79) {
  console.log("You have aced");
} else {
  console.log("Good Luck broww! ");
}

student1 >= 80
  ? console.log("Topper")
  : student1 >= 50 && student1 <= 79
  ? console.log("Aced")
  : console.log("Good Luck");

// Example-4

let browser: string = "FIREFOX";

if (browser.toLowerCase() === "chrome") {
  console.log("I am running on chrome browser");
} else if (browser.toLowerCase() === "firefox") {
  console.log("I am running on firefox", browser);
} else {
  console.log("Some Dummy Browser");
}

//Example-5 Switch Case

let Day: number = 9;

switch (Day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
  default:
    console.log("Fun Days");
}
