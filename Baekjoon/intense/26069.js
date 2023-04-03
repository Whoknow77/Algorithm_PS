const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [number, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let map = new Map();

input.forEach((item) => {
  let [person1, person2] = item.split(" ");
  person1 = person1.trim();
  person2 = person2.trim();
  if (person1 === "ChongChong") {
    map.set(person2, 1);
  } else if (person2 === "ChongChong") {
    map.set(person1, 1);
  } else if (map.has(person1)) {
    map.set(person2, 1);
  } else if (map.has(person2)) {
    map.set(person1, 1);
  }
});

console.log(map.size + 1);

// sol 2
// 중복을 제거하기 위해 Set을 사용/

const [_, ...input2] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
let arr = input2.map((v) => v.split(" "));
let dance = new Set();
dance.add("ChongChong");
arr.forEach((v) => {
  if (dance.has(v[0]) || dance.has(v[1])) {
    dance.add(v[0]);
    dance.add(v[1]);
  }
});
console.log(dance.size);
