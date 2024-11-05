const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');
while(true){
  const str = input.shift().trim()
  if(str==="*"){
    return
  }
  else{
    let flag=false
    for(let i=0; i<str.length-1; i++){
      const dict = new Set()
      for(let j=0; j<str.length-i-1; j++){
        dict.add(str[j]+str[j+i+1])
      }
      if(str.length-i-1!==dict.size){
        flag=true
        break
      }
    }
    flag ? console.log(`${str} is NOT surprising.`) : console.log(`${str} is surprising.`)
  }
}
