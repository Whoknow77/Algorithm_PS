const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n =+input.shift()
const arr = input.map(Number)
arr.unshift(0)
const visited=Array(n+1).fill(0)
let answer=[]

const initVisited=()=>{
  for(let i=0; i<=n; i++){
    visited[i]=0
  }
}

const dfs=(cur,start,curArray)=>{
  if(curArray.length>0 && cur===start){
    return curArray
  }
  if(visited[cur]===1){
    return
  }
  visited[cur]=1
  return dfs(arr[cur],start,[...curArray,cur])
}

for(let i=1; i<=n; i++){
  initVisited()

  // 하나짜리 싸이클
  if(i===arr[i]){
    answer=[...answer,i]
  }

  else{
    const cycle=dfs(i,i,[])
    if(cycle){
      answer=[...answer,...cycle]
    }
  }
}

answer=[...new Set(answer)]
answer.sort((a,b)=>a-b)
console.log(answer.length)
console.log(answer.join('\n'))

