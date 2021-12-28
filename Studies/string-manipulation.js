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

// Using operators:
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
// This method replaces a specified value with another value in a string. It does not change the sting but reurns a new string.
var str = "Braeden Ford";
console.log(str.replace("Ford", "Alexander")); // prints => Braeden Alexander

// .toUpperCase()
// This method converts a string to upper case.
var str = "string";
console.log(str.toUpperCase()); // prints => STRING

// .toLowerCase()
// This method converts a string to lower case.
var str = "STRING";
console.log(str.toLowerCase()); // prints => string

// .concat()
/* This method joins two or more strings. It works the same as using the plus (+) operator to join strings. It takes in elements to 
seperate the strings, as well. */
var str1 = "string one";
var str2 = "string two";
var str3 = "string three";
console.log(str1.concat(", ", str2, ", ", str3)); // prints => string one, string two, string three

// .split()
// This method converts a string into an array.
var str = "This is a string.";
var arr = str.split(" ");
console.log(arr); // prints => ["This", "is", "a", "string"]


