const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [number, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let sum = 0;
const count = new Map();
input = input.map((i) => i * 1).sort((a, b) => a - b);
input.forEach((number) => {
  sum += number;
  count.set(number, count.get(number) ? count.get(number) + 1 : 1);
});

let array = [...count].sort((a, b) => b[1] - a[1]);
console.log(Math.round(sum / input.length).toFixed(0));
console.log(input[parseInt(input.length / 2)]);
if (input.length === 1) {
  console.log(input[0]);
} else {
  if (array[0][1] === array[1][1]) {
    console.log(array[1][0]);
  } else {
    console.log(array[0][0]);
  }
}
console.log(input[input.length - 1] - input[0]);

// sol 2(빈도수)

let maxValue = 0;
let arr2 = [];
count.forEach((ele, key) => {
  if (maxValue < ele) {
    maxValue = ele;
    arr2 = []; // 배열 리셋
    arr2.push(key); // 반도수가 큰 것만 배열에 추가
  } else if (maxValue === count.get(key)) {
    arr2.push(key); // 빈도수가 똑같다면 전부 배열에 추가하기
  }
});
