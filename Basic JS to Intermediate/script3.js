console.log("Array Methods");

//^ Very Important Array Methods

//*👇🏻 so ye Array kai methods hai or array pr kaam kary gai.

/* 
concat: combines two or more arrays into a "new array"

copyWithin: copies a portion of an array to another location within the same array

entries: returns a new Array Iterator object that contains the key/value pairs for each index in the array

every: tests whether all elements in the array pass the test implemented by the provided function

fill: fills all the elements of an array from a start index to an end index with a static value

filter: creates a new array with all elements that pass the test implemented by the provided function

find: returns the value of the first element in the array that satisfies the provided testing function

findIndex: returns the index of the first element in the array that satisfies the provided testing function

forEach: executes a provided function once for each array element

includes: determines whether an array includes a certain value among its entries, returning true or false

indexOf: returns the first index at which a given element can be found in the array, or -1 if it is not present

join: joins all elements of an array into a string

keys: returns a new Array Iterator that contains the keys for each index in the array

lastIndexOf: returns the last index at which a given element can be found in the array, or -1 if it is not present

map: creates a new array with the results of calling a provided function on every element in the calling array

pop: removes the last element from an array and returns that element

push: adds one or more elements to the end of an array and returns the new length of the array

reduce: applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value

reduceRight: applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value

reverse: reverses the order of the elements in an array

shift: removes the first element from an array and returns that element

slice: extracts a portion of an array and returns a new array

some: tests whether some element in the array passes the test implemented by the provided function

sort: sorts the elements of an array in place and returns the array

splice: adds and/or removes elements from an array
toString: returns a string representing the array and its elements

unshift: adds one or more elements to the front of an array and returns the new length of the array

values: returns a new Array Iterator object that contains the values for each index in the array.
These are some of the most commonly used Array methods in JavaScript, but there are many more available.

flat: creates a new array with all sub-array elements concatenated into it recursively up to the specified depth

flatMap: maps each element using a mapping function, then flattens the result into a new array */

//~ forEach
// for e.g ek array hai or us kai first index ko 2 se multiply ker kai print ker daiga
// function as a input laiga array ka first element or jo is ka index hai woo liaga and saat mai 2 se multiply ker kai print ker daiga & isi larah ap ko hr ek element kai liya kerna hai

const arr = [2, 4, 1, 5, 6, 8, 9, 2];

function multiply(arrayNum, index) {
  console.log("Index of Given Array Numbers is: ", index);
  console.log(`Array Numbers Multiplay by 2 is: [${arrayNum * 2}]`);
}

// for (let i = 0; i <= arr.length - 1; i++) {
//   // console.log(arr[i]);
//   // console.log("Index is ", i);

//   myArr(arr[i], i);

//   //* mujjhy ye loop chalny ki zarurat nahi hai mai forEach ka use ker skhta hu
// }

// forEach as a input callback laeta hai means as a input function laiga

//* so forEach inhi doo ko parse kerta hai ek array or dusra index khud parse ker deta hai ap ko kerny ki zarurt nahi hai. //index optional hai naa bhi dai parameter mai taab bhi no issue

arr.forEach(multiply);

//* ap foreach kai under hi function likh shty hai

arr.forEach((nums, index) => {
  console.log(nums + 2, index);
});

//* for each in realworld e.g. mostly ek array mai bhoth sary objects hoty hai
// ap ko hr ek object ka first name print kerna hai

const user = [
  { firstName: "Taimoor", age: 21 },
  { firstName: "Ali", age: 20 },
  { firstName: "Ahmed", age: 16 },
  { firstName: "Umer", age: 25 },
];

user.forEach((obj) => {
  console.log(obj.firstName);
});

console.log("\n\n\n");
//*👆 mai for of loop bhi use ker skhta hu pr bhoth sari jgahao pr forEach lagaty hai bs for of abhi aya hai isi liya

//~ map (most Important)
// ap use karo naa karo map method ap ki majburi bn jayn gi ap agr react use kr rahy hoo to ap lazmi use karo gai.
// so ye bhi ek callback function leta hai.
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.

const myArr1 = [2, 4, 7, 2, 1, 8];
const map1 = myArr1.map((nums, index) => {
  // console.log(index);
  return nums * 3;
});
console.log(map1);

// All Even Numbers
const map2 = map1.map((n) => n % 2 == 0);
console.log(map2);

//  Square of numbers
const square = myArr1.map((n) => n * n);
console.log(square);

//* Realistic Example
// using map printing firstname
const employess = [
  { firstName: "Taimoor", salary: "$9999k" },
  { firstName: "Ali", salary: "$9909k" },
  { firstName: "Hamza", salary: "$99k" },
  { firstName: "Saif", salary: "$91k" },
];

const firstNames = employess.map((names) => names.firstName);
console.log(firstNames);

//~ filter method
// ye bhi as a callback function laita hai
// jo filter ka callback function hoga wo hmesha return kary ga ek boolean value. true / false
// for e.g. mujhy filter kerwany hai even numbers ek array mai se to agr even number hoyn too hi woo add kary ga ek new array mai jo filter hai woo bhi mujhy new array deta hai agr odd howa too woo usy us array mai nahi daly ga

const myNumList = [1, 2, 4, 5, 6, 7, 9, 11, 3, 2, 4];
const isEvens = myNumList.filter((num) => num % 2 == 0);
console.log(isEvens);

const isOdds = myNumList.filter((nums) => nums % 2 != 0);
console.log(isOdds);
console.log("\n\n\n");

//~ Reduce Method
// for e.g. mujhy ek array number kai saab ka Sum kerna hai. ab is kaam ko kerny kai method or tariky or bhi bhoth sary hai haam yha concept smjhny kai liya kr rahy hai.
//  Reduce Return kerta hai single value

const myNumbrs = [1, 2, 3, 4, 5, 10];

const sum = myNumbrs.reduce((Accumulator, currentValue) => {
  return Accumulator + currentValue;
}, 0); /* ap callback kai saat saat naa initial value bhi pass ker skhty hai so iss ka matlab accumulator ki value saab se phaly zero (0) ho :?lkjayn gi. agr yha 100 dunga too 100 aynga Accumulator ki value mai. or current value phir array ki 1 ho jayn gi jo bhi first index per hoga woo currentValue woo hogi phaly. */

console.log("Sum of given Array is ", sum);

/*
Agr Ap zero(0) naa dai too bydefault 1 jo array kai first index hai wohi Accumulator bn jata hai and Curent phir array ka second index hoga  
Accumulator currentValue Return
(byDefault)1    2          3   
    3           3          6
    6           4          10
    10          5          15
    15          10         25
*/

//* Real world example
// for e.g. add to cart kerty ho ap daraz mai us kai nichy ap ko total ajata hai kai ap kai total itny hoagyn

const userCart = [
  { productID: 1, productName: "mobile", price: 12000 }, //<- ye pura currentProduct hai
  { productID: 2, productName: "TV", price: 15000 },
  { productID: 3, productName: "laptop", price: 22000 },
  { productID: 4, productName: "CPU Core i 9", price: 29000 },
];

const totalPrice = userCart.reduce((Accum, CurrentVal) => {
  return Accum + CurrentVal.price;
}, 0);

console.log("Total Price for your products is: ", totalPrice);

//~ Sort Method
//ASCII TABLE
//char: ascii value

//* String mai sort karny kai liya ham ascii codes ka use kerty hai

//* 200, 100, 7000, 230, 300, 4000, 50, 20, 80000 -> is ko sort karo.
//* 20 , 50, 100, 200, 230, 300 ... -> Expected Output
// so JS mai is ko sort kerny kai liya JS mai ek method hai sort

// * sort method mery orignal array ko imute kary ga means mery orignal array mai change kary ga
//* ab taak sort se phly jitny haam ne pary hai woo saab imutable nahi thy woo ek new array hamy detty thy

const sortNum = [200, 100, 7000, 230, 20, 300, 4000, 50, 20, 80000];
sortNum.sort();
console.log(sortNum);

//*Agr string hoga too woo us ka Asscii code ekhy gi jaa ker phly jesyh wo Taimoor ka T dekhy ga or Assci mai T ka number dekhy ga phir sort kary ga

const names = ["Taimoor", "ali", "usama", "Shoaib"];
names.sort();
console.log(names); // jesy Dictionary mai hota hai usi ki tara sort howa jesy a waly phly ayn gay phir b waly is tara agr to small letter first howa to.
// so ager capital later mix hai to phly capital lerters ki sorting hongi.

//So ab hamy apny expected output taak puhxna hai to kesy phunxhy gai.

//* sort method as a input callback bhi laiskhta hai

// Desending Order Sort
sortNum.sort((a, b) => b - a);
/* 
200-100 = +100
a-b return +positive(greater then 0) (b,a) too ham ne b ko phly kr dena hai. a ko baad mai. &(a-b)<- sorted in assending 

if -ve howa to phaly a ko rkahna hai phir b ko (a,b) & (b-a)<- sorted in desending
*/
console.log(sortNum);

// Assending Order Sort
sortNum.sort((a, b) => a - b);
console.log(sortNum);

//* Realistic E.g.
// for e.g. ap daraz ki website pr jaty hai or ap kai pas lowToHigh price and HighToLow prices aty hai.
const products = [
  { productID: 1, productName: "Mobile", price: 33200 },
  { productID: 2, productName: "laptop", price: 93000 },
  { productID: 3, productName: "charger", price: 13000 },
  { productID: 4, productName: "TV", price: 39000 },
  { productID: 5, productName: "macBook", price: 330000 },
  { productID: 6, productName: "table", price: 13000 },
  { productID: 7, productName: "tablet", price: 19020 },
  { productID: 8, productName: "LCD", price: 932000 },
];

// Low to High it means assanding order
products.sort((a, b) => a.price - b.price);
console.log("All Low To High Product Prices list: ", products); //* mai nahi chata kai ye pury kai pury product ko change kary ek order mai lai ker ayn so mai sirf price ko chaata hu too mai slice use ker lunga copy kai liya ap spread bhi use kerskhty hai

const lowToHigh = products.slice(0).sort((a, b) => a.price - b.price);
console.log(lowToHigh);

// High to Low it means decending order
const hightToLow = products.sort((a, b) => b.price - a.price);
console.log(hightToLow);

//~ find Method
//  ye bhi ek callBack() function laita, and return mai ek single value deta hai as per your condition like  isy jo first occurance hogi wo print ker daiga jesy cat ki length 3 hai to cat pahl hai too cat daiga
const myArr = ["hello", "cat", "dog", "lion"];
const ans = myArr.find((ary) => ary.length === 3);
console.log(ans);

//* Realistic e.g.
const usersData = [
  { userID: 1, userName: "Taimoor" },
  { userID: 2, userName: "Ali" },
  { userID: 3, userName: "Usaid" },
  { userID: 4, userName: "Umer" },
  { userID: 5, userName: "Owais" },
];

const userId3 = usersData.find((a) => a.userID === 3);
console.log(userId3); // its return a user id 3 full object return

//~ Every Method
// sary agr for e.g ek arry mai sary even number hai too true return kary ga other ek bhi us array mai usy odd mila to  false
//  ye bhi ek callback leta hai
//  ye bhi ek value return kerta hai but boolean

const myArr2 = [2, 4, 6, 8, 10, 12]; // true condition
const myArr3 = [2, 4, 6, 8, 10, 11, 12]; // false condition

const allIsEven = myArr2.every((n) => n % 2 == 0);
console.log(allIsEven);

const evenIsOneOddFalse = myArr3.every((n) => n % 2 == 0);
console.log(evenIsOneOddFalse);

//* Realistic example:
// agr price 13000 se kaam hai sary product ki too true return kary ga other wise false

const userCart2 = [
  { productId: 1, productName: "mobile", price: 14000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 35000 },
];

const priceCheck = userCart2.every((n) => n.price < 13000);
console.log(priceCheck);

//~ some method
// for e.g. agr koi ek bhi even number hai array mai or baki saab odd hai taab true return kary ga
// kya ek bhi number esa hai jo even hai
// true
// Its return Single value bolean true / false

console.log("\n\n\n");
const number1 = [3, 5, 11, 9]; // false case
const number2 = [3, 5, 2, 11, 9]; // true case

const nu1 = number1.some((n) => n % 2 == 0);
console.log(nu1);

const nu2 = number2.some((n) => n % 2 == 0);
console.log(nu2);

//* Realistic E.g.
//so mujhy ye check kerna hai kai koi bhi asa product hai jis ki kimaat ek lakh se uper jaa rahi hai.

const checkPriceH = products.some((n) => n.price > 1_00_00_0);
console.log(checkPriceH);

//~ fill method
// value, start, end
//e.g. ap ko asa array banana hai jis mai 10 item fill kerny hai or woo sary -1, -1 , -1... hoo and array ki length 10 ho
// new Array(length).fill(any)
// mutable hai

const fillingArray = new Array(10).fill(-1);

console.log(fillingArray);

const ary = [1, 2, 3, 4, 5, 6, 7]; //ap ko 3,4,5 ko zero kerna hai

ary.fill(0, 2, 5);
console.log(ary);

//~ splice
// start, delete, insert
// array kai bech mai se kuch insert kerna hai ya delete
//* splice bhi orignal array ko cahnge kerta hai mutable hai

const items = ["item1", "item2", "item3"];
// mujhy is mai se item2 delete kerna hai

const deletedItem = items.splice(1, 1);
console.log(items);

// so 1st index pr insert kerna hai 0 deleted hai or doo items inset kerny hai mainy "insertedItem", 2
//* and ap insert and delete symulteniouly bhi ker skhty hai.

items.splice(0, 0, "InsertedItem", 2);
console.log(items);

//* axha agr ap delete kerty ho to ap ko delete howaa wa return mai  bhi milta hai
console.log(deletedItem);
