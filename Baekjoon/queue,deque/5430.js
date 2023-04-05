const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [number, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const testCase = [];
for (let i = 0; i < input.length; i += 3) {
  testCase.push(input.slice(i, i + 3));
}

testCase.forEach((item) => {
  // 함수
  // 배열에 들어있는 수의 개수
  // 배열
  const [f, arrayNumber, stringarray] = item;
  const array = JSON.parse(stringarray); // 문자열을 배열로 파싱
  let Rnumber = 0;
  for (let i = 0; i < f.length; i++) {
    if (f[i] === "R") {
      Rnumber++;
    } else if (f[i] === "D") {
      if (array.length === 0) {
        console.log("error");
        return;
      }
      // 홀수
      if (Rnumber % 2) {
        array.pop();
      }
      //짝수
      else {
        array.shift();
      }
    }
  }

  if (Rnumber % 2) {
    console.log(JSON.stringify(array.reverse()));
  } else {
    console.log(JSON.stringify(array));
  }
});
