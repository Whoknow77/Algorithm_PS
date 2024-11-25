const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 총길이 - LIS의 길이
const n = +input.shift()
const arr = input.map(Number)
const dp=Array(n).fill(0)
let maxLength=0
for(let i=0; i<n; i++){
  dp[i]=1
  for(let j=0; j<i; j++){
    if(arr[i]>arr[j] && dp[i] < dp[j]+1){
      dp[i]=dp[j]+1
    }
  }
  maxLength=Math.max(maxLength,dp[i])
}
console.log(n-maxLength)
