const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const t=+input.shift()
for(let i=0; i<t; i++){
  const n = +input.shift()
  const arr=input.splice(0,n).map((v)=>v.split(' ').map(Number)).sort((a,b)=>a[0]-b[0])
  let count=1
  let top=arr[0][1]

  for(let i=1; i<n; i++){
    if(top>arr[i][1]){
      // 면접 더 잘본경우 -> 통과
      top=arr[i][1]
      count+=1
    }
  }
  console.log(count)
}
