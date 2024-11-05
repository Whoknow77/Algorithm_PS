const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n=+input.shift()
const maraton =new Map()

for(let i=0; i<n; i++){
  const person = input[i].trim()
  maraton.has(person) ? maraton.set(person,maraton.get(person)+1) : maraton.set(person,1)
}

for(let i=n; i<input.length; i++){
  const person=input[i].trim()
  if(maraton.has(person)>0){
    maraton.set(person,maraton.get(person)-1)
  }
}

for(let [key,value] of maraton){
  if(value>0){
    console.log(key)
    break
  }
}
