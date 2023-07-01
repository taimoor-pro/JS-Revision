// * Modules
//  Jaab ap ka complex program ya code hota chala jata hai to JS ne is kai liya asani rakhi hai. woo is surat mai kai ap different modules bna ker apny code ko divide ker dai then un ko apas mai link ker dai
//^ Explain Modules in JS.
//^ Describe limitations of JS modules.
//^ How to use ES6 modules in Browser.
//^ All functions defined  on the windows object are global.

// * DOM
// The DOM is an in-memory representation of the active HTML document. Any changes made are local and do not affect the document stored on the webserver.

/**
 * 
 * JavaScript interactivity

The purpose of this reading is to introduce you to a simple explanation of web page manipulation and some examples of it.

Did you know that JavaScript's initial purpose was to provide interactivity in the browser?

In other words, it was the "set of controls" that would allow web developers to control the behavior of the webpages and even the browsers that these webpages worked on.

This is still the case today.

As the web ecosystem developed and the world became ever more digitized, so did the myriad of ways that one can use JavaScript as a web developer to manipulate websites.

Initially, in the late 1990s, there was plain JavaScript that had to be tweaked to suit individual browsers.

Then, by the mid-2000s, the jQuery library came out, with the idea of writing less code, but doing more with it. It "leveled the playing field" as it allowed developers to use a single code-base for various browsers.

This trend continued and many other frameworks such as React, Vue, Angular, D3, and more came along.

Together with npm and Node.js, the JavaScript ecosystem is not slowing down.

Even though it has gone a long way, sometimes it's good to go back to basics. JavaScript is still the king when it comes to making our websites interactive.

Although CSS has developed significantly over the years, it is still JavaScript that allows users to: 

    Get their geolocation,

    Interact with maps,

    Play games in the browser, 

    Handle all kinds of user-triggered events, regardless of the device,

    Verify form input before sending it to the backend of a webapp,

    and more!

There are many, many ways in which JavaScript allows you to build rich, interactive experiences on the web.
 */

// let answer = prompt("What is your name? ");
// if(typeof(answer) === 'string'){
//   const h1 = document.createElement('h1');
//   h1.innerText = answer;
//   document.body.innerText = " ";
//   document.body.appendChild(h1);
// }

let h1 = document.createElement("h1");
h1.innerText = "Type into the input to make this text change";

let input = document.createElement("input");
input.setAttribute("type", "text");

document.body.innerText = " ";
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener("change", () => {
  h1.innerText = input.value;
});

var mainHeading = document.querySelector("h1");
var arr = ["Example Domain", "First Click", "Second Click", "Third Click"];
function handleClicks() {
  switch (mainHeading.innerText) {
    case arr[0]:
      mainHeading.innerText = arr[1];
      break;
    case arr[1]:
      mainHeading.innerText = arr[2];
      break;
    case arr[2]:
      mainHeading.innerText = arr[3];
      break;
    default:
      mainHeading.innerText = arr[0];
  }
}
mainHeading.addEventListener('click', handleClicks);

// *For example, if the stringified JSON data was converted to an object that had the following structure:

// const currencyInfo = {
//   [
//       USD: {
//           // ...
//       },
//       GBP: {
//           // ...
//       },
//       EUR: {
//           // ...
//       }
//   ]
// }

/*
 *JSON is just a string - but there are rules that it must follow

JSON is a string, but it must be a properly-formatted string. In other words, it must adhere to some rules.

If a JSON string is not properly formatted, JavaScript would not be able to parse it into a JavaScript object.

JSON can work with some primitives and some complex data types, as described below.

Only a subset of values in JavaScript can be properly stringified to JSON and parsed from a JavaScript object into a JSON string.

These values include:

    primitive values: strings, numbers, bolleans, null

    complex values: objects and arrays (no functions!)

    Objects have double-quoted strings for all keys

    Properties are comma-delimited both in JSON objects and in JSON arrays, just like in regular JavaScript code

    String properties must be surrounded in double quotes. For example:

     

    "fruits",

     

    "vegetables"

    Number properties are represented using the regular JavaScript number syntax; e.g

     

    5,

     

    10,

     

    1.2

    Boolean properties are represented using the regular JavaScript boolean syntax, that is:

     

    true

     

    and

     

    false

    Null as a property is the same as in regular JavaScript; it's just a

     

    null

You can use object literals and array literals, as long as you follow the above rules

What happens if you try to stringify a data type which is not accepted in JSON syntax?

For example, what if you try to stringify a function? The operation will silently fail.

If you try to stringify some other data types, such as a BigInt number, say 123n, you'd get the following error: Uncaught TypeError: Do not know how to serialize a BigInt.
Some examples of JSON strings

Finally, here is an example of a stringified JSON object, with a single key-value pair:

'{"color":"red"}' 

Here's a bit more complex JSON object:

'{"color":"red", "nestedObject": { "color": "blue" } }' 

The above JSON object encodes two properties:

    "color":"red"

    "nestedObject": { "color": "blue" }

It's also possible to have a JSON string encoding just an array:

'["one", "two", "three"]'

The above JSON string encodes an array holding three items, three values of the string data type. Obviously, just like objects, arrays can nest other simple or complex data structures.

For example:

'[{ "color": "blue" }, {"color: "red"}]'

In the above example, the JSON string encodes an array which holds two objects, where each object consists of a single key-value pair, where both values are strings. 
 */


document.querySelector('h1').addEventListener('click', 
function() { 
    console.log('clicked');
});


function scopeTest() {
  var y = 44;

  console.log(x);
}

var x = 33;
scopeTest();

