const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().toLowerCase();
const reg = new RegExp(/[a-zA-Z]/i, "g");
input = input.match(reg, "").join("");
let Alphabet = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
  j: 0,
  k: 0,
  l: 0,
  m: 0,
  n: 0,
  o: 0,
  p: 0,
  q: 0,
  r: 0,
  s: 0,
  t: 0,
  u: 0,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0,
};

function solution(input) {
  [...input].forEach((item) => Alphabet[item.toLowerCase()]++);

  const values = Object.values(Alphabet);
  const Max = Math.max(...values);
  const firstIndex = values.indexOf(Max);
  const lastIndex = values.lastIndexOf(Max);
  if (firstIndex === lastIndex) {
    return Object.entries(Alphabet)[firstIndex][0].toUpperCase();
  } else {
    return "?";
  }
}
console.log(solution(input));

// solution2;
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().toLowerCase();

// const result = new Array(26).fill(0);

// for (let i = 0; i < input.length; i++) {
//   result[input.charCodeAt(i) - 97]++;
// }

// const max = Math.max(...result);
// const index = result.indexOf(max);

// let isSame = false;

// for (let j = 0; j < 26; j++) {
//   if (result[j] === max && index != j) {
//     isSame = true;
//     break;
//   }
// }

// console.log(isSame ? "?" : String.fromCharCode(index + 65));
