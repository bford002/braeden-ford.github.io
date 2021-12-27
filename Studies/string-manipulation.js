/**
 * STRING MANIPULATION:
 * 
 * 0. String manipulation is the idea of changing the form, length, order, and values of a string. Like arrays, strings
 * are made up of indexes which can be accessed using bracket notation.
 * 
 * 1. You can manipulate a string in various ways, including the use of methods and operators.
 * 
 * 2. Methods include: .slice(), .replace(), .toUpperCase(), .toLowerCase(), .concat(), .split().
 * You can, also, manipulate strings using the plus (+) operator.
 */

// Bracket notation:
// String indexes can be accessed using bracket notation
var str = "Braeden";
console.log(str[1]); // prints => r

// Using operators
// Multiple strings can be put into one string using the plus (+) operator.
var str1 = "Braeden";
var str2 = "Ford";
console.log(str1 + " " + str2); // prints => "Braeden Ford"
console.log(str1 + " Alexander " + str2); // prints => "Braeden Alexander Ford"

// .slice()
/* This method extracts a part of a string and returns that part in a new string. It takes two parameters, the start position 
index and the end position index. The start position is included in the returned string, the end position is not. */
var str = "string";
console.log(str.slice(1, 4)); // prints => tri

// .replace()




