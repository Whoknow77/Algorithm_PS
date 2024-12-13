const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n,l]= input.shift().split(' ').map(Number)
const arr=[]

for(let i=0; i<n; i++){
  arr.push(input[i].split(' ').map(Number))
}

arr.sort((a,b)=>a[0]-b[0])

let lastPoint=-1
let answer=0

arr.forEach(([waterStart,waterEnd])=>{
  if(lastPoint >= waterStart){
    const num = Math.ceil((waterEnd - lastPoint) / l)
    answer+=num;
    lastPoint = lastPoint + (num*l)
  }
  else{
    const num = Math.ceil((waterEnd-waterStart)/l)
    answer+=num;
    lastPoint = waterStart + (num * l) 
  }
})

console.log(answer)


// 필요한 널판지 개수 : Math.ceil(웅덩이크기 / 널판지크기)
// 가장 최근에 설치한 널판지의 끝 지점 : 이전에 널판지 깔때 현재좌표 + (널판지 개수 * 널판지 길이)
// 가장 최근에 설치한 널판지의 끝 지점 >= 현재좌표: 필요한 널판지 개수 : Math.ceil((웅덩이의 끝지점 - 널판지의 끝지점 )/널판지크기), 널판지 끝지점 = 이전 널판지의 끝지점 부터 더해서 계산
// 가장 최근에 설치한 널판지의 끝 지점 < 현재좌표: 그대로 계산
// 놓은 널판지가 다음 웅덩이에 걸치는 경우를 잘 봐야함
// 힌트는 공간임을 주의 -> 물웅덩이가 x좌표에있으면 x~x+1까지 있는거라서 사이를 덮는다고 생각해야함
