const fs = require('fs');

// This grabs the first argument after solution.js in the command line
let fileName = process.argv.slice(2)[0];


// Use node's built in file reader to grab the data
// I made a quick test file called userID-userAge
fs.readFile(fileName, 'utf8', (err, data) => {
  // Log errors if file chosen is unreadable
  if (err) {
    throw err;
  }
  else {
    // Split data into an array at every newline character
    let dataArr = data.split('\n');

    // Use .map to change each element into a tuple by splitting on the comma delimiter
    let resultObj = dataArr.map((element) => {
      return element.split(',');
    })

    // Reduce the new tuples into an accumulator object acc
    // This allows for constant time (O(1)) look up of unique age keys
    .reduce((acc, tuple) => {
      let age = tuple[1];

      // If the accumulator already has a key for an age, increment the age count and return
      if (acc[age]) {
        acc[age] ++;
        return acc;
      }

      // Otherwise initiate the age count to 1 since the current age needs to be counted and return
      else {
        acc[age] = 1;
        return acc
      }
    }, {}); // Important to initialize the accumulator here with the object literal

    // Create final list/array to log, return, write to file, etc
    let resultArr = [];

    // Loop through all the unique age keys in resultObj and push them and their count as a tuple to resultArr
    for (let key in resultObj) {
      resultArr.push([key, resultObj[key]]);
    };

    // At this point you could format and send out the result however you'd like
    // I went with a simple console.log to see the response easily in the command line
    console.log(resultArr);
  }
});
