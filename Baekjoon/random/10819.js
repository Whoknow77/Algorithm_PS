const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n =+input.shift()
const arr=input.shift().split(' ').map(Number)
const answer=[]

function dfs(start,tmp,visited){
  if(tmp.length===n){
    answer.push(tmp)
    return
  }
  for(let i=0; i<n; i++){
    if(visited[i]===0){
      visited[i]=1
      dfs(i,[...tmp,arr[i]],visited)
      visited[i]=0
    }
  }
}

function calcSum(v){
  let sum=0
  for(let i=0; i<n-1; i++){
    sum+=Math.abs(v[i]-v[i+1])
  }
  return sum
}

let maxValue=0

for(let i=0; i<n; i++){
  const visited=Array(n).fill(0)
  visited[0]=1
  dfs(0,[arr[0]],visited)
  arr.push(arr.shift())
  answer.forEach((item)=>{
    maxValue=Math.max(maxValue,calcSum(item))
  })
}

console.log(maxValue)
