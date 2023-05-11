const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ");
input.shift();
const arr1 = input.slice(0, N);
const arr2 = input.slice(N);
const set = new Set(arr1);

let count = 0;
arr2.forEach((item) => {
  if (set.has(item)) {
    count++;
  }
});

console.log(count);
