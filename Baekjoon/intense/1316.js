// 앞의 인덱스와 마지막 인덱스를 비교하여 그 사이에 다른 문자가 있으면 그룹단어가 아님
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input, ...etce] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input, etce) {
  etce.forEach((item) => {
    let number = 0;
    [...item].forEach((i) => {
      const firstIndex = item.indexOf(i);
      const lastIndex = item.lastIndexOf(i);
      if (firstIndex !== lastIndex) {
        const word = item.slice(firstIndex, lastIndex + 1);
        const key = word[0];
        for (let i = 1; i < word.length; i++) {
          if (key !== word[i]) {
            number++;
          }
        }
      }
    });
    if (number > 0) {
      input--;
    }
  });
  return input;
}

console.log(solution(input, etce));

// solution2
const arr = [];

for (let i = 1; i < input.length; i++) {
  arr.push(input[i]);
}

let answer = arr.length;
let temp = "";

arr.forEach((item) => {
  temp = item[0];
  for (let i = 1; i < item.length; i++) {
    // 중복인데 직전과 다른 경우 그룹 단어가 아님
    if (temp.includes(item[i]) && item[i - 1] !== item[i]) {
      answer--;
      break;
    }
    temp += item[i];
  }
});

console.log(answer);
