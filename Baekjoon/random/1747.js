const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input.shift()
function isPelindrom(x){
  return JSON.stringify(x)===JSON.stringify(x).split('').reverse().join('')
}

function isPrime(x){
  if(x===1){
    return false
  }
  if(x===2){
    return true
  }
  for(let i=2; i<=Math.floor(Math.sqrt(x)); i++){
    if(x%i===0) return false
  }
  return true
}

while(true){
  if(isPelindrom(n) && isPrime(n)){
    console.log(n)
    break
  }
  else{
    n+=1
  }
}
