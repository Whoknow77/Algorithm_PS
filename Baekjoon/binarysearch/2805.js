const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [K, N] = input.shift().split(" ");
const lines = input
  .toString()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
// 이분 탐색은 정렬된 배열에만 적용할 수 있음.
const target = +N;

let left = 0;
let right = lines[lines.length - 1];

let answer = Number.MIN_SAFE_INTEGER;

while (left <= right) {
  let sum = 0;
  let mid = Math.floor((left + right) / 2);
  // 10 15 17 20
  // 10
  lines.forEach((item) => {
    if (item > mid) {
      sum += item - mid;
    }
  });
  //  mid값에 따라서 구해지는 랜선의 갯수.

  if (sum >= target) {
    // 구해지는 랜선의 개수가 target보다 같거나 많은 경우
    if (mid > answer) answer = mid;
    // mid값 중 최댓값을 구할 것이기 때문에 추가한 로직.

    left = mid + 1;
    // 구해지는 랜선의 길이를 낮게해야함 -> 랜선을 나누는 길이를 높여줘야함. -> left를 증가시켜 줘야 함.
  } else {
    right = mid - 1;
  }
}

console.log(answer);
