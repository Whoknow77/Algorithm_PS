const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n=+input.shift()
const answerArr=[]

for(let i=0; i<n; i++){
  const [x,y]= input[i].split(' ').map(Number)
  const sqrtValue = Math.sqrt(y-x)
  let answer=0

  if(sqrtValue%1===0){
    answer = 2*sqrtValue-1
  }

  else{
    const a = Math.pow(Math.ceil(sqrtValue)-1,2)+1
    const b = Math.pow(Math.ceil(sqrtValue),2)

    if((a+b)/2 <=y-x){
      answer = 2*Math.ceil(sqrtValue)-1 
    }
    else{
      answer = 2*Math.ceil(sqrtValue)-2
    }
  }
  answerArr.push(answer)
}

console.log(answerArr.join('\n'))
