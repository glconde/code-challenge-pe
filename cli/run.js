/*
  George Conde - 2025
  command line runner
*/

// import
const util = require("util");
const {
  shuffleArray,
  generateSequence,
  validateShuffled,
} = require("../src/shuffle");

// default values
let N = 10000; // range
let showAll = false; // show all? true = show N, false = show first 20

// parse arguments, if not using default values
const args = process.argv.slice(2); // skip node + script path
if (args[0]) {
  const parsed = parseInt(args[0], 10);
  if (!isNaN(parsed) && parsed > 0) {
    N = parsed;
  }
}
// --all arguments will show all
if (args.includes("--all")) {
  showAll = true;
}

// generate and randomize
const sequence = generateSequence(N);
const shuffled = shuffleArray(sequence);
const isValid = validateShuffled(shuffled, N);

// show all the numbers ?
if (showAll === true) {
  console.log(
    // all
    `Shuffled numbers (N=${N}):`,
    util.inspect(shuffled, { maxArrayLength: null })
  );
} else {
  // only the first 20
  console.log("First 20 numbers:", shuffled.slice(0, 20).join(", "));
}
// final output
console.log("Total count:", shuffled.length);
console.log("Validation passed:", isValid);
