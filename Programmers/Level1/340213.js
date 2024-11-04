function solution(video_len, pos, op_start, op_end, commands) {
    
  const calcTotalTime=(str)=>{
      const [hour,minute]=str.split(":").map(Number)
      return (hour*60)+minute
  }
  
  const reCalcTotalTime= (totalTime)=>{
      let [hour,minute] = [(Math.floor(totalTime/60)).toString(), (totalTime%60).toString()]
      hour = hour.length===1 ? `0${hour}` : hour
      minute = minute.length===1 ? `0${minute}` : minute
      
      return `${hour}:${minute}`
      
  }
  
  const opStart = calcTotalTime(op_start)
  const opEnd = calcTotalTime(op_end)
  let cur = calcTotalTime(pos)
  const videoLength = calcTotalTime(video_len)
  if(cur>=opStart && cur<=opEnd){
  cur=opEnd   
  }
  
  commands.forEach((command)=>{
      if(command==="prev"){
          if(cur<10){
          // 현재 위치가 10초 미만인 경우 -> 영상의 처음 위치
          cur=0    
          }
          else{
          // 10초 이상인 경우 -> 현재 위치 - 10
          cur-=10    
          }
          
          if(cur>=opStart && cur<=opEnd){
              cur=opEnd
          }
      }
      
      else if(command==="next"){
          if(videoLength-cur<10){
          // 남은 시간이 10초 미만인 경우 -> 영상의 마지막 위치
          cur=videoLength       
          }
          else{
          // 10초 이상인 경우 -> 현재 위치 + 10
          cur+=10    
          }
          
          if(cur>=opStart && cur<=opEnd){
              cur=opEnd
          }
      }})
  return reCalcTotalTime(cur)
}
