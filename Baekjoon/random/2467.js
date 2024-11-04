const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n =+input.shift()
const arr=input[0].split(' ').map(Number)

let left=0
let right=n-1
let leftAnswer=arr[0]
let rightAnswer=arr[right]
let abs = Math.abs(arr[left]+arr[right])

while(left<right){
  const sum=arr[left]+arr[right]

  if(Math.abs(sum)<abs){
    abs=Math.abs(sum)
    leftAnswer=arr[left]
    rightAnswer=arr[right]
  }

  if(sum===0){
    break
  }
  else if(sum<0){
    left+=1
  }
  else{
    right-=1
  }
}

console.log(leftAnswer, rightAnswer)
