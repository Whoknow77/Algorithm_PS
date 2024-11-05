const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift()
const tmp = input[0].trim().split(' ')
const answer=[]
let visited=Array(10).fill(0)

function dfs(count,curStr){
  if(count===n){
    answer.push(curStr)
    return
  }
  
  const last=curStr[curStr.length-1]
  for(let i=0; i<=9; i++){
    if(tmp[count]===">" && last > i && !visited[i]){
      visited[i]=1
      dfs(count+1,curStr+i.toString())
      visited[i]=0
    }
    else if(tmp[count]==="<" && last<i && !visited[i]){
      visited[i]=1
      dfs(count+1,curStr+i.toString())
      visited[i]=0
    }
  }
}

for(let i=0; i<10; i++){
  visited=Array(10).fill(0)
  visited[i]=1
  dfs(0, `${i}`)
}

console.log(answer.at(-1))
console.log(answer[0])

// 백트래킹 필수.. 모든 경우의수를 다 구하고 마지막에 계산하면 시간초과
// dfs를 탐색하면서 부등호를 따져가면서 가능한 부분만 탐색해야함
