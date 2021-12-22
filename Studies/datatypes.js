/**
 * DATA TYPES:
 * 
 * 0. Data types are types of values in code. There are primitive data types and complex data types.
 * 
 * 1. Primitive/simple data types include Number, String, Boolean, NaN, Undefined, and Null.
 * 
 * 2. Complex data types include Object, Array, and Function.
 */

// PRIMITIVE/SIMPLE:
// 1. Number
// Numeric data/integer
var number = 2;

// 2. String
//Character or textual data
var string = "Hello World";

// 3. Boolean
// true or false value
var boolean = true;

// 4. NaN
// Not a Number
console.log(typeof NaN); // prints => number

// 5. Undefined
// An undefined value or value that is not initialized
var x;
console.log(x); // prints => undefined

// 6. Null
// Absence of value; empty; unknown value
var x = null; // suggests the x variable is empty


// COMPLEX:
// 1. Object
/* Objects are used to represent basically anything that is made up of or can be defined by a set of characteristics.
These characteristics are called properties that consist of a key and a value. Denoted by the use of curly brackets {} */
var object = {
    key1: "value1",
    key2: "value2",
    key3: 3,
    key4: true
};

// 2. Array
/* Arrays are used to create a list of multiple items assigned to a single variable. 
They are very useful when creating ordered collections where items in the collection can be accessed 
by their numerical position (index) in the list. Denoted by the use of straight brackets [] */
var array = ["value1", "value2", 3, true];

// 3. Function
/* A block of code that performs a specific task. A function is declared using the keyword function 
and called using the syntax nameOfFunction(). Functions may or may not take paramenters (also called arguments).
They usually include a return statement */
function nameOfFunction(x, y) { // Function declared with x and y as parameters
    return x + y;
}
nameOfFunction(1,2); // function called
console.log(nameOfFunction(1,2)); // prints => 3



// Infinity
/* Infinity is a property of the global object or a variable in the global scope. The value of Infinty is greater
 than any other number. It is represented by Number.POSITIVE_INFINITY.
 The Infinity property also has a negative value represented by Number.NEGATIVE_INFINITY. */


// Simple Vs. Complex
/* Primitive or simple data types are immutable, in that, they do not hold, collect, or aggregate other values.
Complex data types aggregate other values and can vary in size. They can also hold other complex data types.
Simple data types are passed to functions by copy. This means when assigning them, they are copied by value from one variable 
to another. On the other hand, complex data types are passed by reference. This means they are being refrenced to from another 
location in the code. */

var object = { // Initialization of a complex data type (object)
    key1: "value1", // A simple data type (string) within the complex data type (object)
    key2: 2,  // Another simple data type (number) within the complex data type (object)
    key3: ["value3", 4, true] // A complex data type (array) containing simple data types within the complex data type (object)
};

var a = 1;
var b = a; // the value stored in a is copied into b
b = 2 // changing the value of b does not affect what is stored in a
console.log(a); // prints => 1

var a = {
    key1: "value1",
    key2: "value2"
};
var b = a; // a and b now point to the same object because the complex data type (a) is being referenced

b.key1 = "value3"; // changing the value at b affects all references because b points to the reference of the complex data type (object)
console.log(a.key1); // prints => "value3"



