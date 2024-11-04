const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n,k] = input.shift().split(' ').map(Number)
const arr=input.shift().split(' ').map(Number)
const visited=Array(n*2).fill(0)

let answer=0
let count=0

while(true){
  answer+=1
  // 1단계

  arr.unshift(arr.pop())
  visited.unshift(visited.pop())

  // 내리기
  if (visited[n - 1] === 1) {
    visited[n - 1] = 0;
  }

  // 2단계
  for(let i=n-2; i>=0; i--){
    if(visited[i]===1 && visited[i+1]===0 && arr[i+1]>=1){
      visited[i+1]=visited[i]
      arr[i+1]-=1
      visited[i]=0
      if(arr[i+1]===0){ 
        count+=1
      }
    }
  } 

  if (visited[n - 1] === 1) {
    visited[n - 1] = 0; 
  }


  // 3단계
  if(arr[0]>0 && visited[0]===0){
    visited[0]=1
    arr[0]-=1
    if(arr[0]===0){
      count+=1
    }
  }

  if(count>=k){
    console.log(answer)
    return
  }


}
