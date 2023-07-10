const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input.shift());
const wine = input.map(Number);
wine.unshift(0);
const dp = new Array(n).fill(0);

// wine 0 6 10 13 9 8 1
// dp 0 6 16 23 28 33 33
function solution(n,wine){
    if (n === 1) return wine[1];
    else if (n === 2) return wine[1] + wine[2];
    dp[1] = wine[1];
    dp[2] = wine[1] + wine[2];
    for (let i=3; i<=n; i++) {
      dp[i] = Math.max(dp[i-3] + wine[i-1] + wine[i], dp[i-2] + wine[i], dp[i-1]);
    }
    return dp[n];
}
console.log(solution(n,wine));
 