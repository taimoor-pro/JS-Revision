"use strict";

var namee = "Taimoor nawaz";
console.log(namee);

namee = "Ali uddin";
console.log(namee);

let employeeName = "         Saif Uddin           ";
let employeeName2 = "Ali Uddin";

// ! sum = 1 + 4;

var age = 21;
var age = 23;
console.log(age);

//! let employeeAge = 22;

//! let employeeAge = 23;

const pi = 3.14;
// pi = 33.11; //!

// String
console.log(namee[0]);
console.log(namee.length - 2);
console.log(name[namee.length - 1]);

console.log(employeeName.toUpperCase());
console.log(employeeName.toLowerCase());
console.log(employeeName.trim());

console.log(employeeName.length); // no change length because string is immutable
//*so trim/ string kai or methods kiya kary ga us string mai koi change nahi kary ga mujhy new string daiga

console.log(employeeName2.slice(0, 2));
console.log(employeeName2.slice(1));

let array1 = ["item1", "item2"];
let array2 = array1;
console.log("Array1 is", array1);
console.log("Array2 is", array2);
array1.push("item3");
console.log("After");
console.log("Array1 is", array1);
console.log("Array2 is", array2);
//^ mainy sirf array1 mai push kiya tha but woo array2 mai bhi hogaya asaa yha ho rha hai wha uper wali primitive mai nahi so asa q?
// primitive type stack mai store hoty hai and
// refrence type heap mai or stack mai is ka pointer hota hai address hota hai taky print ho

//* It's important to note that in JavaScript, when you pass primitive data types to a function, they are passed by value, which means that the original value is not affected. On the other hand, when you pass reference data types to a function, they are passed by reference, which means that any changes made to the reference will affect the original value.

// Preemptive vs Reference type

const fruits = ["Apple", "Banana", "Graphs", "Orange"];
console.log(Array.isArray(fruits)); // this line is kai kiya fruits Array hai?
console.log(fruits);

fruits[2] = "Mango";
console.log(fruits);

//~ Array Methods
/* 
.length - returns the length of an array

.push(element) - adds an element to the end of an array

.pop() - removes and returns the last element of an array

.unshift(element) - adds an element to the beginning of an array

.shift() - removes and returns the first element of an array

.indexOf(element) - returns the index of the first occurrence of an element in an array

.slice(start, end) - returns a shallow copy of a portion of an array

.splice(start, deleteCount, element) - adds and/or removes elements from an array
*/

// .length
console.log(fruits.length);

// .push
console.log(fruits);
fruits.push("malta");
console.log(fruits);

// .pop
console.log(fruits);
fruits.pop(); // ye remove bhi kerta hai saat mai return bhi agr ap chyn to
console.log(fruits.pop()); // see
console.log(fruits);

// unshift
console.log(fruits);
fruits.unshift("Maltaa");
console.log(fruits);

// shift
console.log(fruits);
fruits.shift(); // ye bhi return kerta hai jo bhi ap ne shift kiya
console.log(fruits);

//~ How to clone array and how to concatenate two arrays
//~ clone/copy
// so cloning kai liya ye teno hai
//* slice, concat,  spread op.

// const someInfo = ["arr1", 23, "some data", "names"];
// console.log(someInfo);
// const otherArr = someInfo;
// console.log(otherArr);

// someInfo[3] = "Ali";
// console.log(someInfo);
// console.log(otherArr);
//* in above its wrong because mujhy copy waly array mai change kerwana hai

console.log("\n\n\n");
const someInfo = ["arr1", 23, "some data", "names"];
const otherArr = someInfo.slice(0);
console.log(someInfo);
console.log(otherArr);

console.log("\n\n\n");
otherArr[3] = "Ali";
console.log(someInfo);
console.log(otherArr);

// 2nd way to clone
console.log("\n\n\n");

// const copiedArr = someInfo;
const copiedArr = [].concat(someInfo);
// copiedArr.push("other info");
console.log(someInfo);
console.log(copiedArr);

console.log(someInfo === copiedArr); //false means ye heap mai alaga alag hai ek mai change kerny se dusry mai change nahi horha.

// 3rd way to clone using spread operator
// using spread operator [... yourCopyArray] three dots indicate the array is copy it is a spread operator
console.log("\n\n\n");
const copiedArray = [...someInfo, ..."12345678", ...array1, ...array2];

console.log(copiedArray);

console.log(copiedArray === someInfo);

// get items using loop
for (let i = 0; i < copiedArray.length; i++) {
  console.log(copiedArray[i]);
}

let arr = [];

for (let i = 0; i < copiedArray.length; i++) {
  arr.push(copiedArray[i]);
}
console.log(arr);

//~ For in loop
// its return index
//* Kon se loop kaab use kerni hai?
// Array kai saat haam for..in loop bhoth kam use kerty hai
// or while loop bhoth kaam use kerty hai

// normaly haam for..of and traditional for loop ka use kerty hai.

for (let arrItems in copiedArr) {
  console.log(copiedArr[arrItems]);
}

for (const iterator of copiedArray) {
  console.log(iterator);
}

//~ Array destructuring
// for e.g.
const myArr = ["value1", "value2"];
// so mujhy ek variable mai store kerna 0 index wala or ek per value2 1 indec wala

let value1 = myArr[0];
let value2 = myArr[1];
console.log(value1, value2);
// so JS mai ye 👆 kerny ka ek shortcut hai. so shortcut ye hai kai haam array ko destructuring ker skhty hai, destructuring means haam usy jesy myArr us ka jo 0th index pr hoga myVar1 ka variable bn jay ga us mai value store hojayn gi. or jo first pr hoga myVar2 bn jayn ga.
// or ap ek baar kerny kai baad ye myVar1, myVar2 normal varibales ki tara use ker skhty hai.
console.log("\n\n\n");

let [myVar1, myVar2, myVar3, , , , , , , myVarNo] = copiedArray;

console.log(myVar1);
console.log(myVar2);
console.log(myVar3);
console.log("\n\n\n");

myVar1 = "Final Arr";
console.log(myVar1);
console.log(myVarNo);

myVarNo = 67;
console.log(myVarNo);

console.log("\n\n\n");

for (const iterator of copiedArray) {
  console.log(iterator);
}

// let ary = ["Value"];
let ary = ["value1", "value2", "value3", "value4"];
let [var1, var2] = ary;
console.log(var1);
console.log(var2);

console.log("\n\n\n");
let newArr = ary.slice(1);
let [v1, ...restParameterss] = newArr;
console.log(restParameterss);

// Objects
const person = {
  id: 1,
  namee: "taimoor",
  address: "xyz, north KHI, PAK",
  phoneNumbers: ["+932xxxx", "+933222xxxx"],
  //! person hobbies: ["Programming", "Books Reading", "Money Making", "Techs Apps", "Startups"],
  "person hobbies": [
    "Programming",
    "Books Reading",
    "Money Making",
    "Making Techs Apps",
    "Startups",
  ],
};

console.log(person.namee);
console.log(person.phoneNumbers[0]);
//* So JS mai jo Key hoti hai wo bydefault string mai hi hoti hai so agr mai bina string kai key likhu to undefind aa jayn ga.

// Using Bracket Notation
console.log(person["phoneNumbers"][0]);
person.age = 21;
person["fatherName"] = "Faheem Nawaz";
person["gender"] = "Male";
console.log(person.gender);
console.log(person["person hobbies"][3]);

const email = "email";
person[email] = "taimoornawaz@gmail.com";

person.email = "mrtaimoor@gmail.com";

console.log(person);

//* so iterate kerny kai 2 tariky hai,
// for in loop
// Object.keys

for (let keys in person) {
  // console.log(keys);
  console.log(`${keys}: ${person[keys]}`);
}

// //* Object.keys
console.log(Object.keys(person)); // ye mujhy sari ki sari keys dai rha hai ek array mai
console.log(Object.keys(person)[1]);

console.log(Array.isArray(Object.keys(person)));

//  Ab mujhy keys pata hai so ye ek array formate dai rha hai so mai for in ab laga skhta hu
for (let key of Object.keys(person)) {
  console.log(`${key}: ${person[key]}`);
}

console.log("\n\n\n");
//~ Computed properties
const key1 = "objectKey1";
const key2 = "objectKey2";

const valu1 = "myvalue1";
const valu2 = "myvalue2";

// mujhy is tara chiayn
/* 
  const obj = {
  objectKey1: myvalue1,
  objectKey2: myvalue2,
};
 */

const makingObj = {
  key1: valu1,
  key2: valu2,
};

console.log(makingObj); //{key1: 'myvalue1', key2: 'myvalue2'} too mujhy iss tara output daiga to mujhy asa nahi chiayn

// so mai computed properties ka use karuga [key1]

const makedObj = {
  [key1]: valu1,
  [key2]: valu2,
};

console.log(makedObj);

const personInfo = [3, "ali uddin", "mrtaimoor@gmail.com", "+91xxxxxxx"];

const [id, namea, emails, phoneNumber] = personInfo;

// const keyOne = "id";
// const keyTwo = "namea";
// const keyThree = "emails";
// const keyFour = "phoneNumber";

const keyss = ["id", "namea", "emails", "phoneNumber"];

const personData = {
  [keyss[0]]: id,
  [keyss[1]]: namea,
  [keyss[2]]: emails,
  [keyss[3]]: phoneNumber,
};

console.log(personData);

// Or
const personData2 = {};

// personData2[keyOne] = id;
// personData2[keyTwo] = namea;
// personData2[keyThree] = emails;
// personData2[keyFour] = phoneNumber;

for (let data in (personInfo, keyss)) {
  personData2[keyss[data]] = personInfo[data];
}
console.log(personData2);

//* Object kai undr ek key ek baar se zada nahi hoskhti. see 👇🏻

const objectTest = {
  [keyss[0]]: id,
  key01: "some information",
  key01: "some information 2",
};

console.log(objectTest);

// Copy Object

const copiedObject = {
  ...personData,
  ...person,
  newKey: "data",
  [keyss[0]]: 5,
};

console.log(copiedObject);

// Overide newKey
const newCopiedObject = {
  ...copiedObject,
  ..."abc",
  newKey: "data2",
  [keyss[0]]: 10,
};
console.log(newCopiedObject);

//~ Object Destructuring
// Object ki key hemsha destructuring kai wqt milni chiyan
const employeeInfo = {
  empName: "ali",
  empAge: 19,
  company: "led",
  hours: "9am to 10pm",
};

const { empName, company, ...restParameters } = employeeInfo;

console.log(restParameters);

// ab for.eg. mujhy name ka empName nahi rakhna mujhy is kocahnge ker kai var1 rakhna hai. to : laga kr inn ka name change ker skhta hu mai

const { empName: newEmployeName, company: newCompany } = employeeInfo;
console.log(newEmployeName, newCompany);
console.log("it is changing variable is", newEmployeName);

//~ Objects inside Array
//* very usefull in real world applications

const users = [
  { id: 1, uName: "Ali", gender: "male" },
  { id: 2, uName: "Haseeb", gender: "male" },
  { id: 3, uName: "Komal", gender: "female" },
];

console.log(users);

// so mujhy ager iterate kerna hai too wesy to sary loop use ker skhty hai pr zada taar array kai liya traditional ya for of loop use hota.

console.log("\n\n\n");
for (let allKeys of users) {
  console.log(allKeys.uName);
}

//~ Nested Destructuring
const emplaoyeeDatas = [
  {
    employeID: 1,
    employeeNam: "Saqib",
    employeSalary: 23022,
    employeGender: "male",
  },
  {
    employeID: 2,
    employeeNam: "bilal",
    employeSalary: 21022,
    employeGender: "male",
  },
  {
    employeID: 3,
    employeeNam: "shiella",
    employeSalary: 20022,
    employeGender: "female",
  },
];

// for e.g. mujhy employee1 ka Id chiayn or empleoyee3 ka name so mujhy object mai se chiayn to mai object ki destructuring karu ga or mujhy variable ka name change bhi kerna hai user1 ka

const [{ employeID: empNewID }, , { employeeNam: empNewNamee }] =
  emplaoyeeDatas;

const [{ employeID }, , { ...restParm }] = emplaoyeeDatas;

console.log(restParm);

console.log(empNewID, empNewNamee);

//^ JS mai kuch objects khud se bny bnayn aty hai.
//~ Math Object
console.log(Math.PI);
console.log(Math.random());
console.log(Math.sqrt(4));
console.log(Math.round(Math.random() * 10));

//* ceil
// ye highst number hi dai ga always ager 4.4 hi q naa h0
const ceili = Math.ceil(4.2);

//* floor
// kuxh bhii ho heemhsa lowest hi dekhna hai
const floo = Math.floor(4.5);

//* trunc
// point kuch bhi ho bs wo hat jayn
const removePoint = Math.trunc(4.55);

//* pow
console.log(Math.pow(2, 3));

// * min max numbers

console.log(Math.min(2, 111, 21, 4, 6, -1));
console.log(Math.max(2, 111, 21, 4, 6, -1));

// so remove points so use floor
let y = Math.floor(Math.random() * 10); // 0 se 9 perfectly

let z = Math.floor(Math.random() * 11); // 0 se 10 perfectly

let l = Math.floor(Math.random() * 11) + 1; // 1 se 10 perfectly

// 15 se 25 taak kai beech kai number
let between = Math.floor(Math.random() * (25 - 15)) + 15; // 15 se 24 perfectly

let betweenAdd = Math.floor(Math.random() * (25 - 15)) + 15 + 1; // 15 se 25 perfectly

//*👆 ap loog ek function bna kr us mai parameter pass ker kai min max ki jgha rakh dai

//~ Date Object
let d = new Date();
console.log(d); 