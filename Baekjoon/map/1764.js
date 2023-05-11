const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ");
input.shift();

const map = new Map();

input.forEach((item) => {
  map.get(item);
  if (map.get(item)) {
    map.set(item, map.get(item) + 1);
  } else {
    map.set(item, 1);
  }
});

let answer = [];
for (let [key, value] of map) {
  if (value !== 1) {
    answer.push(key);
  }
}

answer.sort();
console.log(answer.length);
for (let i = 0; i < answer.length; i++) {
  console.log(answer[i]);
}
