const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const d=[[0,1],[0,-1],[-1,0],[1,0]]
let testCase=0

while(1){
  const n = +input.shift()
  
  if(n===0){
    process.exit()
  }

  else{
    testCase+=1
    const arr = []
    const visited=Array.from({length:n},()=>Array(n).fill(Infinity))

    function bfs(){
      const queue=[[0,0]]
      while(queue.length){
        const [curX,curY]=queue.shift()
        for(let i=0; i<4; i++){
          const [nextX,nextY]=[curX+d[i][0],curY+d[i][1]]
          if(nextX<0 || nextX>=n || nextY<0 || nextY>=n || visited[nextX][nextY] <= visited[curX][curY] + arr[nextX][nextY]){
            continue
          }
          visited[nextX][nextY]=visited[curX][curY]+arr[nextX][nextY]
          queue.push([nextX,nextY])
        }
      }
      return visited[n-1][n-1]
    }

    for(let i=0; i<n; i++){
      const subArr=input.shift().split(' ').map(Number)
      arr.push(subArr)
    }
    
    visited[0][0]=arr[0][0]
    const answer=bfs()
    console.log(`Problem ${testCase}: ${answer}`)
  }
}
