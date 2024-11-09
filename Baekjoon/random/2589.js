const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [l,w]= input.shift().split(' ').map(Number)
const answer =[]
const d =[[0,1],[0,-1],[1,0],[-1,0]]
const arr=[]
for(let i=0; i<input.length; i++){
  arr.push(input[i].trim().split(''))
}
let visited=Array.from({length:l},()=>Array(w).fill(0))

function bfs(x,y){
  const queue=[[x,y,0]]
  let depth=0
  while(queue.length>0){
    const [curX,curY,curCount]=queue.shift()

    depth=Math.max(curCount,depth)
    for(let i=0; i<4; i++){
      const [nextX,nextY]=[curX+d[i][0],curY+d[i][1]]
      if(nextX<0 || nextX>=l || nextY<0 || nextY>=w  || visited[nextX][nextY] || arr[nextX][nextY]==="W"){
        continue
      }
      visited[nextX][nextY]=visited[curX][curY]+1
      queue.push([nextX,nextY,curCount+1])
    }
  }
return depth
}

for(let i=0; i<l; i++){
  for(let j=0; j<w; j++){
    visited=Array.from({length:l},()=>Array(w).fill(0))
    if(!visited[i][j] && arr[i][j]==="L"){
      visited[i][j]=1
      answer.push(bfs(i,j))
    }
  }
}

console.log(Math.max(...answer))
