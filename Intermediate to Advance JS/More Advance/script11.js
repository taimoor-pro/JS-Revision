// Two various style also known as programming paradigms
//  Paradignms is diffrent approches but the result is same
//^ Two commonly used paradigms

//* 1) FP (Functional Programming)
//* 2) OOP (Object Oriented Programming)

//* 1) FP programming Style
// functional programming, data and functions that operate on it are clearly separated, not combined inside objects.
var shoe = 100;
var stateTax = 1.1;
function totalPrice(price, tax) {
  return price * tax;
}
var totalPrice = totalPrice(shoe, stateTax);
console.log(totalPrice);

/*
    Be able to explain that there are several programming paradigms

    Be able to explain the basic difference between the two predominant programming paradigms: functional programming and object-oriented programming

    Understand, at a very high level, how the functional programming paradigm works

"There are actually several styles of coding, also known as paradigms. A common style is called functional programming, or FP for short.
*/

//* When writing FP code, we keep data and functionality separate and pass data into functions only when we want something computed.
function getDistance(mph, h) {
  return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
// In functional programming, functions return new values and then use those values somewhere else in the code.
console.log(distance); // <====== THIS HERE!

//* Another style is object-oriented programming (OOP). In this style, we group data and functionality as properties and methods inside objects.
// For example, if I have a virtualPet object, I can give it a sleepy property and a nap() method:
var virtualPet = {
  sleepy: true,
  nap: function() {}
}
/*
In OOP, methods update properties stored in the object instead of generating new return values.

For example, if I check the sleepy property on the virtualPet object, I can confirm that it's set to true.

However, once I've ran the nap() method on the virtualPet object, will the sleepy property's value change?
*/
//creating an object
var virtualPet = {
  sleepy: true,
  nap: function() {
      this.sleepy = false
  }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

//* To summarize this point, we can say that the Functional Programming paradigm works by keeping the data and functionality separate. It's counterpart, OOP, works by keeping the data and functionality grouped in meaningful objects.

// ---------------------------------------------------------------------------------------------------------------------------------------------/
/**
 * There are many more concepts and ideas in functional programming.

Here are some of the most important ones:

    First-class functions

    Higher-order function

    Pure functions and side-effects

There are many other concepts and priciples in functional programming, but for now, let's stick to these three.
First-class functions

It is often said that functions in JavaScript are “first-class citizens”. What does that mean?

It means that a function in JavaScript is just another value that we can:

    pass to other functions

    save in a variable

    return from other functions

In other words, a function in JavaScript is just a value - from this vantage point, almost no different then a string or a number.

For example, in JavaScript, it's perfectly normal to pass a function invocation to another function.

To explain how this works, consider the following program.
 */

function addTwoNums(a, b) {
  console.log(a + b)
}

function randomNum() {
  return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
  getNumber = randomNum
} else {
  getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())

/**
 * Higher-order functions

A higher-order function is a function that has either one or both of the following characteristics:

    It accepts other functions as arguments

    It returns functions when invoked


There's no "special way" of defining higher-order functions in JavaScript. It is simply a feature of the language. The language itself allows me to pass a function to another function, or to return a function from another function.

Continuing from the previous section, consider the following code, in which I'm re-defining the addTwoNums() function so that it is a higher-order function:
 */
function addTwoNums(getNumber1, getNumber2) {
  console.log(getNumber1() + getNumber2());
}

// Pure functions and side-effects

/*Another concept of functional programming are pure functions.

A pure function returns the exact same result as long as it's given the same values.

An example of a pure function is the addTwoNums() function from the previous section:
*/
function addTwoNums(a, b) {
  console.log(a + b)
}
addTwoNums(5,6); // 11

// * Task  Complete 
function consoleStyler(color, background, fontSize, txt){
  var message = "%c" + txt;
  var style = `color: ${color}`;
  style += `background: ${background}`;
  style +=  `font-size: ${fontSize}`;
  console.log(message, style);
}

consoleStyler(`red`, `black`, `2rem`, `Taimoor Nawaz Ali`);