const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');
d=['+', '-', ' ']

const testCase = +input.shift()
const nums = input.map((num)=>+num)

const dfs=(curStr,count,end)=>{
  if(count===end){
    const newStr = curStr.replaceAll(' ','')
    const sum = eval(newStr)
    if(sum===0){
      arr.push(curStr)
    }
    return
  }

  dfs(`${curStr}+${(count+1).toString()}`,count+1,end)
  dfs(`${curStr} ${(count+1).toString()}`,count+1,end)
  dfs(`${curStr}-${(count+1).toString()}`,count+1,end)
}
let arr=[]
for(let i=0; i<testCase; i++){
  arr=[]
  dfs('1',1,nums[i])
  console.log(arr.sort().join('\n'))
  console.log()
}

// 문자열 연산은 eval로 대체 가능
