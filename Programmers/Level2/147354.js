function solution(data, col, row_begin, row_end) {
  data.sort((a,b)=>{
    if(a[col-1]>b[col-1]){
      return 1
    }
    else if(a[col-1]<b[col-1]){
      return -1
    }
    return b[0]-a[0]
  }).map((row,idx)=>row.map((item)=>item%(idx+1)))
  .slice(row_begin-1,row_end).forEach((item)=>{
    answer.push(item.reduce((prev,cur)=>{
      return prev+cur
    },0))
  })

  const answer=[]
  return answer.reduce((prev,cur)=>{
      return prev ^ cur
  })
}


function solution(data, col, row_begin, row_end) {
  return data.sort((a, b) => a[col - 1] - b[col - 1] || b[0] - a[0])
      .map((row, i) => row.reduce((acc, col) => acc + (col % (i + 1)), 0))
      .slice(row_begin - 1, row_end)
      .reduce((acc, val) => acc ^ val, 0);
}



// 2 2 6
// 1 5 10
// 4 2 9
// 3 8 3

// col번째 값을 기준으로 오름차순 튜플 정렬(동일할대는 첫번째컬럼 값 기준 내림차순 정렬)

// 행마다 각 컬럼의 값을 i로 나눈 나머지들의 합으로 정의

// row_begin ~ row_end인 모두 S_i 누적 -> bitwise xor 반환(2진수로 만들고 ^ 연산)
