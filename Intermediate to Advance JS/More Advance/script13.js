//& TESTING
//& Types of Testing
//& JEST 
//& MOCKING
// & Writing Tets with JEST

// &> TESTING
// JS code run correctly you will make sure
//* Identify why developer test their code
//* Explain Red-Green-Refactor cycle relate to testing
//*  Differentiate between manual and automated testing
//* Demonstrate and  understanding of unit testing

// For e.g.
// ab ye function doo string ko concatenate kerta hai
function concateString(str1, str2) {
  console.log(str1 + str2);
}

concateString("abc", "def"); //* "abcdef"
concateString("123", "456"); //* "123456"
concateString("world", "wide"); //* "worldwide"
concateString(1, 4); //^OOPS--> 5

//* There are many custom testing frameworks available in JS.

//^ Tests as expectation document code
// * Code syntax that specifies the expected result of passing specific values to your functions.

//* Now the testing framework is JEST 
//* And use the function is called expect 
//* toBe which is another testing function 
//^JEST Code: 
expect(concateString("abc", "def")).toBe("abcdef");
expect(concateString("123", "456")).toBe("123456");

//* Testing JS Code 
//Ensure three things 
//^ Conciseness {As it straightforword and to the point}
//^ Clarity {because you know what exactly provided arguments}
//^ Repeatability {you can run again and again and repeated time} 

//* When Test is fails said that are 
  //!RED 
//* Whe  Test is passed said that are 
  //* GREEN

//*Ager Test pass hojata hai pass means Error/ bug hai 
//*Or jaab usy theak kiya jata hai to means Refactoring   

//^Refactoring 
 //* Updating code, without affecting the result it produces.

//^ Some of the TEST is RED and Some of The TEST is GREEN,
//^ RED test are a guide to improve your code
//* Often described as the red-green-refactor cycle. The Cycle is the Basis of Refactor cycle, the TEST-DRIVEN Development or TDD Approach to programming

//^ TDD Approach
//* First you write a failing test, then you right your source code. 
/*
* WRITE A FAILING TEST 
* RE-WRITE CODE TO PASS
* OPTIMIZE CODE WITHOUT CHANGING ITS RESULTS
*/  

//* For e.g. you can run it many times as you want. you can run the test code automatically.
//^ The tests can be Repeatable code without cost in time and effort
//^ Automatic Testing  
//^ Cost and Time Effect  

// =================================================================================================================

//& Types of Testing  
//* Confirming that software works as specified in the software's requirements.  
// Three Most used types of testing 
// There are many aspects of software testing 

//* Approaches:
  // UX designer make sure the website designs looks and behaves as expected.

  //For Project manager on a software project testing might mean that a specific piece of software works well. 

//* Reason of CODE: 
  //Does'nt break existing functionality  
  //Bug-Free
  //Satisfies requirement is given

//^ Three types of testing 
  //& e2e
  //& Integration Testing 
  //& Unit Testing 
  
//& e2e Testing E.g.
  // Open your browser App and then testing application for.e.g. clicking on the login button and adding a item to the shopping cart.
  //* E2E test are slowest and take the most time to setup and run.
  //Several e.g.s framework of E2E is:
    // webdriverJS
    // Protector
    // Cyprus

//& Integration Testing 
  //* Integration testing is a testing how part of your system interact with others parts of your system.
  //In other words, it testing how separate parts of your apps work together.
  //e.g.'s
  // 1) React Testing Library
  // 2) Enzyme

  // Integration testing are faster and cheaper then E2E test.
  //* but not as fast or as cheap as Unit testing.

//& Unit Testing 
//*Unit testing is the process of testing the smallest unit test of your source code in isolation.
//A unit is the smallets pieace of code that you can test sperately from the rest of the app.
//Practilcaly haam function or methods pr hi test kerty hai.

//Self-contained 
//fast to run
//easy to wirte

//* Testing Pyramid
//^ UNIT TEST > Higest speed and lowest cost 
//^ INTEGRATION > Average Speed and Expensive
//^ E2E> Slowest and most expensive

// ========================================================================================================================
//& JEST
// No bultin in Testing functions in JS you can use JS Testing framwork like JEST

//in JEST> Code Covering, Mocking and snapshot testing  
//*Some of the libraries to built and tackle the testing. for e.g. Some example of this libraries includes JASMINE, MOCHA, KARMA, qUINT.

// -------------------------------------------------
//* JEST is a javascript testing framework.
//* Its often use for testing code like React
//* a JS library maintained by META
//* React code just allows you to test Babel,Typescript,node,angular,vue and various other frameworks. 
//* JEST also support code Coverage is measured of what percentage of my code is covered by Test.

//^Which of the following features does Jest provide? 
/*
 * Jest allows you to easily work with unit tests.
 * Jest uses code coverage to measure what percentage of code is covered by tests.
 * Jest lets developers test a range of code types.  
 */

// ----------------------------------------------------------
//& MOCKING 
//* Separating code from related dependencies during testing.
//* to use mocking features to make sure that your unit testing Stand-Alone. 
//* ye yai kerta hai kai ap kai Backend or frontend kai beech ki conection ko fast or check kerta hai kai data sahi tara se arha hai ya nai
//* Some liabrary like SignOn.

//^ In Jest:
//* In bulit-mocking functions 
//* Facilitates Asynchronous Code in Jest
//* Jest Allows to snapshot testing (used by web developers to verify that there is no regression in the DOM)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//& Writing Tets with JEST
function addFive(val){
  return val + 5;
}
addFive(2);

module.exports = addFive;

//check installed node & npm or not? 
//$ npm -v && node -v

