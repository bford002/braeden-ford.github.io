/**
 * OPERATORS:
 * 
 * 0. Operators are used to act on data. They are used to assign and compare values , as well as 
 * perform arithmetic operations.
 * 
 * 1. Operators are classed by what they do and how many operands (values that operators act on) they require.
 * Unary operators work with one value, binary work with two values, and ternary work with three values.
 * 
 * 2. The types of operators are: Assignment, Arithmetic, Comparison, Logical, String, Conditional (Ternary), and Unary.
 */


// Assignment:
// The simple assignment operator is used to assign a value to a variable. (=)
var x = 2; // Assignment operator (=) assigning 2 to x

// There are also compound assignment operators that are shorthand for assigning and performing arithmetic.
// These include: (+=), (-=), (*=), (/=), (%=), (**=)
var x = 2;
x += 3;
console.log(a); // prints => 5

// Arithmetic:
// Arithmetic operators take numerical values as their operands and return a single numerical value.
// These include: (+), (-), (*), (/), (%), (++), (--)
var x = 2;
var y = 3;
var z = x + y;
console.log(z); // prints => 5
x++;
console.log(x); // prints => 3
var i = x * y;
console.log(i); // prints => 6
y--;
console.log(y); // prints => 2

// Comparison:
// Comparison operators compare operands and return a value based on whether the comparison is true or false.
// These include: (==), (!=), (===), (!==), (>), (>=), (<), (<=)
var x = 2;
var y = 3;
console.log(y > x); // prints => true
console.log(x === y); // prints => false

// Logical:
// Logical operators are used with Boolean values or when used with other values, return the value of one of the operands.
// These include: (&&), (||), (!)
/* (&&) when used with Boolean values, returns true if both operands are true; false, otherwise.
(||) when used with Boolean values, returns true if either operand is true; if both are false, returns false. */
var x = 2;
var y = 3;
console.log(x < y && y > x); // prints => true
console.log(x > y || y > x); // prints => true
console.log(x !== y); // prints => true

// Unary:
// Unary operators are used with only one operand
// these include: (!), (typeOf), (-)
/* The bang operator (!) converts a value to its opposite boolean. It has an equivalent meaning to "not".
The typeof operator returns a string indicating what kind of value an operant is.
*/
var x = 2;
console.log(-x); // prints => -2
console.log(typeof x) // prints => number
console.log(!true); // prints => false

// Conditional (Ternary):
/* Conditional, or Ternary, operators work with three operands and the operator can have one of two values depending
 on a condition. The syntax: condition ? value1 : value2 */
 // If the condition is true, the operator has the value of value1; otherwise, the operator has the value of value2.
 var x = 2;
 var y = 3;
 var trueCond = (x < y) ? "true condition" : "false condition";
 console.log(trueCond); // prints => "true condition"
 var falseCond = (x > y) ? "true condition" : "false condition";
 console.log(falseCond); // prints => "false condition"

