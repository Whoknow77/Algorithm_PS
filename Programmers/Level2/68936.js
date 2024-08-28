function solution(arr) {
  let oneAnswer=0
  let zeroAnswer=0

  function compress(startX,startY,len){
    let zeroSum=0
    let oneSum=0

    for(let i=startX; i<startX+len; i++){
      for(let j=startY; j<startY+len; j++){
        arr[i][j]===0 ?zeroSum+=1 :oneSum+=1
      }
    }

    if(zeroSum===len*len){
      zeroAnswer+=1
      return
    }

    if(oneSum===len*len){
      oneAnswer+=1
      return
    }

    compress(startX,startY,len/2)
    compress(startX,startY+len/2,len/2)
    compress(startX+len/2,startY,len/2)
    compress(startX+len/2,startY+len/2,len/2)
  }

  compress(0,0,arr.length)
  return [zeroAnswer,oneAnswer]
}


// test 10번 -> 모두 1
