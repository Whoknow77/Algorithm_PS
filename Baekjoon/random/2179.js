const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n=+input.shift()
const dict = new Map()

function calcLength(a,b){
  const shorter = Math.min(a.length,b.length)
  let count=0
  for(let i=0; i<shorter; i++){
    if(a[i]===b[i]){
      count+=1
    }
    else{
      return count
    }
  } 
  return count
}

for(let i=0; i<n-1; i++){
  const str = input[i].trim()
  dict.set(str,{maxLength:0,target:''})
  for(let j=i+1; j<n; j++){
    const nextStr = input[j].trim()
    const count = calcLength(str,nextStr)
    const {maxLength}=dict.get(str)
    if(str!==nextStr && maxLength<count ){
      dict.set(str,{maxLength:count,target:nextStr})
    }
  }
}
// S,T 출력
// maxLength 순, S가 입력되는 순, T가 입력되는 순 
// 우선순위 큐?

const sortedDict = [...dict].sort((a,b)=>b[1].maxLength-a[1].maxLength)[0]
console.log(sortedDict[0])
console.log(sortedDict[1].target)

