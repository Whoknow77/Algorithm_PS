const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n=+input.shift()
const cur = input.shift().trim().split('').map(Number)
const final = input.shift().trim().split('').map(Number)

const first=[...cur]
const second=[...cur]
second[0] = second[0]===0 ? 1 : 0
second[1] = second[1]===0 ? 1 : 0

let firstCount=0
let secondCount=1
let answer = Infinity

// off
for(let i=1; i<=n-1; i++){
  let l = i-1
  let r = i+1

  // i-1번째 전구가 기대값의 전구와 다른 경우
  if(first[l]!==final[l]){
    first[l]=first[l]===0 ? 1 : 0
    first[i]=first[i]===0 ? 1 : 0
    if(i!==n-1){
      first[r]=first[r]===0 ? 1 : 0
    }
    firstCount+=1
  }
}

if(first.join('')===final.join('')){
  answer=Math.min(answer,firstCount)
}

// on
for(let i=1; i<=n-1; i++){
  let l = i-1
  let r = i+1

  // i-1번째 전구가 기대값의 전구와 다른 경우
  if(second[l]!==final[l]){
    second[l]=second[l]===0 ? 1 : 0
    second[i]=second[i]===0 ? 1 : 0
    if(i!==n-1){
      second[r]=second[r]===0 ? 1 : 0
    }
    secondCount+=1
  }
}

if(second.join('')===final.join('')){
  answer=Math.min(answer,secondCount)
}

answer = answer=== Infinity ? -1 : answer
console.log(answer)


// // 모든 경위의수 브루트포스 -> 2^100000 불가능
// // 모든 전구는 두번이상의 스위치가 작동될 수 없음
// // i-1 번째 전구의 상태에 따라 i번째 스위치가 강제로 결정됨
// // 선택권이 있는 스위치는 첫번째뿐 -> 첫번째 스위치를 on/off 상태 두개로 나누고
// // 순차적으로 i-1번째 상태를 보고 현재 스위치를 on/off 한다.

