const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n=+input.shift()
const arr=input.shift().trim().split(' ')
const dict = new Map()
let answer=0

for(let i=0; i<n; i++){
  dict.set(arr[i],i)
}

const problem = input.shift().trim().split(' ')
for(let i=0; i<n-1; i++){
  for(let j=i+1; j<n; j++){
    if(dict.get(problem[i])<dict.get(problem[j])){
      answer+=1
    }
  }
}
const total=n*(n-1)/2
console.log(`${answer}/${total}`)
