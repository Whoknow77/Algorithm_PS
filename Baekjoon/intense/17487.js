const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("");
const left = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "a",
  "s",
  "d",
  "f",
  "z",
  "x",
  "c",
  "v",
  "y",
  "g",
  "b",
];
const right = ["u", "i", "o", "p", "j", "k", "l", "h", "n", "m"];
let leftCount = 0;
let rightCount = 0;
let upEnterCount = 0;

// 대소문자 or 스페이스 판별 후 왼쪽, 오른쪽 타자 횟수를 비교하여 작은쪽의 타자횟수를 늘린다.
input.forEach((item) =>
  [...item].forEach((i) => {
    if (left.includes(i.toLowerCase())) {
      leftCount++;
    } else if (right.includes(i.toLowerCase())) {
      rightCount++;
    }
    if (i.match(new RegExp(/^[A-Z]/)) || i === " ") {
      upEnterCount++;
    }
  })
);

for (let i = 0; i < upEnterCount; i++) {
  if (leftCount <= rightCount) {
    leftCount++;
  } else {
    rightCount++;
  }
}
console.log(leftCount, rightCount);
// 1 4
//
