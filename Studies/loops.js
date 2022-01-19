/**
LOOPS:

0. Loops are constructs that allow for a quick an easy way to execute a block of code
repeatedly as many times as needed.

1. Loops can be used to iterate through arrays. This allows us to access any number of 
values within the array and manipulate them in any way we want.

2. Loops can be used to iterate over objects. This allows us to access any key, value pair 
in the object, add keys and values, and manipulate the pairs in any we want.
 */

// Loop syntax:
/* A for loop defines a counting variable and assigns it a value. It also contains a condition 
that tells it when to stop. As long as the "stop" condition is true, the loop will continue to execute its code.
The for loop, also, has an "update" statement that defines how to update the start variable.*/
 for (start; stop; update) {
    // code block to run until condition is false.
}

 // Counting with loops:
 for (let i = 1; i <= 10; i++) {
     console.log(i); // prints => all numbers 1 through 10
 }

 for (let i = 10; i >= 0; i--) {
     console.log(i); // prints => all numbers 10 through 0, counting backwards
 }

 // Looping through an array:
 // i is initialized as a starting point; i interates as long as it meets the condition in the middle.
 for (let i = 0; i < array.length; i++) {
     console.log(array[i]); // prints => each value of the array
 }

 for (let i = array.length; i >= 0; i--) {
     console.log(array[i]); // prints => each value of the array in reverse
 }

 // Looping over an object:
 /* Looping through an object takes a different syntax than looping through an array.
 This is called a for...in loop. */
 for (var key in object) {
     console.log(object[key]); // prints => the value at each key in the object.
 }

 // While loops:
 /* While loops state a condition that while the condition is true, the loop will continue to execute the 
 specified code in the code block. */
 let x = 0;
 while (x < 5) { // condition the loop will continue to run until false;
     console.log(x); // block of code to be executed
     x++;
 }








