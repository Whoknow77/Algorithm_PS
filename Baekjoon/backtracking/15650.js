const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, m] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const arr = [];
const isused = Array(4).fill(0);

BackTracking(0, 0);

function BackTracking(k, start) {
  if (k === m) {
    console.log(arr.join(" "));
    return;
  }

  for (let i = start; i < n; i++) {
    if (!isused[i]) {
      arr.push(i + 1);
      isused[i] = 1;
      BackTracking(k + 1, i);
      arr.pop();
      isused[i] = 0;
    }
  }
}
