const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());

const newArray = [...new Set(input)].sort((a, b) => {
  // 길이가 짧은 순으로
  if (a.length > b.length) {
    return 1;
  } else if (a.length === b.length) {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  } else {
    return -1;
  }
});

console.log(newArray.join("\n"));
