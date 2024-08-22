const dir=[[0,1],[1,0],[0,-1],[-1,0]] // 시계방향

function solution(rows, columns, queries) {
  const arr = Array.from({length:rows},(_,i)=>Array.from({length:columns},(_,j)=>(i*columns+j+1)))
  const answer=[]
    for(let i=0; i<queries.length; i++){
        const [startX,startY,endX,endY]=queries[i]
        const subarr =[]
        let curX = startX-1
        let curY = startY-1
        let curDir=0
        while(curDir<4){
          subarr.push([arr[curX][curY],curX,curY])
            let [nextX,nextY] = [curX+dir[curDir%4][0],curY+dir[curDir%4][1]] 
            if(nextY>=endY || nextX >=endX || nextY<startY-1 || nextX<startX-1){
              curDir+=1
              nextX = curX+dir[curDir%4][0]
              nextY = curY+dir[curDir%4][1] 
            }
            curX=nextX
            curY=nextY
        }
        subarr.pop()
        subarr.unshift(subarr.pop())
        subarr.push(subarr[0])

        for(let j=0; j<subarr.length-1; j++){
          const [nextValue,nextRow,nextCol]=subarr[j+1]
          const [curValue,curRow,curCol]=subarr[j]
          arr[nextRow][nextCol]=curValue
        }
        answer.push(Math.min(...subarr.map((item)=>item[0])))
    }
    return answer
}

// 방향 벡터를 설정해서 처음위치까지 총 3번 회전을 하면서 배열에 인덱스 저장
// 저장한 배열을 돌면서 값 새로 저장 + 최솟값 저장
// 반복

console.log(solution(2,3,[[2,2,5,4],[3,3,6,6],[5,1,6,3]]))
