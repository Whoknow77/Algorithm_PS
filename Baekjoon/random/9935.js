const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let str = input.shift().trim()
let bombStr = input.shift().trim()
const bombLength = bombStr.length
const stack=[]

for(let i=0; i<str.length; i++){
  stack.push(str[i])
  if(str[i]===bombStr[bombLength-1]){
    const last =stack.slice(-bombLength)
    if(last.join('')===bombStr){
      stack.splice(-bombLength)
    }
  }
}

stack.length===0 ? console.log("FRULA") : console.log(stack.join(''))

