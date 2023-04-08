// for문 두번 or map안에 indexOf를 이용할 경우 시간복잡도 O(N)으로 시간초과 => 자료구조를 만들어놓고 이용하기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let N = Number(input.shift());
let arr = input[0].split(" ").map((x) => +x);

let set = new Set(arr);
let uniq = [...set].sort((a, b) => a - b);

let dic = {};
uniq.forEach((e, index) => {
  dic[e] = index;
});
let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += dic[arr[i]] + " ";
}

console.log(answer);
