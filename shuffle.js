/*
  George Conde - Sept 2025
  Solution: Randomizing a range of numbers
  Generates numbers 1..N and shuffles them using the Fisher–Yates algorithm.
  Complexity: O(N) time, O(1) extra space (in-place shuffle)
*/

// define range
const N = 10000;

// generate the sequence from 1 to N, will be guaranteed unique
// time complexity: O(N), space complexity: O(N)
const sequence = Array.from({ length: N }, (_, i) => i + 1);

// verify the sequence - uncomment to see generated sequence
// console.log(sequence);

// fisher-yates shuffler
// time complexity: O(N), space complexity: O(1)
function shuffleArray(array) {
  for (let i = array.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// output
let shuffledResult = shuffleArray(sequence);
console.log(shuffledResult);

// not required but just to validate / sanity check
// range N is preserved, all numbers are unique, all numbers are within [1..N]
const isValid =
  shuffledResult.length === N &&
  new Set(shuffledResult).size === N &&
  Math.min(...shuffledResult) === 1 &&
  Math.max(...shuffledResult) === N;

console.log("valid result: ", isValid);
