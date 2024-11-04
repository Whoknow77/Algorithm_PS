const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [nA,nB]=input.shift().split(' ').map(Number)
aArray= input.shift().split(' ').map(Number)
bArray= input.shift().split(' ').map(Number)

const map = new Map()
const answer=new Map()
for(let i=0; i<nB; i++){
  map.set(bArray[i],true)
}


for(let i=0; i<nA; i++){
  if(!map.get(aArray[i])){
    answer.set(aArray[i],true)
  }
}

const realAnswer=[...answer].map((v)=>v[0])
console.log(realAnswer.length)
console.log(realAnswer.sort((a,b)=>a-b).join(' '))
