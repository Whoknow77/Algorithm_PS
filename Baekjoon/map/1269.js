const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ");
input.shift();
const arr1 = input[0].split(" ").map(Number);
const arr2 = input[1].split(" ").map(Number);
answer = arr1.concat(arr2);
const map = new Map();

answer.forEach((item) => {
  map.get(item);
  if (map.get(item)) {
    map.set(item, map.get(item) + 1);
  } else {
    map.set(item, 1);
  }
});

let count = 0;
for (let [key, value] of map) {
  if (value === 1) {
    count++;
  }
}

console.log(count);
