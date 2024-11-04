const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [m,n]= input.shift().split(' ').map(Number)
const arr=input.shift().split(' ').map(Number)
arr.sort((a,b)=>a-b)

let left=1 // 막대 길이의 최소
let right=arr[n-1] // 막대 길이의 최대
let answer=0

while(left<=right){
  let mid = Math.floor((left+right)/2)
  const sum=arr.reduce((prev,cur)=>prev+Math.floor(cur/mid),0)

  if(sum>=m){
    answer=Math.max(answer,mid)
    left=mid+1
  }
  else{
    right=mid-1
  }
}

console.log(answer)

