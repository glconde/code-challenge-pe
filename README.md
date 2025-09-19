## Code Challenge

This repository contains my solution for a specific coding challenge.

### Program Description

The program generates numbers from 1 to 10,000 in random order each time it is run, ensuring all values are **unique** and **within the required range**. 

To randomize the sequence, I used the Fisher–Yates shuffle algorithm. This section runs in O(N) time and O(1) extra space, making it both efficient and reliable. However, overall, the program requires **O(N) space** to store the sequence.

### Extra / Validation

The code includes a simple validation step to confirm correctness.  
It is written in JavaScript for easy testing in Node.js (or other compatible platforms/tools).

### How to Run

#### Clone the repo and run the CLI script with Node.js:
```bash
git clone https://github.com/glconde/code-challenge-pe.git
cd code-challenge-pe
node cli/run.js
```

#### Options
* Default settings (N = 10000, summary output)
```bash
node cli/run.js
```
-> Generates 10000 numbers, randomized, unique, summarized output

* Custom range
```bash
node cli/run.js 100
```
-> Generates numbers from 1 to 100, randomized, summarized output

* Show entire output
```bash
node cli/run.js 100 --all
```
-> Generates numbers from 1 to 100, randomize, prints all the numbers

### Minimal Validation
Input values are clamped to the range **1–10000**. Values below 1 default to 1; values above 10000 default to 10000.

### Demo
Alternatively, live demo is also available here: https://jsfiddle.net/glconde/2br5ov1y/

The JSFiddle version defaults to N = 10000 but allows changing the range and toggling full output.

© GLConde 2025