const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input[1].split(" ").map(Number);
const sumArr = [0];
const solution = [];

arr.forEach((v, i) => {
  sumArr[i + 1] = sumArr[i] + v;
});

// sumArr = [0, 5, 9, 12, 14, 15]
// 각 요소 sumArr[i]는 arr의 i번째 수까지의 합이 된다

input.slice(2).forEach((el) => {
  const [i, j] = el.split(" ").map(Number);
  solution.push(sumArr[j] - sumArr[i - 1]);
});

console.log(solution.join("\n"));
