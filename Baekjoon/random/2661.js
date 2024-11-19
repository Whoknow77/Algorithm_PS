const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n =+input.shift()
const answer=[]
const temp = Array(n).fill(0)

function check(seq,length){
  for(let i=1; i<=Math.floor(length/2); i++){
    const sub1 = seq.slice(length-i*2, length-i).join('')
    const sub2 = seq.slice(length-i, length).join('')
    if(sub1===sub2){
      return false
    }
  }
  return true
}

function dfs(length){
  if(length===n){
    console.log(temp.join(''))
    process.exit()
  }
  else{
    for(let i=1; i<=3; i++){
      temp[length]=i
      if(check(temp,length+1)){
        dfs(length+1)
      }
    }
  }
}

dfs(0)
