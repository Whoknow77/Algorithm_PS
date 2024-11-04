const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [r,c] = input.shift().split(' ').map(Number)
const visited=Array(26).fill(0)
const d=[[0,1],[1,0],[-1,0],[0,-1]]

const arr=[]
for(let i=0; i<r; i++){
  const subArr=input[i].trim().split('')
  arr.push(subArr)
}

let answer=0

const dfs=(x,y,count)=>{
  answer=Math.max(count,answer)
  for(let i=0; i<4; i++){
    const [nextX,nextY]=[x+d[i][0],y+d[i][1]]
    if(nextX<0 || nextX>=r || nextY<0 || nextY>=c || visited[arr[nextX][nextY].charCodeAt()-65]){
      continue
    }

    visited[arr[nextX][nextY].charCodeAt()-65]=1
    dfs(nextX,nextY,count+1)
    visited[arr[nextX][nextY].charCodeAt()-65]=0
  }
}

visited[arr[0][0].charCodeAt()-65]=1
dfs(0,0,1)
console.log(answer)


// 알파벳 포함 로직을 Set으로 해도 시간초과가 남 -> visited
// 기존 visited 로직은 필요없는 이유 -> 어차피 방문했던 곳은 알파벳이 중복되므로
