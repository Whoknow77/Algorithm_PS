
function solution(m, musicinfos) {
  const parseMelody=(str)=>{
    const arr=[]
    for(let i=0; i<str.length; i++){
      if(str[i+1]!=="#"){
        arr.push(str[i])
      }
      else{
        arr.push(str[i]+str[i+1])
        i+=1
      }
    }
    return arr
  }
  const parsedMyMelody = parseMelody(m)

    const sorted = musicinfos.map((item)=>{
      const [startTime,endTime,title,music]=item.split(",")
      const [startHour,startMinute]=startTime.split(":").map(Number)
      const [endHour,endMinute]=endTime.split(":").map(Number)
      const length = ((endHour * 60) + endMinute) - ((startHour * 60) + startMinute)
      const repeatCount = Math.ceil(length/parseMelody(music).length)
      const parsedMelody = parseMelody(music.repeat(repeatCount)).slice(0,length)
      let flag = false
      for(let i=0; i<parsedMelody.length; i++){
        if(parsedMelody.slice(i,i+parsedMyMelody.length).join('')===parsedMyMelody.join('')){
          flag=true
          break
        }
      }
      return [flag,length,title]
    }).filter((item)=>item[0]).sort((a,b)=>b[1]-a[1])[0]

    return sorted ? sorted[2] :"(None)"
  }

  console.log(solution("ABCDEFG",["12:00,12:05,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]))
