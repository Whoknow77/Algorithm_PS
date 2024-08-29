function solution(places) {
  return places.map((place)=>{
  const arr=[]

  for(let i=0; i<place.length; i++){
      for(let j=0; j<place.length; j++){
          if(place[i][j]==="P"){
              arr.push([i,j])
          }
      }
  }

  const newArr=[]
  for(let i=0; i<arr.length-1; i++){
      for(let j=i+1; j<arr.length; j++){
          const diff = Math.abs(arr[i][0] - arr[j][0]) + Math.abs(arr[i][1]-arr[j][1])
          if(diff===1){
              return 0
          }
          else if(diff===2){
              newArr.push([...arr[i],...arr[j]])
          }
      }
  }
      
      if(newArr.length===0){
          return 1
      }
      
      else{
        for(let i=0; i<newArr.length; i++){
          const [curX,curY,nextX,nextY]=newArr[i]
          
          // 세로
          if(Math.abs(curX-nextX)===2 && Math.abs(curY-nextY)===0){
            if(place[curX+1][curY]==="O"){
              return 0
            }
          }
          // 가로
          else if(Math.abs(curY-nextY)===2 && Math.abs(curX-nextX)===0){
            if(place[curX][curY+1]==="O"){
              return 0
            }
          }

          // 오른쪽 대각선
          else if(nextX-curX===1 && nextY-curY===1){
            if(place[curX+1][curY]==="O" || place[curX][curY+1]==="O"){
              return 0
            }
          }

          // 왼쪽 대각선
          else if(nextX-curX===1 && nextY-curY===-1){
            if(place[curX][curY-1]==="O" || place[curX+1][curY]==="O"){
              return 0
            }
          }
        }            
        }
      return 1
  })
}

console.log(solution([["PXXXX", "XPXXX", "XXXPP", "XXXXX", "XXXXX"]]))

// 맨해튼 거리가 2인것만 뽑기(이때 거리가 1인 경우 발견하면 바로 return)
// 가로,세로 -> 사이에 있는 한 자리가 X일때만 가능
// 대각선 -> 반대 대각선이 두 자리가 모두 X일때만 가능
