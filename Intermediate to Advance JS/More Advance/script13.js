//& TESTING
//& Types of Testing

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
// Three Most used types of testing 
//^  