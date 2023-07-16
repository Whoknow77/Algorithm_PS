const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim('\n').split('\n');
const [N, Maxweight] = input[0].split(' ');
input.shift();
const arr=[];
for (let i = 0; i < input.length; i++) {
  const [weight, value] = input[i].split(" ");
  arr.push([weight,value])
}
let answer=0;
function f(n, cap){
    if(n===1){
        return answer;
    }
    // 배낭에 넣을 수 있을 경우
    if(cap>=arr[n][0]){
        answer +=f(n-1, cap-arr[n][0]) +arr[n][1];
        return f(n-1, cap-arr[n][0]);
         
    }
    else{
        return f(n-1,cap);
    }
}

console.log(f(N-1, 0));

// 물품의 수 / 버틸 수 있는 무게
// 4 7
// 무게 가치
// 6 13
// 4 8
// 3 6
// 5 12
// 가치의 최대 합
