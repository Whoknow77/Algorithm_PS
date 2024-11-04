const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift()
const arr=[]
const newArr=[]
let count=0
let count2=0

for(let i=0; i<n; i++){
  arr.push(input[i].trim())
  let subArr=''
  for(let j=0; j<n; j++){
    subArr+=input[j][i]
  }
  newArr.push(subArr)
}

for(let i=0; i<n; i++){
  count+=arr[i].split('X').filter((v)=>v.length>=2).length
}

for(let i=0; i<n; i++){
  count2+=newArr[i].split('X').filter((v)=>v.length>=2).length
}

console.log(count, count2)
