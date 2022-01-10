// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');
const { lowerCase } = require('lodash');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./braeden-ford.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    var males = _.filter(array, function(customer) {
        return customer.gender === "male";
    });
    return males.length;
};

var femaleCount = function(array) {
    var numFemales = _.reduce(array, function(females, customer, index) {
        if (customer.gender === "female") {
            females += 1;
        }
        return females;
    }, 0);
    return numFemales;
};

var oldestCustomer = function(array) {
    let oldest = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].age > oldest) {
            oldest = array[i].age;
        }
  }
  for (let i = 0; i < array.length; i++) {
      if (oldest === array[i].age) {
          return array[i].name;
      }
  }
};




var youngestCustomer = function(array) {
    let youngest = 200
    for (let i = 0; i < array.length; i++) {
        if (array[i].age < youngest) {
            youngest = array[i].age;
        }
  }
  for (let i = 0; i < array.length; i++) {
      if (youngest === array[i].age) {
          return array[i].name;
      }
  }
};



var averageBalance = function(array) {
    let nums = [];
    for (let i = 0; i < array.length; i++) {
        nums.push(array[i].balance);
        for (let j = 0; j < nums.length; j++) {
            nums[j].replace(/[$,]/g, "");
          }
        for (let y = 0; y < nums.length; y++) {
            Number(nums[y]);
        }
    }
    let total = 0;
    for (let i = 0; i < nums.length;i++) {
        total += nums[i];
    }
    let avg = total / nums.length;
    return avg;






/*
    let numsArr = array.map(function(customer) {
        return customer.balance.replace(/[$,]/g, '');
    });
    numsArr.forEach(function(numberStr) {
        Number(numberStr);
    });
    let total = 0;
    for (let i = 0; i < numsArr.length; i++) {
        total += numsArr[i];
    }
    let avg = total / numsArr.length;
        return avg;
*/
};

//var balance = "// replace with regular exp" (/)



var firstLetterCount = function(array, letter) {
    let firstLetterNum = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].name[0].toLowerCase() === letter.toLowerCase()) {
            firstLetterNum.push(array[i].name);
        }
    }
    return firstLetterNum.length;
};



var friendFirstLetterCount = function(array, customer, letter) {
    let friendFirstLetter = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].name.toLowerCase() === customer.toLowerCase()) {
            for (let y = 0; y < array[i].friends.length; y++) {
                if (array[i].friends[y].name[0].toLowerCase() === letter.toLowerCase()) {
                    friendFirstLetter.push(array[i].friends[y].name);
                }
            }
        }
    }
    return friendFirstLetter.length;
};




var friendsCount = function(array, name) {
    let names = [];
    for (let i = 0; i < array.length; i++) {
        for (let y = 0; y < array[i].friends.length; y++) {
            if (array[i].friends[y].name === name) {
                names.push(array[i].name);
            }
        }
    }
    return names;
};



var topThreeTags = function(array) {
    // new array with all tags
    let allTags = [];
    for (let i = 0; i < array.length; i++) {
        for (let y = 0; y < array[i].tags.length; y++) {
            allTags.push(array[i].tags[y]);
        }
    }
    // new array with all tags into an object with tag: number of times seen. -> tagNum = { key1 : 1, key2 : 2....}
    let tagNum = allTags.reduce(function(obj, currentTag) {
        // if current tag exists
        if (obj[currentTag]) {
            obj[currentTag] += 1;
        // else doesnt 
        } else {
            obj[currentTag] = 1;
        }
        return obj;
    }, {});
    // tags object to array
    let newNumArr = Object.entries(tagNum);
    // sort array in descending order
    let newNumArrSort;
    // return first 3 in array
    return newNumArrSort.slic(0, 3);
};



var genderCount = function(array) {
    return array.reduce(function(obj, current) {
        // if current exists
        if (obj[current.gender]) {
           obj[current.gender] += 1;
        // else doesnt 
        } else {
           obj[current.gender] = 1;
        }
        return obj;
 }, {});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
