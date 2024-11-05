const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = +input.shift()
const dict=new Map()

for(let i=0; i<n; i++){
  const title=input.shift().trim()
  dict.has(title) ? dict.set(title,dict.get(title)+1) : dict.set(title,1)
}

const sortedDict = [...dict].sort((a,b)=>{
  if(a[1]===b[1]){
    return a[0].localeCompare(b[0])
  }
  return b[1]-a[1]
})

console.log(sortedDict[0][0])
