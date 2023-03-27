const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
input = input.map((item) => +item);
solution(input);

function solution(A) {
  const check = [1, 1, 2, 2, 2, 8];
  console.log(A.map((item, index) => check[index] - item).join(" "));
}
