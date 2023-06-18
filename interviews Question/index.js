// https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php
// 1. Write a JavaScript program that displays the largest integer among two integers.
let num1, num2;
// num1 = +prompt("Input the First integer", "0");
// num2 = +prompt("Input the second integer", "0");

if (num1 > num2) {
  console.log(`The Larger number is num1 ${num1}`);
} else {
  console.log(`The Larger number is num2 ${num2}`);
}

//2) Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
// Sample numbers : 3, -7, 2
// Output : The sign is -

// let num = 3;
let num = -2;
// let num = 7;
if (num < 0) {
  console.log("The sign is  -");
} else {
  console.log("The Sign is +");
}

// 3. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is Even`);
  } else {
    console.log(`${i} is Odd`);
  }
}
