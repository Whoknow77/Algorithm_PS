const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input.shift());
const arr = input[0].split(' ').map(Number);
const dp = Array(n).fill(1);
const dp2 = Array(n).fill(1);

// 10
// 1 5 2 1 4 3 4 5 2 1

for (let i = 0; i < n - 1; i++) {
  for (let target = i + 1; target < n; target++) {
    if (arr[i] < arr[target]) {
      dp[target] = Math.max(dp[i] + 1, dp[target]);
    }
  }
}

for (let i = n-1; i >0; i--) {
    for (let target = i-1; target>=0; target--) {
      if (arr[i] < arr[target]) {
        dp2[target] = Math.max(dp2[i] + 1, dp2[target]);
    }
}
}

const answer=[];
for(let i=0; i<n; i++){
    answer.push(Math.max(dp[i]+dp2[i]-1));
}

console.log(Math.max(...answer))
