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
  return mph * h;
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
  nap: function () {},
};
/*
In OOP, methods update properties stored in the object instead of generating new return values.

For example, if I check the sleepy property on the virtualPet object, I can confirm that it's set to true.

However, once I've ran the nap() method on the virtualPet object, will the sleepy property's value change?
*/
//creating an object
var virtualPet = {
  sleepy: true,
  nap: function () {
    this.sleepy = false;
  },
};
console.log(virtualPet.sleepy); // true
virtualPet.nap();
console.log(virtualPet.sleepy); // false

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
  console.log(a + b);
}

function randomNum() {
  return Math.floor(Math.random() * 10 + 1);
}
function specificNum() {
  return 42;
}

var useRandom = true;

var getNumber;

if (useRandom) {
  getNumber = randomNum;
} else {
  getNumber = specificNum;
}

addTwoNums(getNumber(), getNumber());

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
  console.log(a + b);
}
addTwoNums(5, 6); // 11

//* Tasks
// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
  var message = `%c${txt}`;
  var style = `color: ${color};`;
  style += `background: ${background};`;
  style += `font-size: ${fontSize};`;
  console.log(message, style);
}

consoleStyler("red", "black", "2rem", "Taimoor Nawaz Ali");

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
  var fontStyle = "color: tomato; font-size: 50px";
  if (reason == "birthday") {
    console.log(`%cHappy birthday`, fontStyle);
  } else if (reason == "champions") {
    console.log(`%cCongrats on the title!`, fontStyle);
  } else {
    console.log(message, style);
  }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler("#1d5c63", "#ede6db", "40px", "Congrats!");
celebrateStyler("birthday");

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
  consoleStyler(color, background, fontSize, txt);
  celebrateStyler(reason);
}
// Call styleAndCelebrate
styleAndCelebrate("#ef7c8e", "#fae8e0", "30px", "You made it!", "champions");

//* Scoping var, let and const
//  local scope: jo function yaa apny hi block mai rahy
//  block scope: let and const is introduced in ES6 is block scope
//  Global Scope:

let color = "blue"; // global scope

if (color == "red") {
  // ----------------------> block scope curly braces
  let color = "red";
}

console.log(color); // blue -----> only access the global

// let and const
// you can'nt be used before declare
// can'nt be redeclare
// it's scoped to the block

function meal(animal) {
  animal.food = animal.food + 10;
}

var dog = {
  food: 10,
};
meal(dog);
meal(dog);

console.log(dog.food);
// =====================================================================================
//* 2) OOP (Object Oriented Programming)
//OOP revolve around the idea of organizing our a programs using objects to group related data and functional
//  Group Data

//Functional Programming
var shoee = 100;
var stateTaxs = 1.3;
function totalPricee(shoe, tax) {
  return shoe * tax;
}
var toPay = totalPricee(shoee, stateTaxs);
console.log(toPay);

// ^ OBJECT
//* OOP paradigm
var purchase1 = {
  shoe: 100,
  stateTax: 1.3,
  totalPrice: function () {
    var calculation = purchase1.shoe * purchase1.stateTax;
    console.log(calculation);
  },
};

purchase1.totalPrice();

// another
var purchase2 = {
  shoe: 50,
  stateTax: 1.3,
  totalPrice: function () {
    var calculation = purchase2.shoe * purchase2.stateTax;
    console.log(calculation);
  },
};

purchase2.totalPrice();

// This keyword allows to reuse the code mujhy apny function kai unde ye nahi likha yaa batna pary ga kai purchase2.shoe yaa purchase 1.shoe

var purchase3 = {
  shoe: 10,
  stateTax: 1.3,
  totalPrice: function () {
    var calculation = this.shoe * this.stateTax;
    console.log(calculation);
  },
};

purchase3.totalPrice();

// another
var purchase4 = {
  shoe: 40,
  stateTax: 1.3,
  totalPrice: function () {
    var calculation = this.shoe * this.stateTax;
    console.log(calculation);
  },
};
purchase4.totalPrice();
//* The "this" keyword is an alias for the name of the object.

// ^ CLASS
// * You will build many many objects with the similar work for e.g. you might be 100 of car objects you code efficently you use classes
// They are essentially a blueprint that you can repeatedly use to build new objects of a certain kind, as many times as you like
class Car {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }

  turboOn() {
    console.log("Turbo is ON");
  }
}

//  blueprints means copy of the car class
//  in a Car class arrguments is optional
const car1 = new Car("Red", "22x"); // instance of Car
const car2 = new Car("blue", "21x"); // instance of Car
car1.turboOn();
console.log(car2);

/*
 
 * Object Oriented Programming principles

In this reading, you'll learn about the benefits of object-oriented programming (OOP) and the OOP principles.

The Benefits of OOP

There are many benefits to using the object-oriented programming (OOP) paradigm.

OOP helps developers to mimic the relationship between objects in the real world. In a way, it helps you to reason about relationships between things in your software, just like you would in the real world. Thus, OOP is an effective approach to come up with solutions in the code you write. OOP also:

    Allows you to write modular code,

    Makes your code more flexible and

    Makes your code reusable.

* The Principles of OOP

* The four fundamental OOP principles are inheritance, encapsulation, abstraction and polymorphism. You'll learn about each of these principles in turn. The thing to remember about Objects is that they exist in a hierarchal structure. Meaning that the original base or super class for everything is the Object class, all objects derive from this class. This allows us to utilize the Object.create() method. to create or instansiate objects of our classes.
 */
// class Animal {}

// //   Creating a Object
// var myDog = Object.create(Animal);
// // or
// var myDog = new Animal();

// console.log(Animal);

/*
 *OOP Principles: Inheritance

Inheritance is one of the foundations of object-oriented programming.

In essence, it's a very simple concept. It works like this: 

    There is a base class of a "thing".

    There is one or more sub-classes of "things" that inherit the properties of the base class (sometimes also referred to as the "super-class")

    There might be some other sub-sub-classes of "things" that inherit from those classes in point 2.

Note that each sub-class inherits from its super-class. In turn, a sub-class might also be a super-class, if there are classes inheriting from that sub-class.

All of this might sound a bit "computer-sciency", so here's a more practical example:

    There is a base class of "Animal".

    There is another class, a sub-class inheriting from "Animal", and the name of this class is "Bird".

    Next, there is another class, inheriting from "Bird", and this class is "Eagle".

Thus, in the above example, I'm modelling objects from the real world by constructing relationships between Animal, Bird, and Eagle. Each of them are separate classes, meaning, each of them are separate blueprints for specific object instances that can be constructed as needed.

To setup the inheritance relation between classes in JavaScript, I can use the extends keyword, as in class B extends A.

Here's an example of an inheritance hierarchy in JavaScript: 
 
 */
// class Animal{

// }
// class Birds extends Animal{

// }
// class Eagle extends Birds{

// }

/*
 * OOP Principles: Encapsulation

In the simplest terms, encapsulation has to do with making a code implementation "hidden" from other users, in the sense that they don't have to know how my code works in order to "consume" the code.

For example, when I run the following code:
"abc".toUpperCase();

I don't really need to worry or even waste time thinking about how the toUpperCase() method works. All I want is to use it, since I know it's available to me. Even if the underlying syntax - that is, the implementation of the toUpperCase() method changes - as long as it doesn't break my code, I don't have to worry about what it does in the background, or even how it does it.
*/

/* 
 * OOP Principles: Abstraction
Abstraction is all about writing code in a way that will make it more generalized.

The concepts of encapsulation and abstraction are often misunderstood because their differences can feel blurry.

It helps to think of it in the following terms: 

    An abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept. 

    Encapsulation is about you not having access to, or not being concerned with, how some implementation works internally.

While both the encapsulation and abstraction are important concepts in OOP, it requires more experience with programming in general to really delve into this topic.

For now, it's enough to be aware of their existence in OOP.
 */

/*
 *OOP Principles: Polymorphism

Polymorphism is a word derived from the Greek language meaning "multiple forms". An alternative translation might be: "something that can take on many shapes".OOP Principles: Polymorphism

Polymorphism is a word derived from the Greek language meaning "multiple forms". An alternative translation might be: "something that can take on many shapes".

So, to understand what polymorphism is about, let's consider some real-life objects.

    A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. When would someone ring a bell on the door? Obviously, to get someone to show up at the door.

    Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object. This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on a bicycle is not the same as ringing the bell on a door.

The above concepts can be coded in JavaScript as follows:

So, to understand what polymorphism is about, let's consider some real-life objects.

    A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. When would someone ring a bell on the door? Obviously, to get someone to show up at the door.

    Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object. This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on a bicycle is not the same as ringing the bell on a door.

The above concepts can be coded in JavaScript as follows:  
 */

const bicycle = {
  bell: function () {
    return "Ring, ring! Watch out, please!";
  },
};
const door = {
  bell: function () {
    return "Ring, ring! Come here, please!";
  },
};
bicycle.bell(); // "Get away, please"
door.bell(); // "Come here, please"

/*
 * At this point, one can conclude that the exact same name of the method can have the exact opposite intent, based on what object it is used for.

Now, to make this code truly polymorphic, I will add another function declaration:
 */

function ringTheBell(thing) {
  console.log(thing.bell());
}
ringTheBell(bicycle); // Ring, ring! Watch out, please!

// Here's an example of polymorphism using classes in JavaScript:

// class Bird {
//   useWings() {
//       console.log("Flying!")
//   }
// }
// class Eagle extends Bird {
//   useWings() {
//       super.useWings()
//       console.log("Barely flapping!")
//   }
// }
// class Penguin extends Bird {
//   useWings() {
//       console.log("Diving!")
//   }
// }
// var baldEagle = new Eagle();
// var kingPenguin = new Penguin();
// baldEagle.useWings(); // "Flying! Barely flapping!"
// kingPenguin.useWings(); // "Diving!"
// ============================================================
function Icecream(flavor) {
  this.flavor = flavor;
  this.meltIt = function () {
    console.log(`The ${this.flavor} icecream has melted`);
  };
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}

// However, when building objects of other built-in types, we can use the constructor.

// Here are a few examples:
// new Date();
// new Error();
// new Map();
// new Promise();
// new Set();
// new WeakSet();
// new WeakMap();

//*you can use a prototype object to hold properties that can be shared with various other objects.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log("Lights on?", this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log("High speed status:", this.highSpeedOn);
  }
  toggleLights() {
    super.toggleLights();
    super.lightsStatus();
    console.log("Lights are 100% operational.");
  }
}

var myFirstTrain = new Train("red", false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train("blue", false);
var myThirdTrain = new Train("blue", false);

var train4 = new Train("red", false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train("blue", false);
var highSpeed1 = new HighSpeedTrain(200, false, "green", false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.

// * Default Parameters
function noDefaultParams(number) {
  console.log("Result:", number * number);
}

noDefaultParams();
function withDefaultParams(number = 10) {
  console.log("Result:", number * number);
}

withDefaultParams();

class WithDefaultParams {
  constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.string1 = string1;
    this.bool1 = bool1;
  }
  calculate() {
    if (this.bool1) {
      console.log(this.string1, this.num1 + this.num2 + this.num3);
      return;
    }
    return "The value of bool1 is incorrect";
  }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6

///////////////////////////////
class Animal {
  constructor(color = "yellow", energy = 100) {
    this.color = color;
    this.energy = energy;
  }

  isActive() {
    if (this.energy > 0) {
      this.energy -= 20;
      console.log("Energy is decreasing, currently at:", this.energy);
    } else if (this.energy == 0) {
      this.sleep();
    }
  }

  sleep() {
    this.energy += 20;
    console.log("Energy is decreasing, currently at:", this.energy);
  }

  getColor() {
    console.log(this.color);
  }
}

class Cat extends Animal {
  constructor(
    sound = "Purr",
    canJumpHigh = true,
    canClimbTrees = true,
    color,
    energy
  ) {
    super(color, energy);
    this.sound = sound;
    this.canClimbTrees = canClimbTrees;
    this.canJumpHigh = canJumpHigh;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class Bird extends Animal {
  constructor(sound = "chirp", canFly = true, color, energy) {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }

  makeSound() {
    console.log(this.sound);
  }
}

class HouseCat extends Cat {
  constructor(
    houseCatSound = "meow",
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.houseCatSound = houseCatSound;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.houseCatSound);
  }
}

class Tiger extends Cat {
  constructor(
    tigerSound = "Roar!",
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.tigerSound = tigerSound;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.tigerSound);
  }
}

class Parrot extends Bird {
  constructor(canTalk = false, sound, canFly, color, energy) {
    super(sound, canFly, color, energy);
    this.canTalk = canTalk;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    if (this.canTalk) {
      console.log("I'm a talking parrot!");
    }
  }
}

var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!

// * TASKS

// Task 1: Code a Person class
class Person {
  constructor(name = "Taimoor", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  sleep() {
    this.energy += 10;
  }
  doSomethingFun() {
    this.energy -= 10;
  }
}

// Task 2: Code a Worker class
class Worker extends Person {
  constructor(xp = 0, hourlyWage = 10, name, age, energy) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  sleep() {
    super.sleep();
  }

  doSomethingFun() {
    super.doSomethingFun();
  }

  goToWork() {
    this.xp += 10;
  }
}
// Task 3: Code an intern object, run methods
function intern() {
  var per = new Worker(0, 10, "bob", 21, 110);
  per.goToWork();
  return per;
}

console.log(intern());

// Task 4: Code a manager object, methods
function manager() {
  var manager = new Worker(10, 30, "Alice", 30, 120);
  manager.doSomethingFun();
  return manager;
}

console.log(manager());

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Advance JS Feature
// DStructuring
// Copying an item, which them becomes independent of the original.
let { PI } = Math;
console.log(PI);

let { pi } = Math;
console.log(pi); // undefined

console.log(PI === Math.PI);
PI = 1;
console.log(PI === Math.PI);

// For of loops and objects

// In this reading, you'll learn how the for of loop works conceptually.

// To begin, it's important to know that a for of loop cannot work on an object directly, since an object is not iterable. For example:
const car = {
  speed: 100,
  color: "blue",
};

//! for(prop of car) {
//   console.log(prop)
// }

// Before you can properly answer this question, you first need to review three built-in methods: Object.keys(), Object.values(), and Object.entries().

const car3 = {
  speed: 200,
  color: "red",
};

console.log(Object.keys(car3)); //So, when I run Object.keys() and pass it my car2 object, the returned value is an array of strings, where each string is a property key of the properties contained in my car2 object.

console.log(Object.values(car3));

// The Object.entries() method

// Finally, there's another useful method, Object.entries(), which returns an array listing both the keys and the values.
console.log(Object.entries(car3));

var clothingItem = {
  price: 50,
  color: "beige",
  material: "cotton",
  season: "autumn",
};

for (const keys of Object.keys(clothingItem)) {
  console.log(keys, ":", clothingItem[keys]);
}

//* TASKS
// Task 1
const dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];
function logDairy() {
  for (const items of dairy) {
    console.log(items);
  }
}

logDairy();
// Task 2
const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (const items of Object.keys(bird)) {
    console.log(`${items} : ${bird[items]}`);
  }
}
birdCan();

// Task 3
function animalCan() {
  for (const birdObj in bird) {
    console.log(`${birdObj} : ${bird[birdObj]}`);
  }
}

animalCan();

//& Data Structure
//1) How do represent the given data in your app?
//2) How do you code a solution to your task?

// Common Data structures is:;
/*
 * Objects
 * Arrays
 * Maps
 * Sets
 * etc..
 */

// Data structure is a way to organized data
// for e.g.
// const allTest = '70, 80, 90, 50'
//  const test1 = 70;
// const test2 = 80;

// * Best approch to store a data
const allTest = [70, 80, 90, 50];

/*
Data Structures examples

In this reading, you'll learn about some of the most common examples of data structures.

The focus will be on working with the Object, Array, Map and Set data structures in JavaScript, through a series of examples.

Note that this reading will not include a discussion of some data structures that exist in some other languages, such as Queues or Linked Lists.  Although these data structures (and other data structures too!) can be custom-coded in JavaScript, the advanced nature of these topics and the difficulty with implementing related exercises means they are beyond the scope of this reading. 
*/
/*
 * Working with arrays in JavaScript

Previously, you've covered a lot of concepts related to how to work with JavaScript arrays.

However, there are still a few important topics that can be covered, and one of those is, for example, working with some built-in methods.

In this reading, the focus is on three specific methods that exist on arrays:

    * forEach 

    * filter

    * map

 Let's explore these methods.
 */
/*
The forEach() method

Arrays in JavaScript come with a handy method that allows you to loop over each of their members. 

Here's the basic syntax:
*/
const fruits = ["kiwi", "mango", "apple", "pear"];
function appendIndex(fruit, index) {
  console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);

// filter
const nums = [0, 10, 20, 30, 40, 50];
const n = nums.filter((num) => {
  return num > 20;
});
console.log(n);

const a = [0, 10, 20, 30, 40, 50].map(function (num) {
  return num / 10;
});

console.log(a);
//
const result = [];
const drone = {
  speed: 100,
  color: "yellow",
  1: "one",
};

// for (const key of Object.keys(drone)) {
//   result.push(key, drone[key]);
// }
// console.log(result);
// ['speed',100,'color','yellow']

const objKeys = Object.keys(drone);
objKeys.forEach((key) => {
  result.push(key, drone[key]);
});
console.log(result);

//*Working with Maps in JavaScript

// To make a new Map, you can use the Map constructor:
/*
A map can feel very similar to an object in JS.

However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.

For example:
 */
let bestBoxes = new Map();
bestBoxes.set(1, "Taimoor Nawaz");
bestBoxes.set(2, "Ali Nawaz");
bestBoxes.set("age", 21);
console.log(bestBoxes);

console.log(bestBoxes.get(2));

// The Set constructor can, for example, accept an array.

// This means that we can use it to quickly filter an array for unique members.
const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

// * Spread Operator [...]
// Tool used to spread Array items and join Objects toGether

// const top3 = [0,1,2,3,4,5,6,7,8,3];
// function tirer(one,two,three,four,five,six,seven,eight,nine){
//   console.log(one,two,three,four,five,six,seven,eight,nine);
// }
// tirer(top3[0], top3[1], top3[2]);

const top3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 3];
function tier(one, two, three, four, five, six, seven, eight, nine) {
  console.log(one, two, three, four, five, six, seven, eight, nine);
}

tier(...top3);

// * Rest Parameters
const top4 = [10, 11, 22, 33, 24, 45, 46, 7, 8, 3];
function tier(one, ...n) {
  console.log(one, n);
}

tier(...top4);

const fruitss = ["apple", "pear", "plum"];
const [frui] = fruitss;
console.log(frui);
const berries = ["blueberry", "strawberry"];
const fruitsAndBerries = [...fruits, ...berries];
console.log(fruitsAndBerries);

const flying = { wings: 2 };
const cars = { wheels: 4, doors: 4 };

const carAndFlying = { ...flying, ...cars };
console.log(carAndFlying);

const namee = "Taimoor";
const name = [...namee];
console.log(name);

const car4 = {
  speed: 200,
  color: "yellow",
};
const car5 = { ...car4 };

car4.speed = 201;

console.log(car4.speed, car5.speed);

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1, "not", fruits2)

let obj = {
  key: 1,
  value: 4
};

let output = { ...obj };
output.value -= obj.key;

console.log(output.value);