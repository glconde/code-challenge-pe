/*
  George Conde - 2025
  command line runner
*/

// import
const {
  shuffleArray,
  generateSequence,
  validateShuffled,
} = require("../src/shuffle");

// default values
let N = 10000;
let showAll = false;

// parse arguments
const args = process.argv.slice(2);
// process arguments

// check for the all flag
showAll = args.includes("--all");

// has numeric argument
const numArg = args.find((a) => /^\d+$/.test(a));

// if has numeric argument
if (numArg) {
  let parsed = parseInt(numArg, 10);
  if (parsed < 1) {
    // 0 or negative
    console.error("Minimum is 1, adjusting to 1");
    parsed = 1;
  } else if (parsed > 10000) {
    // more than allowed range
    console.error("Maximum is 10000, adjusting to 10000");
    parsed = 10000;
  }
  N = parsed;
} else if (args.length > 0) {
  // invalid
  console.error("Invalid input, defaulting to 10000");
  N = 10000;
}

// generate and randomize
const sequence = generateSequence(N);
const shuffled = shuffleArray(sequence);
const isValid = validateShuffled(shuffled, N);

// show all the numbers ?
if (showAll) {
  console.log(`Shuffled numbers (N=${N}):\n${shuffled.join(", ")}`);
} else {
  console.log(
    `First 20 numbers (of N=${N}): ${shuffled.slice(0, 20).join(", ")}`
  );
}
console.log("Total count:", shuffled.length);
console.log("Validation passed:", isValid);
