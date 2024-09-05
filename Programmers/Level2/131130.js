function solution(cards) {
  const n = cards.length
  const obj={}
  const visited=Array(n).fill(0)
  for(let i=0; i<n; i++){
      let sum=0
      let cur=i
  while(1){
      if(visited[cur]===0){
          visited[cur]=1
          cur=cards[cur]-1
          sum+=1
      }
      else{
          break    
      } 
  }
      obj[i]=sum
}
  const boxs = Object.values(obj).filter((v)=>v>0).sort((a,b)=>b-a).slice(0,2) 
  return boxs.length<=1 ? 0  : boxs.reduce((prev,cur)=>prev*cur) 
}
