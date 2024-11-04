const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

n=+input.shift()
inputArr=input.shift().split(' ').map(Number).sort((a,b)=>a-b)
let count=0

function search(arr,target){
  let left=0
  let right=arr.length-1
  
  while(left<right){
    const sum=arr[left]+arr[right]
    if(sum===target){
      return true
    }
    else if(sum>target){
      right-=1
    }
    else{
      left+=1
    }
  }
  return false
}

for(let i=0; i<n; i++){
  const num = inputArr[i]
  const newNumber = inputArr.slice(0,i).concat(inputArr.slice(i+1))
  if(search(newNumber,num)){
    count+=1
  }
}

console.log(count)
