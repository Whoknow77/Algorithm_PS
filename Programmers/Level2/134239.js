function solution(k, ranges) {
  const firstK = k
  const pos={
      0:k
  }
  let n=0
  let x=1
  
  while(k>1){
      if(k%2===0){
          k=k/2
      }
      else{
          k=(k*3)+1
      }
      pos[x]=k    
      x+=1
      n+=1
  }
  // 사다리꼴 넓이
  const answer=[]
  const sum=[]
  for(let i=0; i<firstK; i++){
    const a=pos[i]
    const b=pos[i+1]
    subSum+=((a+b)/2)
  }

  for(let i=0; i<ranges.length; i++){
    const [a,b]=ranges[i]
    if(a===0 && b===0){
      answer.push(sum.reduce((prev,cur)=>prev+cur,0))
    }
    else{
      const bottomLength =  ((n+b)-a)
      if(bottomLength>0){
        const startX=a
        const nextX = ((n+b)-a)
        answer.push(sum.slice(startX,nextX).reduce((prev,cur)=>prev+cur,0))

      }
      else if(bottomLength===0){
        answer.push(0)
      }
      else {
        answer.push(-1)
      }
  }
}
  return answer

}

console.log(solution(3,[[0,0], [1,-2], [3,-3]]))
