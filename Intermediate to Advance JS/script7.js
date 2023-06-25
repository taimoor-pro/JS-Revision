//  DOM Part 1

// Simple RandomColorGenerator.js
//  event
//  Selecting Element
//  Select Element Using (getElementByID).
//  Select Element using query selector.
// querySelectorAll
//  change text
// textContent & innerText
// Change the styles of Element
//  get and set Attribute
//  getElementsByClassName
//  getElementByTagName
//  Converted Array like object into Array (using Array.from or second way spread Operator)
//  Different b/w HTMLCollection vs nodeList
//  innerHTML
//  DOM Tree

//  Dom
//  Document Object Module
// * Browser meri dekhy ga HTML file or dekhny kai baad Bnyn ga Objects jis mai Key: value pairs hoty hai. or us Object ko bolty hai Document.
// * Or is Document ko Add ker daiga Window object mai key value pairs pr or window bn jayn ga property ab.
// & write window in console. in browser. so check (document) jo bna hai. read kai baad.
console.log(window);
// console.dir(document);
// console.log(window.document);

// * so is document object ko use ker kai apny Html ko kuch bhi ker skkhty hai.

//~ event
//* for e.g. mai agr form ka submit button press karu too kuch hoo like or load karo too module open hogayn too its all is event

// ~ Selecting Element
//* ap kai all elements, document name kai object mai pary hai to ap element method ko use ker skhty hai.

//~ Select Element Using (getElementByID).
//* Is kai liya mery HTML mai kisi element kai pas ID hona zaruri hai.
//* getElementByID ye document ka method hai to mujhy document kai saat isy call kerna pary ga

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading);

//~ Select Element using query selector.
//* query selector saab element ki, bhaly  wo class ho yaa id. yaa khud element ko select kerna ho saab kai liya hai.
//* is mai ager id select karo gai to use (#) or agr class to use (.)
const btn = document.querySelector(".form-group");
console.log(btn);

const inputText = document.querySelector("#inputText");
console.log(inputText);

const ul = document.querySelector("ul");
console.log(ul);
// console.dir(ul);

//~ querySelectorAll
//* nav-item jitny bhi hai woo mujhy mil jayn gai 👇🏻
const formGroup = document.querySelectorAll(".form-group");
console.log(formGroup); //* node-list mill rahi hai array ki tara pr ye array nahi hota. haam chayn to array bna skhty hai isy see
console.log(formGroup);
const array = [...formGroup];
console.log(array);

//~ Change Text
//& textContent & innerText
//^ textContent property se ap text change ker skhty hai
console.log(mainHeading.innerText); // see after textContent

console.log(mainHeading.textContent);
mainHeading.textContent = "Change Content";
console.log(mainHeading.textContent);

//* textContent mujhy sara ka sara textContent daiiga means meny ek span add kiya saat mai apni heading kai or display none ker diya too mujhy phir  bhi console mai sara ka sara textContent show hoga.

//^ innerText
//* same work textContent bs innerText mujhy wohi text daiga joo sirf display none kai baad joo bacha howa hai jo show horha hai browser mai wohi daiga sirf

console.log(mainHeading.innerText);
mainHeading.innerText = "This is use a text content";
console.log(mainHeading.innerText);

//~ Change the styles of Element
//for e.g. mujhy "Heading" ka color red kerna hai
mainHeading.style.color = "red";
//* agr mai bacgroung-color change kerna cho to haam js mai iss tara nahi likhty beech mai - daal kr its use a camelCase
mainHeading.style.backgroundColor = "black";
mainHeading.style.padding = "20px";
mainHeading.style.borderRadius = "10px";

const h2 = document.querySelector("div.headline h2");
console.log(h2); //* jo sirf phla H2 hoga wohi mily ga.

// style bhi apny ap mai ek object hai
//* ab mujhy is 👆 h2 kai jitny bhi style haina woo check kerny hai
console.log(h2.style);

//~ get and set Attribute
// so jesy class, href, id jo bhi opening tag kai under attributes hoty hai so uny mai get ker skhta hu or set kerskhta hu un ki values using JS

//^ getAttribute
// so mai first anchor jis mai Home text hai woo select kerta hu
const fisrtLink = document.querySelector("a");
console.log(fisrtLink);
console.log(fisrtLink.getAttribute("href")); //* mujhy href ki value chiyan
//& mujhyy #home jo aarhi hai value woo nahi chiyan sirf home chiyan ye # nahi chiyan laga waa
console.log(fisrtLink.getAttribute("href").slice(1));

//& mujhy input ka attribute chiyan
const input = document.querySelector(".form-todo input");
console.log(input.getAttribute("type"));

//^ setAttribute
//& ab mujhy jo href hai us ki value set kerni hai
fisrtLink.setAttribute("href", "https://www.facebook.com/");
fisrtLink.setAttribute("target", "_blank");
//^so getAttribute se value mangwaty hai or setAttribute se attribute ki value dalty hai.

//~ * ●	Select multiple elements and loop through them
//& Get multiple elements using getElementByClassName
//& Get multiple tags using getElementByTagName
//& Get multiple elements items using querySelectorAll

//* for e.g. woo sary select kerny hai jin ki class hai nav-item

//* or ap is mai indexing bhi ker skhty hai phir
//* so ap ko array like object mil jayn ga but ye array nahi hai jis mai splite, slice array kai method use nahi kr skhty jis mai ap (indexing, length Property & iterate ker skhty hai)

//& getElementsByClassName
const navItems = document.getElementsByClassName("nav-item");
console.log(navItems); //^ it return HTMLCollection(3)
console.log(navItems[1]);
console.log(typeof navItems);
console.log(Array.isArray(navItems));
// console.log(navItems.slice(1)); //! Uncaught TypeError: navItems.slice is not a function

//* Converting thi Array like object HTMLCollection in to real Array tay mai Array kai mazeed sary Methods use kerkho
const newNavItems = [...navItems];
console.log(newNavItems);
console.log(Array.isArray(newNavItems));
console.log(newNavItems.slice(1));

//& querySelectorAll
let navItms = document.querySelectorAll(".nav-item");
console.log(navItms); //^ it return NodeList(3)

console.log(navItms[2]);

console.log(typeof navItms);

console.log(Array.isArray(navItms));

//& getElementByTagName
const a = document.getElementsByTagName("a"); //^ it returns HTMLCollection
console.log(a);
console.log(a[2]);

console.log(typeof a);

console.log(Array.isArray(a));

//& loop
//* for e.g. sary navItems ka color mujhy green kerna hai
//^ so Ap sary loop use ker skty hai e.g. simple for loop, for of loop pr ap (HTMLCollection) mai 👇🏻
//! (forEach) method nahi use kerkhty.      <-----

console.log(navItems.length); //* jis ki length property hoti hai array like object mai too us mai for loop bhi lag kshta hai

for (let items of navItems) {
  items.style.color = "green";
  items.style.fontSize = "25px";
}

//! foreach ap nahi use ker skhty
//foreach as a callback lai ga
/* navItems.forEach((navs) => {
  navs.style.border = "3px solid purple"
}); 
!TypeError: anco.forEach is not a function
 */

//& mai Array mai change ker skhta hu iss ko phir mai forEach agr use karunga too ho jaynga so mujhy const hatana hoga let lena hoga 👇🏻
//~ Converted Array like object into Array
//* ab ap aray kai jitny methods hai use ker skhty hai
// * Converted Array newNavItems then use forEach method
newNavItems.forEach((item, index) => {
  console.log(index);
  item.style.border = "4px solid red";
  item.style.marginTop = "10px";
  item.style.padding = "10px";
});

//  Another way to convert Array Form using // * Array.from()
console.log(navItms);
navItms = Array.from(navItms);
console.log(navItms);
console.log(Array.isArray(navItms)); // true

//~ working in nodeList means querySelectorAll
//* nodeList kai case mai ap tenoo loop use ker skhty hai (simple forloop, for of loop, forEach)
//* or app nodeList ko Array mai bhi change ker skhty hai jesy uper kiya haam ne or phir ham Array kai methods bhi use ker skhty hai

//~ Different b/w HTMLCollection vs nodeList
//  So HtmlCollection mai ap sirf traditional for loop and for of loop use kersty hai jaab kai nodelist mai teno loop

//~ innerHTML
/* 
* for e.g. ye 👇🏻 ul kai under jitny bhi elements haina wooo innerHtml hai ul kai, li, span, div, buutons ye saab ab jo div haina us kai under woo saab innerHtml hai div ka
 <ul class="todo-list">
      <li>
        <span class="text">Do this do that</span>
        <div class="todo-buttons">
          <button class="todo-btn done">Done</button>
          <button class="todo-btn remove">Remove</button>
        </div>
      </li>
    </ul>
*/

const todoList = document.querySelector(".todo-list");
console.log(todoList);
console.log(todoList.innerHTML);
//* mai is ki innerHtml ko change bhi ker kshta hu

//* ab ap is Kai saat or cheez bhi add ker skhty hai (+=) laga kr
todoList.innerHTML += "<img src='' />";
console.log(todoList.innerHTML);

//~ DOM Tree * most Important
//* kai browser kesy dekhta hai documents objects ko, kya relation hota hai, parent se child pr jana yaa child se parent pr jana yei kesy hota hai? ye saab?
