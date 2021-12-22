/** 
 * VARIABLES:
 * 
 * 0. Variables are used to hold things in memory. They are named identifiers that can point to values of a particular type.
 * Variables are called so because once created, the values to which they point can be changed.
 * 
 * 1. To create a variable we use a keyword (var, let, const) followed by a name for our variable.
 * 
 * 2. There are two phases of variables: declaration and assignment (declaration and assignemtn together = initialization).
 */

// 1. Declaration
// At the declaration phase, the variable myName is undefined because it has not be assigned to anthing
var myName;
console.log(myName); // prints => undefined

// 2. Assignment and initialization
// Assignment is when the variable is assigned to a value
myName = "Braeden";
console.log(myName); // prints => Braeden
// Declaring and assigning at the same time is initialization
var myName = "Braeden";

// 3. Re-assignment
// Changing or updating the value the variable is assigned to
myName = "Braeden Ford";
console.log(myName); // prints => Braeden Ford

// 4. var, let, const
// the var statement declares a function-scoped or globally-scoped variable
var x = "value";
// the let statement declares a block-scoped local variable
let x = "value";
if (x === 1) {
    let x = 2;
    console.log(x); // prints => 2
}
console.log(x); // prints => value
// the const statement is block-scoped, can't be changed through reassignment, and can't be redeclared
const x = "value";
if (x === 1) {
    x = 2;
    console.log(x); // returns TypeError
}
console.log(x); // prints => value

// 5. Hoisting
// Hoisitng is the process by which the interpreter moves the declaration (not initializations) of variables to the top of their scope
console.log(x); // returns undefined (var is not assigned)
var x = "value";
console.log(x); // prints => value


