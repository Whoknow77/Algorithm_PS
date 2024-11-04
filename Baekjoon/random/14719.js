const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [h,w]= input.shift().split(' ').map(Number)
const arr=input[0].split(' ').map(Number)
let water=0

for(let i=0; i<w; i++){
  const leftMax  = Math.max(...arr.slice(0,i+1))
  const rightMax  = Math.max(...arr.slice(i))
  const height = Math.min(leftMax,rightMax)
  water+=height-arr[i]
}

console.log(water)
