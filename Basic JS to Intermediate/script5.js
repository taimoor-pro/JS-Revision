//  Methods & This Keyword
//  This keyword & Window Object
// call , apply, bind
//	This inside arrow functions
// Short syntax for methods
//  Object.create()
// Factory functions & discuss some memory related problems
// What is __proto__ , [[prototype]]
//  how to check function name?
// prototype
// New keyword
// More discussion about __proto__ and prototype
//  classes & inheritance
//  constructor
//  Super keyword
//  Method overriding
//  Getters and setters
//  Static in class
//  Local Storage

//~ Methods
// Function inside object is called method
// or a function inside a class is called method

const person = {
  firstName: "Taimoor Nawaz",
  age: 21,
  about: function () {
    console.log(`Person name is Taimoor and age is 18`); //* so kal ko haam ne firstName change ker diya or age bhi too phir to problem ho jayn gi q kai hard code likha wa hai

    console.log(this); // ye refer ker rha hai pury kai pury person object ko
    //* why we need this object keyword?

    //  Because without this ap is tara firstName ko call nahi ker skhty hai. ek method mai to ap ko object refer kerna hota hai kai bahi mera firstname is object se utha loo
    console.log(`Person name is ${this.firstName} and age is ${this.age}`);
  },
};
person.about(); // is ko haam method bhi bool skhty hai or ye function bhi hai because method is liya q kai ye object kai under hai

console.log("\n\n\n");
person.firstName = "Ali Uddin";
person.about();

console.log("\n\n\n");
function personInfo() {
  console.log(`Person name is ${this.firstName} and person age is ${this.age}`);
}

function hobbies() {
  console.log(`Person hobbies are ${this.hobbies}`);
}

const person1 = {
  firstName: "Sahil Lodhi",
  age: 31,
  hobbies: ["Programming", "Gamming", "Travling"],

  about: personInfo,

  personHobbies: hobbies,
};
person1.about();

person1.personHobbies();

console.log("\n\n\n");

const person2 = {
  firstName: "Zahid Hussain",
  age: 22,

  personAbout: personInfo,
};
person2.personAbout();

const person3 = {
  firstName: "Ali",
  age: 19,
  hobbies: ["Reading", "Gamming", "Travling"],

  perHobbies: hobbies,
  personInf: personInfo,
};

person3.perHobbies();
person3.personInf();

// ~ This keyword & Window Object
//*👆 see so this and window ek hi cheez hai JS kai under
// * for e.g. mai yha this print ker du too kiya ayna ga mery pas?
console.log(this); //* this prints a window object
//👆 ab is mai bhoth kuch hai for. e.g. alert method hai confirm method hai or bhoth sary hai. .// so ye object hamy JS provide ker rahi hai

console.log(this === window); // true

function hello() {
  "use strict";
  console.log(this); // so window object ayn ga isi liya developer "use strict" mode use ler laity hai function mai // q kai jaab ap function banaty hai too woo bhi is window mai ajata hai //* Undefind ab mily ga
}
hello();

// ~ Call, apply and bind method
//~ call

// for e.g.
// haam function ko call kerty hai kuch iss tara 👇🏻
function myFunc() {
  console.log("Hello My Func");
}

// myFunc();

// so 👆 haam is ko u bhi call kr skhty hai see 👇🏻
myFunc.call();

// * Sawal ye hai kai mai call method use hi q karu?

//* mujy  user 1 ka about user2 mai use kerna hai or mujhhy copy bhi nahi kerna
const user1 = {
  firstName: "Taimoor",
  age: 18,
  about: function (favBook) {
    console.log(this.firstName, this.age, favBook);
  },
};

const user2 = {
  firstName: "Ali",
  age: 21,
};
user1.about("AI");
//* mujy  user 1 ka about user2 mai use kerna hai or mujhhy copy bhi nahi kerna

user1.about.call(user2);

//  ami mazeed parameter bhi saat pas kerskhta hu call mai
user1.about.call(user2, "Future is a AI Developer");

function employeeList(FavBook, FavColor) {
  console.log(
    `Employee Name is: ${this.namee}, age is ${this.age}, Favorite Book name is ${FavBook}, And the Favorite color is ${FavColor}`
  );
}

const employee1 = {
  namee: "Saif",
  age: 21,
};
const employee2 = {
  namee: "Hermain Arif",
  age: 22,
};
const employee3 = {
  namee: "Owais",
  age: 26,
};
const employee4 = {
  namee: "Ahmed",
  age: 25,
};

employeeList.call(employee1, "AI", "Red");
employeeList.call(employee2, "Blockchain", "Orange");
employeeList.call(employee3, "Money Maker", "Purple");
employeeList.call(employee4, "Teenagers", "Black");

const obj = {
  userID: 1,
  userName: "Taimoor",
  userAbout(favColor, favBook) {
    console.log(
      `Name is : ${this.userName}, Favorite Color is ${favColor} & Favorite Book is ${favBook}`
    );
  },
};

const obj2 = {
  userID: 2,
  userName: "Ahmed Arif",
};

obj.userAbout("Yellow", "Future is AI");

obj.userAbout.call(obj2, "Red", "Blockchain is nearest");

//~ Apply
// call and apply mai kuch different nahi hai. apply bhi call ko hi internaly use kerta hai.
// bs jhaa ap AI ya Red parse  employeeList.call(employee1, 'AI', "Red"); kr rahy is mai alg alg to ap apply use ker kai bhi kr skhty hai ap array pas krty hai

function emplayeeList2(FavBook, FavColor) {
  console.log(
    `Employee name is '${this.namee}' and age is '${this.age}', and Favorite Book is ${FavBook} & Color is ${FavColor} `
  );
}
emplayeeList2.apply(employee2, ["'AI is unknown'", "'Yellow Color'"]);

//~ bind
// bind mujhy function return kerta hai.
// or mai in future kabhi bhi is ka function call kerni hoo to mai ker skhta hu

function employeeList3(hobbies, color) {
  console.log(
    `Name is: '${this.ename}' and age is '${this.eage}' and the hobbies is '${hobbies}', color is '${color}'`
  );
}

const eObj = {
  ename: "Taimoor Nawaz",
  eage: 21,
};
const eObj2 = {
  ename: "Ahmed Nawaz",
  eage: 24,
};

const func = employeeList3.bind(
  eObj,
  ["Programming", "Foot bool", "Islamic Recite"],
  "Yellow"
);
const fun2 = employeeList3.bind(
  eObj2,
  ["Graphic Designing", "Circket", "Islamic Recite"],
  "Magenda"
);

func();
fun2();

//~	This inside arrow functions
const myObject = {
  userName: "Saif Uddin Lodhi",
  age: 22,
  about: () => {
    console.log(`User Name is ${this.userName} and age is ${this.age}`);
  }, //* Arrow function mai "this" nahi hota arrow function jo this leta hai woo apny sarounding se leta hai. // so is ka jo this hoaga ek level up means is ka this hoga window.

  info: () => {
    console.log(this);
    console.log(this.firstName, this.age);
  },
};

myObject.about();
myObject.info();

//~	Short syntax for methods
// so ap ko function kai liya us tara key value pair likhny ki zarurt nahi hai.
const userData1 = {
  firstName: "nauman",
  age: 21,
  about() {
    //* so ap direct bhi kr skhty hai
    //* this is a method or a function ok but haam is ko method boly gai
    return `${this.firstName} & age is ${this.age} year old`;
  },
};

console.log(userData1.about());

//~	Factory functions & discuss some memory related problems
const myUsers = {
  firstName: "Taimoor",
  lastName: "Nawaz",
  email: "example@gmail.com",
  age: 21,
  address: "House number, colony town Block tower",
  about() {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18() {
    return this.age >= 18;
  },
};

const userAbout = myUsers.about();
console.log(userAbout);

const is18 = myUsers.is18();
console.log(is18);
//for e.g. mery lakho karoro users hongy so ab lakho karoro user too ham is tara nahi bna skhty 👆 kai phly haaam ek user bnayn phir dusra so itnaa tedious kaam ham nahi ker skhty.

//* so mujjhy asa function bnanana hai jis mai
// function (that function create object & then add us mai key value pair and then return)

//~ First solution to that problem
console.log("\n\n\n");

const employees = {
  about: function () {
    return `${this.namee} is ${this.age} years old`;
  },

  is18() {
    return this.age < 18;
  },
};

function myEmployees(
  namee,
  age,
  designation,
  address,
  phoneNumber,
  email,
  gender
) {
  //*best way to use __proto__chain detail disscuss in detail after this in below.
  const emp = Object.create(employees);

  emp.namee = namee;
  emp.age = age;
  emp.address = address;
  emp.phoneNumber = phoneNumber;
  emp.email = email;
  emp.designation = designation;
  emp.gender = gender;

  //* 👇🏻 is ko bhir likhny ka reson nixhy defin hai line number 337
  // usr.about = function () {
  //   return `${this.firstName} is ${this.age} years old`;
  // };
  // usr.is18 = function () {
  //   return this.age >= 18;
  // };

  //* yha pr idher refrence store kerta hu
  // usr.about = employees.about; // mai is ki refrence likh rha hu yha pr store woo ek hi jgah pr hoagya upr apny kerwaya hai
  // usr.is18 = employees.is18;

  //* 👆 is tarky se bhi acha hai kai ham proto use kary

  return emp;
}

const emp1 = myEmployees(
  "Taimoor Nawaz",
  21,
  "Software Enginner",
  "BufferZone",
  "03xxxxxxxxx",
  "example@gmail.com",
  "male"
);
const emp2 = myEmployees(
  "Saif Uddin",
  25,
  "Software Developer",
  "Nagan",
  "03xxxxxxxxx",
  "example@gmail.com",
  "male"
);
const emp3 = myEmployees(
  "Hermain",
  22,
  "Graphic Designer",
  "Up More",
  "03xxxxxxxxx",
  "example@gmail.com",
  "female"
);

console.log(emp1);
console.log(emp2);
console.log(emp3.namee);

const empAge = emp1.is18();
console.log(empAge);

const empAbout = emp2.about();
console.log(empAbout);

//👆 ab is mai bhoth sari kamiyaa hai.
//* jesy kai ap jesy hai emp1 bnaegy gai us mai doo method hongy, phir emp2 bnay ga phir se us kai doo method hongy so agr mery ek mellion user hai too ek million bar ye method bany gai? or utnii hi meri memry fill hogi.

//* ab method too mery same hi hainaa too baar baar repeat q?

//* so mai hamesha bhir rakhuga main function se taky ek hi baar mera object ho usi mai ek hi memory mai change hota rahy hai.
// jaab kai function kai under kerny se meri memory bhoth za fill hogi w kai mai baar baar hr ek emplooyee kai liya functions check r create ker rha hu.

//~ Why that solution isn’t that great
//* soo agr hazaro method ap ko likhny ho too kiyaa ap  employees object iss mai bhi add kary gai or phir function mai bhi? agr kal ko ap sirf method mai lkihy gai or function mai bhool gayn too phir? so ap use kary proto chain ki jo mainy __proto__ nichy smjhya hai us ki

//~ What is __proto__ , [[prototype]]
//* proto ya [[prototype]] jab hoti hai jaab ap obj2 mai obj1 ki 'keys' use kerna chayn taab.
// * ye __proto__ or [[prototype]] both are same but prototype is diffrent ye same nahi hai in __proto__ or [[prototype]] kai.
// so obj2 ka proto hoagya obj1

const obj1 = {
  key1: "value1",
  key2: "value2",
};

// const objj2 = {
//   key3: "value3",
// };

// objj2.key4 = "value4";
// console.log(objj2);

//* console.log(objj2.key1); undefind
//* there is one more way to create empty object jis mai ap obj1 kai key ko easly access ker skhty hai
const obje2 = Object.create(obj1);
console.log(obje2.key1);

obje2.key1 = "OK Key Has Been Changed";
console.log(obje2.key1);
console.log(obj1.key1);
console.log(obje2); //* ab ager dekhy to is mai obj1 ka proto  bhi hai
console.log(obj1);

const obj1maiputt = Object.create(obje2);
console.log(obj1maiputt); // ye kis se <prototype> hai woo zarur how horha hai see in a broweser

console.log(obje2.__proto__); //  so see dekhy ga kai obje2 mai ab obj1 ka bhi object para hai

//~how to check function name?
function helloWorld() {
  console.log("Hello World");
}

helloWorld();
console.log(helloWorld.name);

//* you can add your own properties
helloWorld.myOwnPropertyAdd = "Adding Property";
console.log(helloWorld.myOwnPropertyAdd);

//~ What is prototype
//* ksii function ko haam JS mai object bhi bolty hai
//^ ye bilkul muktalif hai __proto__ / [[prototype]] is se
//^ Function hamy dety hai free space so woo free space ek object hai or us object ko bolty hai //* "prototype".

function itsOwnFunction() {
  console.log("Taimoor Nawaz");
}

console.log(itsOwnFunction); // prototype: Object { … }

itsOwnFunction.prototype; // ye function ne diya hai mujhy prototype //* so prototype asa sociya kai ek object hai. {} ye hamy use kerny kai liya di hai ye is liya diya hai taky hamy function se relate agr kuch key value pair add kerna par jayn to ham is prototype mai add ker dai

console.log(itsOwnFunction.prototype); // see hamy ek constructor object mil rha hai or us kai under whoi funtion hai joo ham ne banaya tha.

//^ ye prototype sirf or sirf function provide kerty hai

//* jaab ham function bnaty hai too woo hamy deta hai ek free ka space {} wo hai prototype too means ye ek object deta hai taky hamy agr is funcction se relate key value pair add kerni pary to haam kr dai

//^ only function provides protoype property?

// * proved
if (itsOwnFunction.prototype) {
  console.log("Prototype is present is only function");
} else {
  console.log("Prototype is not present in function");
}

//* dekhty hai object or Array kai pas hai protoype?
const helo = {
  key: "value1",
};

if (helo.prototype) {
  console.log("Prototype is present is only Objecs");
} else {
  console.log("Prototype is not present in Objects");
}

//~ Use prototype
// * ab prototype mujhy {} kahli object deta hai ap is mai add ker slkhty hai delete ker skhty hai or jo ek object kai saat kiya jata hai ker skhty hai

function human() {
  console.log("Its Own Prototype");
}

human.prototype.namee = "Taimoor";
human.prototype.age = 21;
human.prototype.address = "15/A 4 Buffer Zone";
human.prototype.gender = "Male";
human.prototype.about = function () {
  console.log(`User name is ${this.namee} & age is ${this.age}`);
};

console.log("\n\n\n");
human.prototype.about();
console.log(human.prototype);
/*
 *so acha ye hai kai jaab mujhy function ne diya howa hai too mai woo q naa use karo prototype */

//~ Constructor function
//* usrs is ko haam constructor function bhi bolty hai q kai ye hamry liya construct ker kai dai rha hai
// So Above E.g ko mai dubhara karu ga

function emplooyees2(ename, eage, eaddress, egender) {
  const emp = Object.create(emplooyees2.prototype);

  emp.ename = ename;
  emp.eage = eage;
  emp.eaddress = eaddress;
  emp.egender = egender;

  return emp;
}

const employe1 = emplooyees2("Taimoor", 21, "Bufferzone", "Male");
const employe2 = emplooyees2("Ali", 18, "Nagan", "Male");
const employe3 = emplooyees2("Ahmed", 24, "Power House", "Male");
console.log(employe1);

emplooyees2.prototype.about = function () {
  console.log(`My name is ${this.ename} and my age is ${this.eage}`);
};
emplooyees2.prototype.is19 = function () {
  console.log(this.eage > 19);
};

employe1.about();
employe2.about();

employe3.is19();
employe2.is19();

//*^& so prtotype simple ek object hai & __proto__ [[Prototype]] jo bhi ap chain create karo gai meaans Object.create() us ka refrence hai. refrennce in the sence kai obj1 ka data ap ibj2 mai use kary without copy to ye saat mai ek refrence deta hai obj1 ka obj2 mai proto ker kai

//~ New keyword
// Ye hamry liya three kaam kerta hai
// 1) emplty object this = {} bnata hai means {} ki value this hogi
// 2) return this {}.
// 3) Chaining wala kaam means Object.create() joo ham uper khud ker rahy thy kai proto bn jayn ye hamry liya khud ker daiga

function userData(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}

userData.prototype.about = function () {
  console.log(`${this.firstName} and Age is ${this.age}`);
};

const userInfo1 = new userData("Taimoor Nawaz", 21);
console.log(userInfo1.age);
const userInfo2 = new userData("Saif Uddin", 11);
const userInfo3 = new userData("Mohsin Khan", 22);

console.log(userInfo3);

userInfo3.about();

//~ Constructor function with new keyword
//* usrs is ko haam constructor function bhi bolty hai q kai ye hamry liya construct ker kai dai rha hai
//* ab upr wali e.g. ko haam new keyword se kerty hai
//^ ek convention hai kai agr hamy new keyword laga kr hi kaam kerna hai to usrs ka u capital U mai hooga this is a convention meanse Contructor mai Capitialletter hota hai function kai define kai waqt

function User(firstName, age, gender, phoneNumber) {
  this.firstName = firstName;
  this.age = age;
  this.gender = gender;
  this.phoneNumber = phoneNumber;
}

const us1 = new User("Taimoor", 21, "Male", "0313xxxxxxxxx");
console.log(us1);

const us2 = new User("Ali", 22, "Male", "672813xxxxxxx");
console.log(us2.gender);

User.prototype.usersInformation = function () {
  console.log(`${this.firstName} and Phone Number is ${this.phoneNumber}`);
};

us2.usersInformation();

//* now check us1 key
for (let user1 in us1) {
  console.log(user1); // is kai object mai se too key laa hi rha hai but ye proto se bhi utha kr laa rha hai
}

console.log("\n\n\n");
// agr ap prototype wali key read nahi kerna chaty sirf upr waly function ki joo bni hai woo kerna  chaty hai too see.
//* so yha pr mery pas ek method hai hasOnProperty means jo user ki khud ki property hai woo. so wo prototype wali naa dai

for (let user2 in us2) {
  if (us2.hasOwnProperty(user2)) {
    console.log(user2);
  }
}

//~ More discussion about __proto__ and prototype

const myArr = [1, 2, 3];
// myArr.// is kai agy jesy hi . dot lagy gai itnyyy sary is arry kai method mill jayn gai soo ye sary method JS mai kha se aty hai?
// ye sary method JS mai prototype deta hai
// or yah array to function nahi hai joo prototype ho ? so JS internaly array ko u call kerta  hai new Array
let numbs = new Array(1, 2, 3);
console.log(Array.prototype); // se all methods of array

console.log(numbs);

// agr is numbrs ka protoype check kerna hoo to
console.log(Object.getPrototypeOf(numbs)); // jo array ka prototype hai wo [] asa dekhy ga lkin ye bhi ek array ka object hai internaly

console.log("\n\n\n");
//^ye upr jo haam ne contructor with new keyword wala kaam kiya hai so ap ko nahi lagta ye kaam kitna tedious hai?
// phaly constructor bna rahy hai phir prototype set kr rahy phir  method add ker rahy hai phir new keyword laga kr call kr rahy hai.
//* Asal yha prototype likh ker  jo add kerwana pr rha haina ye muhkil kaam hai
/* Usrs.prototype.usrAbout = function () {
  console.log(
    `User: firstName is ${this.firstName}, age ${this.age} & gender is ${this.gender}`
  );
}; */

//^ so JS mai es16 mai or 2015 mai class keyword aaya tha👇🏻

//~ Class keyword
//* so classes kai under haam apny properties or method ki likhty hai, bs jo kaam haam function bna kr phir uska prototype kai zariya add ker kai kr rahy hai woo kaam asan hojayn ga using class keyword se

//* So JS mai classes are fake. 🤔

// q kai joo kaam haam class bna kr kary gai internaly woo kaam 👇🏻 asy hi horha hoga
function Peoples(pName, pAge, pGender) {
  this.pNAme = pName;
  this.pAge = pAge;
  this.pGender = pGender;
}

const p1 = new Peoples("Faheem", 22, "Male");
console.log(p1);

Peoples.prototype.aboutFunc = function () {
  console.log(`Name is ${this.pName} and age is ${this.pAge}`);
};

p1.aboutFunc();

//----------------------------------------------------------------

// Syntax
class MyUser {
  // Constructor Work:
  /*  constructor(yha jesy function mai parameters hai wesy hi yha){
    console.log("Constructor Called") // is sy mujhy ye pata chaly ga kai constructor kaab call howa & jaab jaab object bnao ga using a new keyword ye taab taab call hoga


    * ye hamry liya Object bnata hai
    this.firstName = firstName
  }*/
  // * jesy mai function kai nichy prototype use kr kai function add ker rha tha like about kha yha haam ^class kai under hi ker skhty hai asani se
  // about(){
  //   console.log(
  //   `User: firstName is ${this.firstName}, age ${this.age} & gender is ${this.gender}`
  // }
}

console.log("\n\n\n");

// * OR AB jaab mai 'new' laga ker call karunga to construtor hamara khud call hojayn ga.
//& most important baat ye hai kai jaab bhi haam new laga kr call kary gai too hamra constructor call hoaga new keywrod kai bna ap object nahi create ker skhty.

//~ Example using class keyword
class UserClass {
  constructor(namee, email, age, gender, DOB, address) {
    this.namee = namee;
    this.email = email;
    this.age = age;
    this.gender = gender;
    this.DOB = DOB;
    this.address = address;
  }

  is19() {
    return this.age > 19;
  }

  about(favBook) {
    return `User name is ${this.namee} & User Age is ${this.age} & User Favorite Book is ${favBook}`;
  }
}

const usr1 = new UserClass(
  "Taimoor",
  "example@gmail.com",
  21,
  "Male",
  "07-May-1190",
  "Bufferzone15/B"
);
const usr2 = new UserClass(
  "Ali Hussain",
  "example@gmail.com",
  23,
  "Male",
  "07-June-1190",
  "Nazmabad B Block"
);
console.log(usr1.address);
console.log(usr2.gender);
console.log(usr2);

console.log(usr2.is19());
console.log(usr1.about("'AI Is the future'"));

console.log(Object.getPrototypeOf(usr1));

//* One more E.g
// create a animal class and animal kai pas doo properties hongi name, age. and ap ko ek method banana hai eat.

class Animal {
  constructor(aName, aAge) {
    this.aName = aName;
    this.aAge = aAge;
  }

  eat(eating) {
    return `Animal is ${this.aName} and ${this.aName} eat is ${eating}`;
  }
}

const a1 = new Animal("Monkey", 4);
const a2 = new Animal("Lion", 6);
console.log(a1.aName);

console.log(a1.eat("Banana"));

console.log(a2.eat("Meat"));

//* Another Example
// AP ko ek "Cat" class bnanai hai and ap ek name lo and ek age us ki and eat method.

class Cat {
  constructor(catName, catAge) {
    this.catName = catName;
    this.catAge = catAge;
  }

  catEat(catEating) {
    return `Cat Name is ${this.catName} and cat eat is ${catEating}`;
  }
}

const c1 = new Cat("Perstian", 3);
const c2 = new Cat("Lato", 4);
console.log(c1.catName);

console.log(c2.catEat("Pops Food"));

//* 👆 ab see this both Animal and cat class mujhy alag bnani parhi bilkul Animal class jesi Cat bnai bs mainy name change kiya so ap ye ker skhty hai kai Animal ko use ker kai ap usi mai Dog, Cat ye sari classes bhi bna skhty hoo jo inhert hongi Animal Class ki

// for example mujhy Dog class bnanai hai so mai Dog class bananty wqt Animal ko 'extend' ker lunga see this 👇🏻

/* 
//* Dog is a Sub class/Derived Class of Animal. so Animal is a parent class/ base class.   
*class Dog extends Animal{
  ye ap ki Dog class bn gai hai or is mai sari ki sari properties hai jo bhi Animal kai pas properties hai wo ab Dog kai pas bhi hai
}
 */

// const tommy = new Dog()// <- ye object Dog class kai constructor ko call kary gi pr wha pr too koi constroctor nahi hai too ye Animal kai pas ja kr wha se lai lain gi or usy use kary gi hamry tommy object mai isi tara agr method nahi mila too wahi se laiga

class Dog extends Animal {}

const tommy = new Dog("Tomay", 2);
console.log(tommy.aName);
console.log(tommy);
console.log(tommy.eat("PET FOOD"));
//^ Object jo haam Instance bhi bolty hai.
//* Object/ Instance

console.log("\n\n\n");
//~ Super keyword
// Animal class is also name as Super class/ Parent Class/ Base Class
//* agr mujhy Dog ki speed bhi apny object mai pass krerni hai jesy name and age kiya waa hai too ye name or age to Animal constroctor se lai lainga pr speed nahi laiga so hamy ab Dog ki class kai under hi constroctor use kerna hai

class Dog2 extends Animal {
  constructor(name, age, located, dogID, speed) {
    //* yha pr name or age too wohi se ay ga jo Animal / Parent/ super class kai pas hai so mai super() keyword ka use karu ga

    super(name, age); //* So super ka matlab hamri jo Animal/ parent class hai wohi hota hai ,so name and age ko Super class ka constructor mill jayn ga

    this.speed = speed;
    this.located = located;
    this.dogID = dogID;
  }

  dogStar(rating) {
    return rating;
  }

  eat(eat) {
    return eat;
  }
}
const tommy2 = new Dog2("Tomay2", 4, "Bufferzone", 2, 5.3);
console.log(tommy2.aName);
console.log(tommy2.dogID);
console.log(tommy2.dogStar(5));

const tommy3 = new Dog2("Tomay3", 3, "Nagan", 3, 2.4);
console.log("The Rating of this dog Star is: " + tommy3.dogStar(3));
console.log(tommy3.aName); // this is a property
console.log(tommy3.eat("No Eat Only Milk")); // this is a method

//~ Method overriding
// ab for e.g. mainy eat() same jo Animal class mai hai wo dog2 mai bhi bna diya too usy yahi pr eat() mill jayn ga woo super class / parent class mai nahi jayn ga.
console.log(tommy3.eat("Meat Meat"));

//~ Getters and setters
//^Methods ko haam call kerty hai like person.fullname() and proerties ko haam call nahi kerty usy is tara likhty hau (person.fullname)
// & get >console.log(employee.fullName()); //* mai chata hu isy method ki tara call na karu baky proerty ki tara call ho. or mujhy same output dai jesa method deta hai

// & set > //* Ab mujhy user ka firstName and lastName 'set' kerna hai so see your employee class (basiclay mujhy object banany kai baad is ka firstName or lastName change kerna hai)

class Employee {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  get fullName() {
    return `Emplyee First name is ${this.firstName} & last Name is ${this.lastName} & age is ${this.age}`;
  }

  set fullNamee(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const empp1 = new Employee("Taimoor", "Nawaz", 21, "Male");
console.log(empp1.lastName);

// getter work
console.log(empp1.fullName); //* ager without uper get use kiya mujhy pura function return hoga. but mai chata hu isy property ki tara treat karu

// setter work
empp1.fullNamee = "Abdullah Uddin";
console.log(empp1.firstName);
console.log(empp1.lastName);

console.log("\n\n\n");
// Another Example
class Mans {
  constructor(fname, lname, age, gender) {
    console.log("Calling Constructor");
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.gender = gender;
  }

  get manFullname() {
    return `${this.fname} ${this.lname}`;
  }

  set fullName(fulname) {
    const [firstname, lastname] = fulname.split(" ");
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

const man1 = new Mans("Ali", "Nawaz", 22, "Male");
const man2 = new Mans("Shoaib", "ali", 25, "Male");

console.log(man1.fname, man1.age);
console.log(man2.fname, man2.age);

// getter work i wish use like a property
console.log(man2.manFullname);

//  setter work
man1.fullName = "Taimoor Saluddin";
man2.fullName = "Mustufa Akhlak";

console.log(man1.firstname, man2.lastname);

//~ Static methods and properties
//* So mai asy methods bna skhta hu jo class se directly related ho. jin ko call kerny kai liya mujhy object bnanay ki zarurt nahi hai.
//* abhi jo haam like about() ye waly bna rahy thy ye hamry object se related hai.

// ye get waly set waly or is19() or about() ye sary mery instance/ object hai. ap usy like u call ker kshty hai like person2.is19()
// so ap class person kai apny object/instance ko asy call nahi ker skhty but ap isy u nahi kr skhty like person2.personInfo(); jo kai class ka apna hoga see 👇🏻

class Car {
  constructor(cname, cmodal, cmilage) {
    this.cname = cname;
    this.cmodal = cmodal;
    this.cmilage = cmilage;
  }

  static about() {
    // * Static Maethod so ab mai apni class ka name direct use ker kai about dekha skhta hu
    // console.log(`Car Name: ${this.cname} and Car Modal is ${this.cmodal}`); // not showing proper
    console.log("This is a Static Method");
  }

  static desc = "This is a Static Description Property";

  get carDes() {
    return `Car Name: ${this.cname} and Car Modal is ${this.cmodal}`;
  }
}
const car1 = new Car("BMW", "2022", 22113);

Car.about();
console.log(Car.desc);

console.log(car1.carDes);

//*jesy static methods hai mery pas wesy hi static properties bhi hai

//^ in ko kaab use kerty hai;
/* 
Jaab App initilize kerty hai taab 
*/

// ~ Local Storage 
// agr ap apni memeory mai koi chezz store kerty hai or usy jaab render kerty hai apny browser mai or if you page refresh ya even if you close the browser so ap dekhy gai kai ap ka data store nahi hoota so age ap asa data hai kai ap usy abhi kai liya jaab taak ap databases ka use nahi kr rahy hai to ap browser ki local storge ka use ker skhhty hai even you refresh so taab bhi data nahi urta

//* This topic more detail cover in Advance JS>  
// local storage key value pare mai store hota hai  like see and iss ka ek method hai setItem
localStorage.setItem("key", "Taimoor");

localStorage.setItem("SlectedItems", JSON.stringify([1,2,3])); // agr ap Array mai show hi kerwana chaty hai to isy JSON.stringify kerdy means ap ne isy String or Array mai convert ker diya

console.log(localStorage.getItem("key"))