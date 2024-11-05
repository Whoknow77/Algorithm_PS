const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const t = +input.shift()
for(let i=0; i<t; i++){
  const answer=[]
  const wordsMap=new Map()

  const n = +input.shift()
  const words1 = input.shift().split(' ').map(Number)
  for(const word of words1){
    wordsMap.set(word,1)
  }

  const m= +input.shift()
  const words2 = input.shift().split(' ').map(Number)
  for(const word of words2){
    if(wordsMap.has(word)){
      answer.push(1)
    }
    else{
      answer.push(0)
    }
  }


  console.log(answer.join('\n'))
}
