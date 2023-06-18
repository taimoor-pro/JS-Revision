//^ More useful things
//  Iterables
// Sets method
// add method
//  Map Function
//  get, has, keys methods
//  Object.assign
//  Optional chaining

//~ Iterables
//jismai haam apni for..of loop laga skhy

//for. e.g. -> string & array are iterables.

// see in string
let String = "Taimoor";
for (let char of String) {
  console.log(char);
} // so string iterable hai haam is pr for of loop laga skhty hai

// see in array.
const items = ["item1", "item2", "item3"];
for (let item of items) {
  console.log(item);
} // so array bhi iterable hai haam is pr for of loop laga skhty hai

//* so ab haam check kerty hai Object is Iterable or not?

const obj = {
  firstName: "Taimoor",
  age: 21,
  semester: "8th",
};

// for(let ob of obj){
//   console.log(ob);
// } //!  Error Obj is not Iterable nahi hai

//👆 so object iterable nahi hai.
//* so string and ARRAY hi iterable hain.

//* array like object
// jinky pas length property hoti hai.
// aur jis ko ham index se access kr skhty hai.
//e.g. string:- <- so string is a Array like object

const myStr = "Taimoor";
console.log(myStr.length);
console.log(myStr[2]);

//~ Sets

// (it is iterable)
// store data (defrent type ka bhi or same ka bhi just like array)
// sets also it is own method
// no index-based access
// order is not grunted
// unique items only (no duplicates allowed)
// and array or sets mai different hai ok.

// so mujhy 3 number store kerny hai
// const nums = [1, 2, 3]; //* so mai ek array mai store ker skhta hu.

// yahi kaam mujhy set mia store kerna hai
// so set mai dono iterable aa skhty hai string bhi array bhi lkin dublicate value ko wo ignore kerta hai

const set = new Set([1, 2, 3, 1, 3]);
console.log(set);

//* bhtoh impoertant diffrence set vs array mai
/* 
  array mai ap duplicate bhi bna skhty ho elements ko

  *set mai ap duplicate nahi ker skhty elements ko 
  for e.g [1, 2, 3 , 3] mai ye nahi ker skhta 3 , 3 ek baar yahi baar to woo ignore ker daiga 

  second sets mai no index based access. like ap u nahi ker skhty 
  set[1] so undefined aa  jayn ga

  or ordered bhi gurented nahi hai 1,2, 3 -> 3,2,1 bhi hoskhta hai

  and ap length use nahi ker skhty, undefined a jayn ga
*/

//* ab check kerty hai ye iterable hai ya nahi
for (let setIterable of set) {
  console.log(setIterable);
}

//* bazukaat set ko ham empty rakhty hai or us mai add kerty hai using add method se

const set2 = new Set();
set2.add(1);
set2.add(3);
set2.add(5);
set2.add(8);
set2.add(1);
console.log(set2);

const itms = ["item1", "item2", "item3", 4, "ok"];

const set3 = new Set();
set3.add(itms);

console.log(set3);
for (let st3 of set3) {
  console.log(st3);
}

//* same cheez doo baar add  so meri memory mai ye alag alag array hai iss liya add hojayn gai set mai
set3.add(["item22", "item23"]);
set3.add(["item22", "item23"]);
set3.add(["item21", "item22"]);

console.log(set3);

// asy nahi ker skhty q  kai address same hai array ka👇🏻
set3.add(itms);
set3.add(itms);

//* mery set mai koi cheez hai yaa nahi usy check kerna hai to us kai lia has method ka use kerty hai haam
// has true ya false written kerta hai

console.log(set.has(1));

//^ set ko jaab use kerna chiayn jaab ap kai pas unique value hai or ap ko pata hai kai ek value ek bar se zada nahi aa skhti. to us case mai haam set use kerty hai. for e.g. ids jo unique rehti hai.

//* for e.g. mery pas ek array hai us mai mujhy uniques chiayn

const arry = [1, 3, 3, 4, 6, 1, 2, 8, 9, 9, 9, 12, 15, 3, 12, 4, 2, 1, 10];
const newSet = new Set(arry);
console.log(newSet);

// ager mujhy is set ki length aloom kerni hi hai too?
let length = 0;
for (let st of newSet) {
  length++;
}

console.log(length);

//~ Maps
// map is an iterable
// store data in ordered fashion
// store key value pair (like object)
// duplicate keys are not allowed like objects
// different objects and maps
// object can only have string or symbol
// as key
// in map can use anything as key
// like array, number, string
// map method alag hai jo haam prh kr ayn hai or maps function alag hai ok.

// object literal/ object
// key -> string (99%)
// key -> symbol (1%)

const person = {
  firstName: "taimoor",
  "father name": "Faheem nawaaz",
  age: 21,
  1: 1,
};
// console.log(person["father name"]);
console.log(person.firstName);
console.log(person["father name"]);
console.log(person.age);
console.log(person);

//👆 is mai hamri key string mai hoti hai hmehsa
const employee = new Map();
employee.set("firstName", "Taimoor Nawaz");
employee.set("father name", "faheem Nawaz");
employee.set(1, 2); // yha pr ye 1 ek number hai
employee.set([1, 2, 3], "oneTwoThree");

console.log(employee);

/* 
saab se bara diffrence Map and Object mai ye hai,
  
  object mai yaa to key String hoti hai ya Symbol.

  map mai ap Key kisi bhi type ki rakh skhty hai.

  map is ordered granted. Ap ne jis ordered mai daala hai usi ordered mai ap ko mily ga
*/

console.log(employee.firstName); //* yha pr ap asa nahi kr skhty. undefined
console.log(employee["firstName"]); //* yha pr ap asa nahi kr skhty. undefined

//* so emploeyee kai pas yha per is kai pas ek get method hota hai jha ap key dalty hai.
// console.log(emploeyee.get(key)); //syntax

console.log(employee.get("firstName"));
console.log(employee.get(1));
console.log(employee.get("father name"));

//* mujhy sari keys chiyan so?
//^ keys method to pring all keys

console.log(employee.keys());

for (let keys of employee) {
  //* is surat mai mujhy Array format mai sari key mily gi
  console.log(keys);
}

for (let key of employee.keys()) {
  //* is surat mai mujhy  sari keys mily gi
  // console.log(key);
  console.log(key, typeof key);
  console.log(Array.isArray(key));
}

//* getting Key and Values both
/*
!for (const 'keye, value' of person2) { keye, value asy likhny se error aynga so haam ne array destructuring parhi thi us mai ap [keye, value]
}
*/

for (let [key, value] of employee) {
  console.log(`key is ${key} & value is ${value}`);
}

// mai u bhi ker skhta hu
const myMap = new Map([
  ["First Name", "Taimoor Nawaz"],
  ["Father Name", "Faheem Nawaz"],
  [21, "Age"],
]);

console.log(myMap.get(21));
console.log(myMap.get("First Name"));

//* Realistic Example

const personData = {
  id: 1,
  firstName: "Taimoor",
  age: 21,
}; // mujy is mai add nahi kerna mujhy kis or mai add keri hai mazeed information so mai Map function ka use karu ga

const extraInfo = new Map();

extraInfo.set(personData, { gender: "Male", employeementStatus: "Employeed" });
console.log(extraInfo.get(personData).gender);

//~ Object.assign

// clone using object.assign
// haam ne cloning sekhi thi

// or object ka heap mai address same hota hai

const object = {
  key1: "value1",
  key2: "value2",
};

// agr ap nahi chaty kai memory mai ye dno ek hi ho obj2 and obj to ap cloning ker skhty hai spread op. se

//* const obj2 = { ...obj }; // ab is se ye hoga kai mai obj mai key add karunga too obj2 mai add nahi hogi
// cloning ka dursa tarika
const obj1 = { ...object };
obj1.newKey = "newKeyValue";
console.log(obj1);
console.log(object);

const obj2 = Object.assign({}, object); //* js ko use kerty hoyn purany code mai ap ko zada taar ye mily ga spread new hai ES6 ka hai
obj2.newKeyAddObj2 = "Value Added";
console.log(obj2);
console.log(object);

//~ Optional chaining
const users = {
  firstName: "Taimoor",
  // address: { houseNumber: "1234" },
};

// console.log(users.address.houseNumber); // for e.g. mai apny object se address ko comment ker deta hu too mery pas error aynaga //!15.js:262 Uncaught TypeError: Cannot read properties of undefined (reading 'houseNumber')

//  ab mai ye run kerta hu zaara
console.log(users.address); // to dekho undefined ayan ga. hala kai mainy comment kiya waa hai.

//so asa hoskta hai kai abhi address hamry object mai exsist naa kary or kuch time baad kary too ham chaty hai error naa dai undefind too chalo theak hai so haam . dot kai saat quesion amrk ka use kerskhty hai

//* ? <-- this is  called optional Chaning

console.log(users?.firstName);
console.log(users?.address?.houseNumber); // ab yha error nahi aynga undefined aynga . ye ? asy kaam kerta hai kai ager user exsist kerta hai too mujjhy firstName dai or ager nahi hai too mujhy undefined dai dain. error naa dai.

if (users?.address?.houseNumber == undefined) {
  console.log("user address does not exist");
}

//* so is ka main use nested object mai hota hai.
