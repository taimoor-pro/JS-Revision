//~FUNCTIONS
//  Traditional Function /function declaration
//  IIFE (Immediately Invoked Function)
//  Anonymously Function / Function Expression
//  Arrow Function
//  Recursive Function/ Recursion Function
//  Callback Function
//  Function Inside Function
// Functions returning Functions / Higher Order Function

//  Hoisting
//  Lexical Scope
// Block Scope Vs Function Scope
// Default Parameters
// Rest Parameters
// Parameter Destructuring

// ~ Tradition Function/ Function Declaration
function helloWorld() {
  console.log("Welcome to Traditional Function!!! ");
}

helloWorld();
console.log("Taimoor Nawaz!!");
helloWorld();

function sum() {
  let num1 = 2,
    num2 = 4;
  return num1 + num2;
}

console.log(sum());
console.log(sum());
console.log(sum());

function subtraction(a, b) {
  return a - b;
}

console.log(subtraction(5, 2));
console.log(subtraction(18, 9));

const functionMaked = subtraction(51, 20);

console.log(typeof functionMaked); // number

/* 
function funcionName(Parameters){ //* function Deceleration
  block ...
} 

funcionName(arguments)-> value parse //* function calling
*/

//function to check even or odd
function evenAndOdd(number) {
  return number % 2 == 0 ? "Even" : "Odd";
}

console.log(evenAndOdd(22));

//function jis mai ek array laiga pura or ek target(any number) iss array mai is target ko find kerna hai agr mill gaya to ap ne output mai ,
// index of array if present in array
//e.g parse array like [1,9,4,5,62,7] -> iss array mai ap ne search kerna hai kai 9 kha hai is ka index number kiya hai.

function findNumber(searchedNumber, targetNumber) {
  for (let [index, value] of searchedNumber.entries()) {
    // console.log(index, value);
    if (value === targetNumber) {
      return `Index is ${index} and searched number is ${targetNumber}`;
    }
  }
  return `Not available this item`;
}
const numbers = [10, 9, 4, 5, 6, 2, 7, 2];

const num1 = findNumber(numbers, 9);
const num2 = findNumber(numbers, 100);
console.log(num1);
console.log(num2);

for (const [index, value] of ["Taimoor", 21, "male", "Programmer"].entries()) {
  console.log(index, value);
}

// The entries() method returns an Array Iterator object with key/value pairs:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
console.log(f);

for (const value of f) {
  console.log(value);
}

for (const [index, value] of f) {
  console.log(index, value);
}

function findingName(NameArray, SearchNameIndex) {
  for (const name of NameArray) {
    if (name === SearchNameIndex) {
      return name;
    }
  }
  return "not available in search";
}

let nameList = ["Taimoor", "Ali", "Safwan", "Ezan", "Habib", "Hasseb"];
let searchName = findingName(nameList, "Usama");
console.log(searchName);

// Another using tradition for loop
function findNUmber(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i; //* jesy hi agr is ko return mill gaya to function execute hona bnd ho jata hai so for loop puri khtm hoo gai too direclty for loop kai bhir ap - 1 return kr dai
    }
  }
  return -1;
}

let numFind = findNUmber([1, 3, 4, 8, 9, 10, 11, 42], 9);
console.log(numFind);

//~ Immediately invoked function (IIFE)
//* means ap ko let / const use ker na same variable name kai saat so how?
// * function chaly or forn hi call bhi ho jan
// * Isy call kerwany ki zarurt nahi perti ye apny ap hi call hojata hai

let namee = "Taimoor Nawaz";
(function () {
  let namee = "Ali Uddin";
  console.log(namee);
})();

(function sum(a, b) {
  console.log(a + b);
})(2, 5);

//* For e.g. ham log third party JS means library ka use krty hai. or same name kai function mry pas mri JS mai bhi hai or us mai bhi. or hmy too pata hi nhi hai kai ham is name ka variable use ker rhy hai or JS includes hai dono mry HTML mai.

//* to ham is se bachny kai liya immediately invoked script function likhty hai

// ~  Function Expression/ Anonmious Function
// function declearation ko convert kerna ho function expression mai too haam kiya kerty hai?
//* jaab ham ek variable mai function assign kerty hai usy khty hai function expression and is ka dura name hai "Anonymous function" means asa function jis ka name nahi hai woo assign hota hai. so jo bs variable ka name hai wohi function kai name ki tara treat hoaga.

//* ham bs pury function ko ek variable mai assiggn kr dety hai.

const helloWorld2 = function () {
  console.log("helloWorld2");
};
helloWorld2();

const subtract = function (a, b) {
  console.log(a, b);
  (a = 8), (b = 1);
  return a - b;
};

let a = 10,
  b = 8;

console.log(subtract(a, b));

console.log(a, b);

// ~  Arrow Functions
//* Arrow function is widely important q kai haam react wegera mai bhi isy bhoth zada use kerty hai.

const helloWorld3 = () => {
  console.log("Hello World 3");
};

helloWorld3();

const sumThreeNumbers = (n1, n2, n3) => {
  return n1 + n2 + n3;
};
console.log(sumThreeNumbers(1, 2, 3));
console.log(sumThreeNumbers(4, 5, 9));

//  Very Shorthand of Arrow Function
const isEven = (number) => (number % 2 == 0 ? "Even" : "Odd");

const evenOdd1 = isEven(4);
const evenOdd2 = isEven(7);
console.log(evenOdd1);
console.log(evenOdd2);

const searchChar = (arr, target) => {
  for (const [index, value] of arr.entries()) {
    if (value === target) {
      return index;
    }
  }
  return -1;
};

const arry = ["a", "d", "k", "l", "m", "y"];

console.log(searchChar(arry, "k"));

//~ Callback function (covered in great detail, later)
// agr mai is function mai ek parameter du yaa jitny bhi paramerters du too any wala argument kuch bhi hoskhta hai woo object bhi hoskta hai array bhi yaa kuch bhi see,
function any(a) {
  console.log(a);
  console.log("Any....");
}

any([2, 4, 5, 6, 3, 1, 1]);
any({ age: 21, gender: "male" });
any({ numbers: [1, 2, 3, 4] });
//* 👆 so kya function ek argument mai parse hoskta hai? YES

// function myFun2(a) { //* jaab haam function accept kerty haina too haam ye convention hai kai haam a nahi rakhty callback name rakhty hai. 👇🏻 so ab is ka matlab haam ne callback accept kiya or usy print ker diya

function myFun(callback) {
  console.log("This is bala bala balaaaaa......");
  callback();
}

myFun(function () {
  console.log(2 + 6);
});

function sumOfTwo(callback) {
  return callback(12, 6);
}

const sumNumber = sumOfTwo((a, b) => a + b);
console.log("The Sum of two numbers is: " + sumNumber);

function multipleOfTwo(callback) {
  return callback(6, 6);
}

const multi = (x, y) => x * y;
console.log("Muliply of two numbers is: " + multipleOfTwo(multi));

// ~ Functions returning Functions/ Higher Order Function
// function kiya koi dusra function return ker skhta hai kyaa koi?

function anyFun() {
  function xyz() {
    return "Hello Lala! ";
  }
  return xyz;
}
const store = anyFun();
console.log("Return Function " + store());

function addTwoNums() {
  const addThreeNums = (a, b, c = 9) => {
    return a + b + c;
  };
  return addThreeNums;
}

const nums = addTwoNums();
console.log("Nums: " + nums(2, 8));

//*NOTE 👆 ya callback, ya function return function > ye khlty hai higher ordered functions bhi

//~ Hoisting
// for e.g.
/* 
function hello() {
  console.log("Hello World");
}
hello(); //* ab mai ye karuga kai is ko declear hony se phly call ker dunga
*/

// See👇🏻 ye taab bhi output daiga.
hello();

function hello() {
  console.log("Hello World");
}
//* but ye 👆 sirf function declaration kai case mai hoga "function Expression kai case mai nahi hoga"
/* 
 helo(); //! Error
const helo = function(){
  console.log("Hello");
} 
*/

//* BUT
// use let taab bhi same error

/*  helo(); //! Error
let helo = function(){
  console.log("Hello");
}  */

//* BUT

// use var

/* helo(); //! Error 
var helo = function () {
  console.log("Hello");
}; */

//* so Function Expression mai ap nahi ker skhty. call function bny se phly
//* Ap Function deceleration kai case mai ye kr skhty hoo

//* so is ko haam 👆 "hoisting" bolty hai.

//* Varibale bnanay se phly output lai rha hu to undefined but let or const kai case mai error
console.log(myHello); // so yha undefined aa rha hai
var myHello = "Hello world";

/* 
! so Error we use let and const  
console.log(myHello2);
let myHello2 = "Hello world";
 */

// ~  Function inside function
//* ek function kai under multiple function call inside function in function.

function app(a, b) {
  const introApp = () => "This App is use like a Calculator";

  const multiply = function (a, b) {
    return a * b;
  };

  (function () {
    console.log("Thank you for coming");
  })();

  function sum(a, b) {
    return a + b;
  }

  // let a = 10, b = 15;

  console.log("Multiply of two number is: " + multiply(a, b));
  console.log("Sum of two number is: " + sum(a, b));
  console.log(introApp());
}

app(12, 5);

console.log("\n\n\n");
app(12, 11); // jaab mai iss ko run karo ga too us kai baad under waly function run hongy

// ~  Lexical Scope
const myVar = "value1"; // ye global scope hai means puri file mai hai is called global scope

function myApp() {
  // const myVar = "value1";
  function myfun() {
    // const myVar = "value50"; // but i coment out so see
    console.log("Hello inside", myVar); //* ab is ko myVar jo mainy comment kiya hai upr wha se nahi mill rha too ye apny lexical scope mai dekhay ga ye myfun ye defined hai myApp kai under too is myfun ka environment myApp howa jis mai ye defined hai myfun too ye apny lexcal environment mai dekhata hai.
    //^ ab for e.g. mai is kai lexical scope se bhi hata deta hu myVar ko or myApp se bhir lai jata hu.
    //* to ye myfun kiya kary ga ye phly dekhy ga apny hi enviroment mai to agr usy nahi mily ga phir woo jahy ga myApp waly enviroment mai jo kai is ka lexical scope hai phir agr wha pr bhi nahi mila too jayn ga ye myApp kai lexical scope/ enviroment mai.
  }
  // const myfun2 = function () {};

  // const myfun3 = () => {};

  console.log(myVar);
  myfun();
}
myApp();

// ~  Block Scope Vs Function Scope

//* let & const are block scope.
//* var is a function scope.

// This is 👇🏻 a blocks {}
/*  Blocks
{
  let var1 = "Taimoor"
  1st block
} 
*/

/* 
{
  2nd block
} 
*/

{
  let var1 = "Taimoor";
}
// console.log(var1); //! Uncaught ReferenceError: var1 is not defined?
//* let & const are block scope
// Agr kisi block mai let and const hai too ap let and const ko usi block mai access ker skhty ho us block kai bhir access nahi kr skhty.

{
  let var2 = "ALi";
  console.log(var2);
}

// For e.g. 2 block hai or dono kai varibale name same hai dono block kai too woo variable alag alag khalyn gai.
{
  let var3 = "usama";
  console.log(var3);
}

{
  let var3 = "ezan";
  console.log(var3);
}

let var3 = "taimi";
console.log(var3); // so means block kai bhir jo global hai woo alag hai ok so var3 joo block mai hai woo alag variable hai or yha jo hai woo alag hai alag hai
//* so let ho ya const same case hai dono ka 👆

// * so ab mai var use kar kai kerta hu bhir print
{
  var myNme = "Taimoor Ali";
}
console.log(myNme);

{
  // 👇🏻 ye agr mai let laga kr karu na too nixhy vala block error kr daiga.
  var variable = "my Vari";
  console.log(variable);
}

{
  console.log(variable);
}

//^ 👆 jo bhi curly braces kai under hota hai usy block bolty hai. bhly woo if ka block hoo ya while ka ya for ka ya function ka etc.
//^ & var ko ap pury function yaa block ya kahi pr bhi access kerskhty hai bhaly woo blocjk kai undr hoo ya naa ho.

if (true) {
  let varia = "myvar";
  console.log(varia);
}
// console.log(varia); //!error

//~ Default Parameters
// for e.g. doo parameters hai jis kai do arguments hongy so for e.g mai ek hi argument parse karo ek mai chata hu bydefault one jayn see,

function addition(a, b) {
  // pahly ye hota tha
  if (b === undefined) {
    b = 1;
  }
  console.log(a + b);
}

addition(2);

//* ab default parameters aa chuky hai
function addTwoNumbers(a, b = 1) {
  // direct ap parameter mai hi define ker dai bydefault ko
  console.log(a + b);
}

addTwoNumbers(4);

// ~  Rest Parameters
// for e.g. ap kai parameter mai 3 hi varibale hai baki arrgumrnt mai 7 se 8 number hai too parse horahy hai. so mai chanta hu a,b parameter ma 3,4 ajayn pr baki kai ek array bn kr c mai chaly jayn see

function abc(a, b, c) {
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is ${c}`);
  // console.log(`d is ${d}`); // asa nahi hai kai d bhi ajyn ga
}
abc(3, 4, 5, 6, 7, 8, 10, 22); // so mai chata hu 5 se ye 22 tak araay mai jayn c ko mill jayn too ap // * rest parameters ka use kershty hai see 👇🏻

function abRestParam(a, b, ...c) {
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is ${c}`);
  console.log(`c is`, c); // Array bna waa
}
abRestParam(3, 4, 5, 6, 7, 8, 10, 22);

//* task ye hai ab kai ap jitnyyy bi numbers ek arrgument mai bhajoo does'nt matter bs ap ko us ka sum kr kai dekhna hai.

function sumAllNumbers(...arr) {
  let sum = 0;
  for (const value of arr) {
    sum = sum + value;
  }
  return sum;
}
console.log(sumAllNumbers(2, 4, 5, 7, 8, 12, 11, 9, 0, 3, 11, 5, 6, 4, 2));

// ~  Parameter Destructuring
// * ye haam Object kai saat use kerty hai or react mai to bhoth zada use kerty hai

const person = {
  firstName: "Taimoor",
  gender: "male",
};

/* function printDetails(obj) {
  console.log(obj.firstName);
  console.log(obj.gender);
} */ //* agr hamy pata ho kai object any wala hai to haam yahi per destructure ker skhty hai isy see.👇🏻

//* so mujhy ab obj likhny ki zarurat nahi hai q kai ab ye varibale bn gayn
function personData({ firstName, gender }) {
  console.log(firstName, gender);
}

personData(person);

// -----------------------------------------------------------
function listOfArrayItems(items) {
  for (let i = 0; i <= items.length - 1; i++) {
    console.log(i, items[i]);
  }
}

const colors = ["Green", "Yellow", "Brown", "Orange", "Red"];
listOfArrayItems(colors);

var arrOfKeys = ["speed", "altitude", "color"];

var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
  console.log(drone[arrOfKeys[i]]);
}
console.log(drone);


