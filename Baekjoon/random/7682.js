const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const answer=[]

input.forEach((row)=>{
  if(row==="end"){
    console.log(answer.join('\n'))
  }
  else{
    const arr=[]
    let xCount=0
    let oCount=0
    let xWin=false
    let oWin=false

    for(let i=0; i<(row.trim().length)/3; i++){
      const subarr=[]
      for(let j=0; j<3; j++){
        if(row[i*3+j]==='X'){
          xCount+=1
        }
        else if(row[i*3+j]==='O'){
          oCount+=1
        }
        subarr.push(row[i*3+j])
      }
      arr.push(subarr)
    }

    if(xCount-oCount===1){
      let sum=0

      for(let i=0; i<3; i++){
        if(arr[i].every((r)=>r==='X')){
          xWin=true
        }
        if(arr[i].every((r)=>r==='O')){
          oWin=true
        }
      }

      for(let j=0; j<3; j++){
        let xSubSum=0
        let oSubSum=0
        for(let i=0; i<3; i++){
          
          // 세로조사
          if(arr[i][j]==='O'){
            oSubSum+=1
            sum+=1
          }
          else if(arr[i][j]==='X'){
            xSubSum+=1
            sum+=1
          }
        }
        if(oSubSum===3){
          oWin=true
        }
        if(xSubSum===3){
          xWin=true
        }
      }

      if((arr[0][0]==='X' && arr[1][1]==='X' && arr[2][2]==='X') ||((arr[2][0]==='X' && arr[1][1]==='X' && arr[0][2]==='X'))){
        xWin=true
      }
      if((arr[0][0]==='O' && arr[1][1]==='O' && arr[2][2]==='O') ||((arr[2][0]==='O' && arr[1][1]==='O' && arr[0][2]==='O'))){
        oWin=true
      }

      if((xWin && !oWin) || (sum===9 && !xWin && !oWin)){
        answer.push("valid")
      }
      else{
        answer.push("invalid")
      }
    }

    else if(xCount-oCount===0){
      let sum=0

      for(let i=0; i<3; i++){
        if(arr[i].every((r)=>r==='X')){
          xWin=true
        }
        if(arr[i].every((r)=>r==='O')){
          oWin=true
        }
      }

      for(let j=0; j<3; j++){
        let xSubSum=0
        let oSubSum=0
        for(let i=0; i<3; i++){

        // 세로조사
        if(arr[i][j]==='O'){
          oSubSum+=1
        }
        else if(arr[i][j]==='X'){
          xSubSum+=1
        }

        }
        if(oSubSum===3){
          oWin=true
          sum+=1
        }
        if(xSubSum===3){
          xWin=true
          sum+=1
        }
      }


      if((arr[0][0]==='X' && arr[1][1]==='X' && arr[2][2]==='X') ||((arr[2][0]==='X' && arr[1][1]==='X' && arr[0][2]==='X'))){
        xWin=true
      }
      if((arr[0][0]==='O' && arr[1][1]==='O' && arr[2][2]==='O') ||((arr[2][0]==='O' && arr[1][1]==='O' && arr[0][2]==='O'))){
        oWin=true
      }
      
      if((!xWin && oWin) || (sum===9 && !xWin && !oWin)){
        answer.push("valid")
      }
      else{
        answer.push("invalid")
      }
    }
    else{
      answer.push("invalid")
    }
  }
})


// x의 개수가 o의 개수보다 하나 많을때 -> x가 이기거나 꽉참

// o의 개수가 x의 개수랑 같을때 -> y가 이김

// 그 외의 경우 -> 불가능

/*

꽉찬 경우: x의 개수=5, o의 개수=4

x가 이긴 경우

xoo
xo.
x..

x의 개수가 o의 개수보다 하나 많고, 가로/세로/대각선 빙고

y가 이긴 경우:

x의 개수 = o의 개수, 가로/세로/대각선 빙고

*/
