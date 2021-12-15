/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//#2
var animal = {};
// #3
animal.species = 'dog';
// #4
animal['name'] = "Russell";
// #5
animal.noises = [];
// #6
console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "woof";
noises.push("meow");
noises.unshift("roar");
noises[noises.length] = "oink";

console.log(animal.noises.length);
console.log(animal.noises.length - 1);
console.log(animal.noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;
noises.push("cluck");
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * 
 * dot notation and bracket notaion
 * 
 * 2. What are the different ways of accessing elements on arrays?
 * 
 * bracket notation
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1
animals = [];
// 2
animals.push(animal);
// 3
console.log(animals);
// 4
var duck = {
  species: "duck",
  name: "Jerome",
  noises: ["quack", "honk", "sneeze", "woosh"]
};
// 5
animals.push(duck);
// 6
console.log(animals);
// 7
var cat = {
  species: "cat",
  name: "Whiskers",
  noises: ["meow", "purr"]
};
animals.push(cat);
var fish = {
  species: "fish",
  name: "Nemo",
  noises: ["splash", "flop"]
};
animals.push(fish);
// 8
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1    
// 2 
// chose array because it is just a list of names (strings)
// 3
var friends = [];
// 4
// 5
function getRandom(arr) {
  return arr[Math.floor(Math.random(arr.length))];
}
// 6
friends.push(getRandom(animals).name);
// 7
console.log(friends);
// 8
animals[0].friends = friends;
// 9
console.log(animals);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}