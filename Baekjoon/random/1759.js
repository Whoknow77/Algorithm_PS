const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const mo=["a","e","i","o","u"]
const [L,C]=input.shift().split(' ').map(Number)
const arr = input[0].trim().split(' ')
let visited = Array(C).fill(0)

// 아스키코드, 자음개수, 모음개수 누적해서 판단
const answer=[]
function dfs(str,length,moNumber,jaNumber){
  if(length===L && moNumber>=1 && jaNumber>=2){
    answer.push(str)
    return
  }
  else{
    for(let i=0; i<C; i++){
      // 뒤에오는 아스키코드가 더 커야함
    if(!visited[i] && arr[i].charCodeAt()>str.at(-1).charCodeAt()){
      visited[i]=1
      // 모음
      if(mo.includes(arr[i])){
        dfs(str+arr[i],length+1,moNumber+1,jaNumber)
      }
      // 자음
      else{
        dfs(str+arr[i],length+1,moNumber,jaNumber+1)
      }
      visited[i]=0
    }
  }
  }
}

for(let i=0; i<C; i++){
  visited = Array(C).fill(0)
  visited[i]=1
  if(mo.includes(arr[i])){
    dfs(arr[i],1,1,0)
  }
  else{
    dfs(arr[i],1,0,1)
  }
}

console.log(answer.sort().join('\n'))

