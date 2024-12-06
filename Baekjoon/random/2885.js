const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift()
let num = 2**n.toString(2).length

if(num/2===n){
  console.log(n,0);
}

else{
  let count=0;
  let value=0;
  const cur = num;
  while(value!==n){
    num/=2
    if(value + num <=n){
      value+=num
    }
    count+=1
  }
  console.log(cur, count)
}


