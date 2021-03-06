/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name) {
    for (i = 0; i < animals.length; i++) {
        if (animals[i] && animals[i] !== "null" && animals[i] !== "undefined") {
            if (animals[i].name === name) {
            return animals[i];
            }
        }
    }
    return null;
}     


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
    for (i = 0; i < animals.length; i++) {
        if (animals[i] && animals[i] !== "null" && animals[i] !== "undefined") {
            if (name === animals[i].name)
            return animals.splice(animals[i], 1, replacement);
            }
        }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    for (i = 0; i < animals.length; i++) {
        if (animals[i] && animals[i] !== "null" && animals[i] !== "undefined") {
            if (name === animals[i].name)
            return animals.splice(animals[i]);
            }
        }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
     var animalExists = animals.find((a) => a.name === animal.name);
    if ((!animalExists) && (animal.name.length > 0) && (animal.species.length > 0)) {
        animals.push(animal);
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
