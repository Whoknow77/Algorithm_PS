const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [K, N] = input.shift().split(" ");
const stable = input.map(Number).sort((a, b) => a - b);
const target = +N;

function count(stable, dist) {
  let cnt = 1,
    ep = stable[0]; // 첫번째는 무조건 처음에 넣는게 최선
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      cnt++;
      ep = stable[i];
    }
  }
  return cnt;
}

let answer;
let lt = 1; // 최소 거리
let rt = stable[stable.length - 1] - stable[0]; // 최대 거리
while (lt <= rt) {
  let mid = parseInt((lt + rt) / 2);
  if (count(stable, mid) >= target) {
    answer = mid;
    lt = mid + 1;
  } else {
    rt = mid - 1;
  }
}
console.log(answer);
// 1 2 4 8 9
