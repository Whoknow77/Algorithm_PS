const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [x,y,w,s]= input.shift().split(' ').map(Number)
const min = Math.min(x,y)
const max = min === x ? y : x


// 일자
if(w*2<=s){
  console.log((min+max)*w)
}

// 대각선 + 일자
else{

    const sum = (min*s)
    if(w<s){
      // 일자
      console.log(sum+(max-min)*w)
    }
    else{
      // 대각선 + 나머지 한칸이 홀수이면 일자
      if((max-min)%2===0){
        console.log(sum+(max-min)*s)
      }
      else{
        console.log(sum+(max-min-1)*(s)+w)
      }
    }
}

// 대각선 이동할때는 대각선 비용 vs 평범 비용*2
// 일자(두칸 이상) 이동할때는 대각선 비용 vs 평범 비용 
// 한칸은 무조건 일자
