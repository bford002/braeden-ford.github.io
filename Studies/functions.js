/**
FUNCTIONS:

0. Functions are blocks of code that allow us to execute the code within the block whenever 
we want and how ever many times we want.

1. There are two phases of functions: 1. declaring the function (aka function expression). 2. calling/invoking the function.
Declaring the function is when you create the function and invoking or calling the function is when
you use the function. The keyword to declare a function is "function".

2. Functions take inputs which are called parameters. The inputs chosen to put in place of the parameters 
are called arguments. The functions execute code on the arguments passed in. Functions can optionally
take these inputs and optionally output something. In order to output something, the function must contain
a return statement.

3. Functions can modify variables in parent and global scopes. Variables in parent or global scopes cannot access
variables or values within the function (function scope).

4. Functions form closures around data, meaning if an object is returned and stored in memory somewhere to be referenced later, 
the closure stays alive and data can continue to exists within these closures.
 */

// Function declaration:
// Declaring a function called functionName using the keyword "function".
function functionName(parameter1, parameter2) { // "function" is the keyword to declare a function
    // function body: the code to be executed goes here
}
functionName("value", 3); // This is a function call. "value" and 3 are arguments that will be inputed into the function. They are represented by the parameters in the function definiton.

// Function expression:
// Assigning a function to a named variable.
let func = function(parameter1, parameter2) { // (parameters go inide the parentheses); They represent arguments that will be inputed into the function.

};
func("value", 3); // Function call with arguments ("value" and 3).

// Function that does not take inputs (parameters) and does not output (return statement) anything
function() {

}

// Function that takes an inout of an array and outputs that same array
function(array) {
    return array // return statement => output
}

