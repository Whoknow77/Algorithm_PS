function solution(board) {
  let oNumber=0
  let xNumber=0
  let checkNumber=0
  for(let i=0; i<3; i++){
      for(let j=0; j<3; j++){
          if(board[i][j]==='O'){
              oNumber++
              checkNumber++
          }
          else if(board[i][j]==='X'){
              xNumber++
              checkNumber++
          }
      }
  }
  let xCrossNum=0
  let oCrossNum=0
  
  // 8 방향 확인
  const row1 = [board[0][0],board[0][0]===board[0][1] && board[0][1] === board[0][2] && board[0][0]!=="."]
  const row2 = [board[1][0],board[1][0]===board[1][1] && board[1][0] === board[1][2] && board[1][0]!=="."]
  const row3 =[board[2][0],board[2][0]===board[2][1] && board[2][0] === board[2][2] && board[2][0]!=="."]
  const col1 = [board[0][0],board[0][0]===board[1][0] && board[0][0] === board[2][0] && board[0][0]!=="."]
  const col2 = [board[0][1],board[0][1]===board[1][1] && board[0][1] === board[2][1] && board[0][1]!=="."]
  const col3 = [board[0][2],board[0][2]===board[1][2] && board[0][2] === board[2][2] && board[0][2]!=="."]
  const cross1 = [board[0][0],board[0][0]===board[1][1] && board[0][0] === board[2][2] && board[0][0]!=="."]
  const cross2 = [board[2][0],board[2][0]===board[1][1] && board[2][0] === board[0][2] && board[2][0]!=="."]
  const directions=[row1,row2,row3,col1,col2,col3,cross1,cross2]

  directions.forEach((direction)=>{
    if(direction[1]){
      if(direction[0]==="O"){
        oCrossNum++
      }
      else{
        xCrossNum++
      }
    }
  })
  
  
  if(checkNumber===9){
      if(oNumber-xNumber!==1){
          return 0
      }
  }
  
  if(oNumber-xNumber!==1 && oNumber-xNumber!==0){
      return 0
  }
  
  if(oCrossNum>=1 && xCrossNum>=1){
      return 0
  }
  
  if(oCrossNum ===1){
      if(oNumber-xNumber!==1){
          return 0
      }
  }
  
  if(xCrossNum===1){
      if(oNumber!==xNumber){
          return 0
      }
  }
  return 1
}

// 다른 풀이

function solution(board) {
    
  //O,X 개수세기
  let oCnt=0;
  let xCnt=0;
  for (let i=0 ; i<3 ; i++) {
      for (let j=0 ; j<3 ; j++){
          if (board[i][j]==="O") oCnt ++;
          else if (board[i][j]==="X") xCnt ++;
      }
  }
  
  if (![0,1].includes(oCnt-xCnt)) return 0
  
  //만들어진 점수 비교
  let oScore = 0
  let xScore = 0
  //가로,세로
  for (let i=0 ; i<3;i++){
      if (board[i]==='XXX') xScore++;
      else if (board[i]==='OOO') oScore++;
      if (board[0][i]+board[1][i]+board[2][i] === 'XXX')xScore++;
      else if (board[0][i]+board[1][i]+board[2][i] === 'OOO') oScore++;
  }
  //대각선
  if (board[0][0]+board[1][1]+board[2][2]==='XXX') xScore++;
  else if (board[0][0]+board[1][1]+board[2][2]==='OOO') oScore++;
  if (board[0][2]+board[1][1]+board[2][0]==='XXX') xScore++;
  else if (board[0][2]+board[1][1]+board[2][0]==='OOO') oScore++;
  
  if (0<xScore && 0<oScore) return 0
  if (0<xScore && xCnt!==oCnt) return 0
  if (0<oScore && xCnt+1!==oCnt) return 0
  
  
  return 1
}


console.log(solution(["O.X", ".O.", "..X"]))
