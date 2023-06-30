// ERROR HANDLING
{
  /* <BUG>
    A BUG CAUSE A PROGRAM TO RUN IN AN UNINTENDED WAY 
</BUG> */
}

// E.g. suppose karo ap ek function banaty ho or koi error nahi ata per us code mai bug hoskta hai how? see
function add(a, b) {
  console.log(a + b); // ^ BUG  "12"
}

add("1", 2);

{
  /* <ERROR>
  A ERROR CAUSE A PROGRAM TO STOP RUNNING
</ERROR> */
}

// COMMON ERROR TYPES
/*
SYNTAX ERROR
REFERENCE ERROR 
TYPE ERROR 
*/

//* REFERENCE ERROR
// console.log(c + d); //! ERROR ReferenceERROR "c" is not defined
//  Agy program nahi run hoga
console.log("This program run");

//* SYNTAX ERROR
// var name = "Taimoor; //!; JS can not read // now ek qoutation nahi hau so Syntax error

//* TYPE ERROR
// (5).pop //! 5.pop is not a function

//^ TRY, THROW & CATCH BLOCK
// * ye asa block hai kai agr ap ka error bhi ayn per ap chaty hai kai hamra code phir bhi run kerta rahy ruky nahi to ap throw catch ker skhty hai. its very important for error handling taky ap kai errors na ayn
/* SYNTAX
try{
    console.log(c + b);
}catch{
   do somthing is here
    console.log(error);
}
*/

// * THROW you can force an error to be thrown from the try block to the catch block.
/*try {
    throw new Error();
} catch (error) {
  console.log(err)
}*/

// * WORKING  WITH ERRORS IN JS 
//  Test the block of code for errors using 
    //  TRY CATCH Statement.

// console.log(c + d);
// console.log("This line never reached");

// throw new ReferenceError(); // see the output // ! Reference Error

// throw new Error();
// console.log("Hello");

try {
  console.log(c + d);
} catch (error) {
    console.log("There was an error");
    console.log("The error was saved in the error log", error);
}

console.log("My program does not stop");
console.log(10 + 10);

try {
  throw new ReferenceError();
} catch (error) {
  console.log(error);
  console.log("There was an error");
  console.log("The error was saved in the error log",)
}

console.log("My program does not stop");
console.log(10 + 10);


/*
SUMMERY 
Syntax, logical and runtime errors

By the end of this reading, you'll be able to:

    Recognize common types of errors in JavaScript

Here are some of the most common errors in JavaScript: 

    ReferenceError 

    SyntaxError 

    TypeError 

    RangeError

There are some other errors in JavaScript. These other errors include: 

    AggregateError 

    Error 

    InternalError 

    URIError

However, in this reading I'll focus on the Reference, Syntax, Type, and Range errors.
*/
//* ReferenceError

// A ReferenceError gets thrown when, for example, one tries to use variables that haven't been declared anywhere.

// An example can be, say, attempting to console log a variable that doesn't exist:
//! console.log(username);

// If the variable named username hasn't been declared, the above line of code will result in the following output:
// ! Uncaught ReferenceError: username is not defined


//* SyntaxError

// Any kind of invalid JavaScript code will cause a SyntaxError.

// For example:
//! var a "there's no assignment operator here";
// The above line of code will throw the following error:  
//! Uncaught SyntaxError: Unexpected string

// There's an interesting caveat regarding the SyntaxError in JavaScript: it cannot be caught using the try-catch block.  


//* TypeError
// A TypeError is thrown when, for example, trying to run a method on a non-supported data type.
// A simple example is attempting to run the pop() method on a string:
//! "hello".pop() // Uncaught TypeError: "hello".pop is not a function

// The array-like behavior of strings was already covered in an earlier lesson in this course. 
// However, as can be confirmed by running the above line of code, strings do not have all the array methods readily available to them, and trying to use some of those methods will result in a TypeError being thrown.  

//* RangeError
// A RangeError is thrown when we're giving a value to a function, but that value is out of the allowed range of acceptable input values.
// Here's a simple example of converting an everyday Base 10 number (a number of the common decimal system) to a Base 2 number (i.e binary number).

// For example:
// (10).toString(2); // '1010'
// (10).toString(8); // 12
// BUT
//! (10).toString(100); // Uncaught RangeError: toString() radix argument must be between 2 and 36
// ----------------------------------------------------------------------------------------------------------------------------------------

//*  TYPES OF EMPTY VALUES 
// NULL data type  (intentional absence of any object value )
//  UNDEFINED DATA TYPE  (The only hold one value is undefined)
//  EMPTY STRING

// NULL data type  (intentional absence of any object value )
var latters = "abc"
console.log(latters.match(/a/));

var arr = ["a", "b", "c"];
console.log(latters.match(/d/)); // null 

//  UNDEFINED DATA TYPE  (The only hold one value is undefined)
var emplaoyeName;

///////////////////////////////////////////////
try {
  Number(5).toPrecision(300)
  } catch(e) {
  console.log("There was an error")
  }


  //  Please Read this  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
  // try {
  //   tryStatements
  // } catch (exceptionVar) {
  //   catchStatements
  // } finally {
  //   finallyStatements
  // }
  




