const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n,m]= input.shift().split(' ').map(Number)
const mile=[];
let count=0;

for(let i=0; i<n; i++){
  const [p,l]=input[i*2].split(' ').map(Number)
  const arr = input[i*2+1].split(' ').map(Number)
  if(p>=l){
    // 가장 마일리지를 적게 낸 사람만큼만 내면 됨 -> 내림차순 정렬후 l-1번째
    mile.push(arr.sort((a,b)=>b-a)[l-1])
  }
  else{
    // 최소 마일리지를 투자해서 수강신청이 가능함
    mile.push(1)
  }
}
mile.sort((a,b)=>a-b).reduce((prev,cur)=>{
  if(prev+cur<=m){
    count+=1
    return prev+cur
  }
  return prev
},0)
console.log(count)
