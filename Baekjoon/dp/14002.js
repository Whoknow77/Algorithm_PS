const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input.shift());
const arr = input[0].split(' ').map(Number);
const dp = Array(n).fill(1);
const answer=[];
// 2 4 3 1 5

for (let i = 0; i < arr.length - 1; i++) {
  for (let target = i + 1; target < arr.length; target++) {
    if (arr[i] < arr[target]) {
      dp[target] = Math.max(dp[i] + 1, dp[target]);
    }
  }
}

console.log(Math.max(...dp));

let last=Math.max(...dp);
for(let i=dp.length-1; i>=0; i--){
    if(last===dp[i]){
        answer.push(arr[i]);
        last--;
    }
}
console.log(answer.reverse().join(' '))