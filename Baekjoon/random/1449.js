const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n,l]=input.shift().split(' ').map(Number)
const arr = input[0].split(' ').map(Number).sort((a,b)=>a-b)
let left=0
let right=0
let count=0

for(let i=0; i<n; i++){
  // 이전 테이프가 구멍을 막은 경우
  if(arr[i]+0.5>right){
    left=arr[i]-0.5
    right=arr[i]+l-0.5
    count+=1
  }
}

console.log(count)

// 1. 왼쪽부터 테이프를 붙여간다.
// 2. 이전에 붙인 테이프가 현재 구멍을 막는지 판단한다.
// 3. 막고 있으면 다음 구멍으로
// 4. 막고 있지 않으면 왼쪽 간격은 무조건 0.5를 둔다.

