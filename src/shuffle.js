/*
  George Conde - Sept 2025
  Generates numbers 1..N and shuffles them using the Fisher–Yates algorithm.
  Complexity: O(N) time, O(1) extra space (in-place shuffle)
*/

// fisher-yates shuffler
// time complexity: O(N), space complexity: O(1)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// generate the sequence from 1 to N, will be guaranteed unique
// time complexity: O(N), space complexity: O(N)
function generateSequence(N) {
  return Array.from({ length: N }, (_, i) => i + 1);
}

// not required but just to validate / sanity check
// range N is preserved, all numbers are unique, all numbers are within [1..N]
function validateShuffled(arr, N) {
  return (
    arr.length === N &&
    new Set(arr).size === N &&
    Math.min(...arr) === 1 &&
    Math.max(...arr) === N
  );
}

// for reuse
module.exports = { shuffleArray, generateSequence, validateShuffled };
