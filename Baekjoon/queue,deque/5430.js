const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());

const answer = [];

for (let i = 0; i < N; i++){
  let sum = 0;
  // 개행 문자 빼야됨
  for (let j = 0; j < input[i].length; j++){
      if (input[i][j] === "(") {
        sum++;
    }
      else {
        sum--;
        if (sum < 0) {
          break;
        }
    }
  }
  if (sum===0) {
    answer.push("YES")
  }
  else {
    answer.push("NO")
  }
}

console.log(answer.join('\n'))