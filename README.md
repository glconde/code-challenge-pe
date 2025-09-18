## Code Challenge

This repository contains my solution for a specific coding challenge. 

### Program Description

The program generates numbers from 1 to 10,000 in random order each time it is run, ensuring all values are **unique** and **within the required range**. 

Then to randomize, I used the Fisher–Yates shuffle algorithm, which runs in O(N) time and O(1) extra space, making it efficient and reliable. 

### Extra / Validation

The code includes a simple validation step to confirm correctness and is written in JavaScript for easy testing in Node.js (or other platform / tool).

### Running via CLI
```bash
node shuffle.js
```


### Demo
Alternatively, live demo is also available here: https://jsfiddle.net/glconde/2br5ov1y/29/