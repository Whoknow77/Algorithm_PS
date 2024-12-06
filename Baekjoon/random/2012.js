const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift()
const arr = input.map(Number).sort((a,b)=>a-b)
const rank = Array.from({length:n},(_,idx)=>idx+1)
let sum=0;

for(let i=0; i<n; i++){
  sum+=Math.abs(rank[i]-arr[i])
}

console.log(sum)

// 불만도 = | 실제등수 - 예상등수 |
// 불만도의 총 합을 최소로
// 각 사람의 실제등수를 모두 경우의수로 나눠야 한다. 
