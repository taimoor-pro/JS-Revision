//> how JS work
// Compilation
// Why Compilation
// How JS code Executes
// Hoisting
//  Are let and const are hoisted? What is a reference, Error?
// What is Global execution context?
//  Function Execution Context?
// What is Local execution context?
//  Lexical environment and scope chain
// This and window in global execution context
// Closures

//& (1)  Compilation

//Compilation three phase mai hota hai
/* 
1) Tokenizing/ lexing (Hamary code ko choty choty tukru mai toor dety hai) or unhi chunks ko ham bolty hai tokens

2) Parsing (phir unhy choty choty tukru ko smjhta hai or AST mai convert kerta hai means Astrict Syntax Tree)

3) Code Generation (or phir US AST ki help se hamara code ek executable formate mai hamra code genrate hota hai)
*/

// uper print kerwa rha hu or nichy initialize

// interpreter executes line ba line of the code

/*
 * So first hamra code early error check kerta hai

 * Second Variable kai scopes (jesy hi ap variable define kerty hai too wo sary variable phly hi dekh leta hai)

 * jo variable function mai define nahi hota woo global mai hota hai
*/
//* So phaly hamara code compile hota hai

console.log("Execution Start");
console.log(this);
console.log(window);
console.log(firstName);
//! var firstName = ."Taimoor";
var firstName = "Taimoor";
console.log(firstName);

// ^ see (17.png) &

//& (2) code Execution
/*
1) Global Execution Context
2) Function Execution Context
*/

// * IN JS code execute inside execution context

//*JS mai jitna bhi code hota hai woo execution contest kai under hi execute hota hai

//* means code ko execute kerny kai liya hamy execution context create kerna hogaa.

//^ or saab se phly jo execution context hota hai usy haam bolty hay hai "Global Execution context".

//~ 1) Global Execution Context
// ITS DIVIDE INTO TWO PARTS
// Creation phase / memory creation
// Code Execution phase

// is mai global execution context set hoga

/*      global execution context :
       2)Code Execu. Creation/global memory (execute hony se phly) 1)
      |-------------|---------------|
                        window obj
        console        (var) firstName = undefined
                       > set this ki value
      */

//^ see (17_Part.png)

//^ JS khud ek Synchronous programming language.
//* Synchronous means jaab taak phli line execute nahi hojati taab taak dusri line execute nahi hoskti & jaab taak dusri line execute nahi hoti taab taak tesri line execute hona start nahi hoti. and so on..

//* or JS single threaded hai thread ye kerta hai kai jaab taak ek line puri execute nahi hoti so dusri execute nahi hoti

console.log("Taimoor Nawaz First Line");
for (let i = 1; i <= 1000; i++) {
  console.log("Inner Loop Line Execute");
}
console.log("Taimoor Nawaz Second Line");

// ~ ●	Hoisting
// * code kai execute hony se phly variable assign hojaty hai undefined,  agr var se bnaaya hai to. q kai phly hi value undefined store kerdety hai
console.log(lastName);
var lastName = "Faheem";

// ~ ●	Are let and const are hoisted? What is a reference, Error?

//^ Var case
//* Code kai execute se phly var undefined set ho jata hai.
// e.g.
console.log(age);
var age = 21;
//* So var is a hoisted

//^ let case & const case
//! console.log(gender);
// let gender = "Male";

// * let & const kai case mai ye creating kai wqt ya rahy gain "uninitialized";
// let ye const se bnayn hoyn varibale bn too tjaty hai per ap un ko initiation se phly run nahi ker skhty.

//^ let & const ki hoisting hoti hai? means code kai execution se pahly memory mai add hoty hai?
//* so answer is YES let & const ki hoisting hoti hai. but woo abhi useless hai jaab tak mai initilization nahi ker deta.

let employeeName;
console.log(employeeName);

//! TDZ (Temporal Dead Zone)
// Jaab taak koi varibale means is tara let firstName = "Ali" (<- initilize nahi hojati taab taak ye temporal dead zone mai rahy ga or mujhy Refrence error deta rahy ga.)

//* Compilaion kai duran JS variable create nahi kerta Execuation kai wqt create kerta hai.

// so ab ek e.g lety hai

console.log("Hello world!");
let empFirstName = "Taimoor";
let empLastName = "Nawaz";

const myFun = function () {
  let var1 = "ali";
  let var2 = "uddin";
  console.log(var1);
  console.log(var2);
};

//*------------Global Scope--------
// firstName, lastName, function() (pary hai)
//so inner global scope
// ek function kai doo variable hai var1, var2

//~2) Function Execution Context

// e.g.
let foo = "foo";
console.log(foo);

function getFullName(firstName, lastName) {
  console.log(arguments); // arguments ek array like object hota hai jaab haam function create kerty hai function ki jo loacal memory hoti hai uder hi store hoty hai
  let myVar = "var inside func"; // local variable
  console.log(myVar);
  const fullName = firstName + " " + lastName; // local variables
  return fullName;
}

console.log(getFullName("Taimoor", "Nawaz"));

//* JS mai jaab bhi function call hoga too us kai liya new execution context create hoga. us execution context ko bolyn gai function execution context. see image (17.1.png)

//~ Lexical environment and scope chain
//* see image (17.2.png)
const lastNamee = "Nawaz";

const printName = function () {
  const firstName = "Taimoor";
  console.log(firstName);
  console.log(lastNamee); //*  ab ye apny local memory mai nahi mila too ye function global execution kai under present hai too ye global memory mai jayn ga jisy haam lexical khty hai kia lexical enviroment mai jaa kr dekhy gaa or ye jaab taak dekhta rahy ga jaab  taak global execuation mai nahi mil jata taab taak
};
printName();

//~ Closures
//* Closures bolty hai means jo function return hota hai ek function to wo plus apny saat local variable ko lai ker return hoty hai
// closures: 30% - 40%
// closures: 70% - 80%
// real example: 100%

//* function can return funtion
// clousres se phly ye baat pata ho kai jo hamry functions hoty hai woo dusry //^ function ko return ker skhty hai

function returningFunction() {
  function innerFunction() {
    console.log("This is a inner function");
  }

  return innerFunction;
}

console.log(returningFunction());

function printFullname(fname, lname) {
  function innfunction() {
    console.log(fname + " " + lname);
  }

  return innfunction;
}

const ans = printFullname("Taimoor", "Nawaz");
ans();

//^ jaab bhi mai innerfunction ko return karuga apny us Outer kai function kai under se too khali haat innerfunction return nahi hota, ye innerfunction jha present tha means OuterFunction kai under present tha, ye apny saat local memory kai varibale bhi saat lai ker return hogaa innerFunction. isi ko haam //* clouser bolty hai means jo function return kerta hai ek function + plus apny saat localvarible ko lai ker return hoty hai called closures

//* so ans() kai pas printFullname ka funtion to hai hi hai. plus saat mai firstName, lastName bhi hai jo return hoyn hai
//* see image (17.3.png)
// &
// * see image (17.4.png)

//~  clousers Example
//& Clousre Examples#1

function number(c) {
  let a = 12,
    b = 12;
  return function () {
    return a + b + c;
  };
}

const myAns = number(6); //  function () { return a + b + c; }; + a,b,c
console.log(myAns());
// See the explaination
// * see image (17.5-e1.png)
// * see image (17.5-e2.png)

//& Clousre Example#2
//* mai sequare mai jo bhi pas karunga number woo mujhy us ka square nikal ker dai daiga
/* const sequare = myFunnction(2);
sequare(4); // like 4^2 = 16
 */ //* so asa function bnana hai

function myFunction(n) {
  return function () {
    console.log(n * n);
  };
}

const sq1 = myFunction(6);
sq1();
const sq2 = myFunction(4);
sq2();
// See the explaination
// * see image (17.6-e1.png)
// * see image (17.6-e2.png)

//* Same kaam uper waly code ka arrow function bna kr bhi ker skhty hai haam
// ap return bhi hata skhty hoo is arrow function mai same hi kaam horha hoga jesy uper kiya haam ne sequare wergra nikalny kai liya
//^ Ye profeshional developer kerty hai mostly

const cube = (n) => () => console.log(n * n * n);

const cu1 = cube(3);
cu1();

//& Clouser Example#3
//* ek func() bnana hai or ye return kary ga ek function e.g. myFuncti() => const myFuncti = func() phir mujhy myFuncti() call kerna hai so likha waa ayna ga (Hi! you called me), ab jaab mai dubhara call karunga myFuncti() too lkiha waa aynga (mai already ek baar call ho chuka hu) or ab ap jitni baar kary gai too yai (mai already ek baar call ho chuka hu) yahi meesage daiga

// * ap ko trake kerna hai kai ap ek function ko kitni baar call ker chuky ho

const func = () => {
  let counter = 0;
  return () => {
    if (counter < 1) {
      console.log("Hi! you called me");
      counter++;
    } else {
      console.log("Already you called me! :)");
    }
  };
};
const myFuncti = func(); // return function + counter variable bhi para hai.
myFuncti(); // ap jaab mai dubhara myFuncti() call karo to likha waa ayn kai already you called me!

myFuncti();
myFuncti();
myFuncti();
myFuncti();
myFuncti();

const myFun2 = func();
myFun2();
myFun2();
myFun2();
myFun2();

// See the explaination
// * see image (17.7-e1.png)
// * see image (17.7-e2.png)