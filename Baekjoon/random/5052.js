const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const t=+input.shift()
for(let i=0; i<t; i++){
  const n=+input.shift()
  const arr=input.splice(0,n).map((v)=>v.trim()).sort()
  let prevNumberLength=0
  let result="YES"
  for(let i=0; i<n; i++){
    if(arr[i].slice(0,prevNumberLength)===arr[i-1]){
      result="NO"
      break
    }
    prevNumberLength=arr[i].length
  }
  console.log(result)
}

