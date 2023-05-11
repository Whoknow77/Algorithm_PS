const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();

const map = new Map();
input.forEach((item) => {
  const [name, flow] = item.trim().split(" ");
  map.set(name, flow);
});

let answer = [];
for (let [key, value] of map) {
  if (value === "enter") {
    answer.push(key);
  }
}
answer.sort((a, b) => {
  if (a > b) {
    return -1;
  } else {
    return 1;
  }
});
console.log(answer.join("\n"));
// 순서대로 자료구조에 enter/leave를 넣고, enter인것들만 출력
