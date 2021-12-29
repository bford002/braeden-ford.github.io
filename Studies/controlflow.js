/**
 * CONTROL FLOW:
 * 
 * 0. Control flow is the order in which statements are executed. Statements are executed from top to bottom, left to right.
 * 
 * 1. Control flow can be disrupted if it runs into block statemnets, such as conditionals, 
 * loops, or functions.
 * 
 * 2. The most common block structure to alter control flow is conditional statements. This is the 
 * if...else if block structure.
 */

// Conditional statements:
// 1. If:
/* if statements are blocks of code that designate a specific code to be executed, if a a condition is true.
If the statement is false, or the conditon is not met, the designated code will not be run. */
var x = 1;
var y = 2;
if (x < 2) {
    console.log("The condition is true; This code will be executed."); // prints the string because the condition was met.
}

// 2. Else-if:
/* The else-if statement is an extension of the if statement. If the code does not meet the if-condition it will continue into the next 
block of code. This next block of code is the else-if statement. There can be as many or as little else-if statements as needed. */
var x = 1;
var y = 2;
if (x > 2) {
    console.log("The condition is true; This code will be executed.");
} else if (x < 2) {
    console.log("The first condition was false. This condition is true and will be executed"); /* prints this string because the first 
    condition was not met and the code continued onto the next condition which was true. */
}

// 3. Else:
/* Else statements are statements at the end of if..else if statements that execute code if all prior conditions have not been met.
Once control flow hits this code block, the designated code will be executed. */
var x = 1;
var y = 2;
if (x > 2) {
    console.log("The condition is true; This code will be executed.");
} else if (x === 2) {
    console.log("The first condition was false. This condition is true and will be executed");
} else {
    console.log("No conditions were met, so this code will be executed."); // prints this string because the other two conditions were not met.
}

// 4. Switch:
/* Switch statements are blocks of code used to perform different actions based on different conditions. They are evaluated once and the value 
of the expression is compared to the value of each case within the switch statement. If the value matches the expression the associated block of 
code will be executed. The "break" keyword tells the code to exit the switch statement as soon as a matched statement is executed. It could contain a 
default case to be ran if no cases match. */
var expr = "switch";
switch (expr) {
    case "Does this match?":
        console.log("Expression does not match this case.");
        break;
    case "Maybe this one?":
        console.log("This does not match.");
        break;
    case "switch":
        console.log("This does match. This code will be executed"); // prints this string because the expression matches the case.
        break; // will not continue because the last case was met and code was executed.
    case "Shall we continue?":
        console.log("This is not needed because we found a match.");
        break;
    default:
        console.log("This will be executed if no cases match the expression.");
}




