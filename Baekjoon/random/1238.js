const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n,m,x]= input.shift().split(' ').map(Number)
const totalDistance={}
const graph={}
let answer=0;

function search(n,start,graph){
  const distance=Array.from({length:n+1},()=>Infinity)
  distance[start]=0
  const queue=[[start,0]]
  
  while(queue.length){
    const [curPos,curTime]=queue.shift()
    for (const [nextPos,nextTime] of graph[curPos]){
      if(distance[nextPos]>curTime+nextTime){
        distance[nextPos]=curTime+nextTime
        queue.push([nextPos,curTime+nextTime])
      }
    }
  }

  totalDistance[start]=distance
}

for(let i=1; i<=n; i++){
  graph[i]=[]
}

for (let i=0; i<m; i++){
  const [a,b,time]=input[i].split(' ').map(Number)
  graph[a].push([b,time])
}

for(let start=1; start<=n; start++){
  search(n,start,graph)
}

for(let start=1; start<=n; start++){
  answer=Math.max(answer,totalDistance[start][x]+totalDistance[x][start])
}

console.log(answer)


