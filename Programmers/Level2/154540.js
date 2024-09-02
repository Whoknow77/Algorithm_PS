const d=[[1,0],[-1,0],[0,1],[0,-1]]

function solution(maps) {
    const visited=Array.from({length:maps.length},()=>Array(maps[0].length).fill(0))
    const answer=[]
    const bfs=(x,y)=>{
        let sum=Number(maps[x][y])
        visited[x][y]=1
        const queue=[[x,y]]
        while(queue.length){
            const [curX,curY]=queue.shift()
            for(let i=0; i<4; i++){
                const nx=d[i][0]+curX
                const ny=d[i][1]+curY
                if(nx>=0 && nx<maps.length && ny>=0 && ny<maps[0].length && visited[nx][ny]===0 && maps[nx][ny]!=='X'){
                    visited[nx][ny]=1
                    sum+=Number(maps[nx][ny])
                    queue.push([nx,ny])           
                }
            }
        }
        answer.push(sum)
    }
    
    for(let i=0; i<maps.length; i++){
        for(let j=0; j<maps[0].length; j++){
            if(visited[i][j]===0 && maps[i][j]!=='X'){
                bfs(i,j)
            }
        }
    }
    
    return answer.length>0 ? answer.sort((a,b)=>a-b) : [-1] 
}
