const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let gradeTable = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

function solution(input) {
  let sum = 0;
  let scoreSum = 0;

  input.forEach((info) => {
    let [subject, score, grade] = info.split(" ");
    grade = grade.trim();
    if (grade !== "P") {
      sum += parseFloat(Number(score) * gradeTable[grade]);
      scoreSum += Number(score);
    }
  });
  return (sum / scoreSum).toFixed(6);
}

console.log(solution(input));
