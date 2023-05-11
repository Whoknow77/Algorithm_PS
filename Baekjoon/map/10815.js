const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
const arr1 = input.shift().split(" ").map(Number);
input.shift();
const arr2 = input.shift().split(" ").map(Number);

const set = new Set(arr1);

console.log(
  arr2
    .map((item) => {
      if (set.has(item)) {
        return 1;
      }
      return 0;
    })
    .join(" ")
);
