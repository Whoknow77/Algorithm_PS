const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [arrNum, arr, inputNum, inputArr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

arr = arr
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

// 배열의 빈도수를 저장하는 객체르 따로 만듬
const arrObject = {};

arr.forEach((item) => {
  arrObject[item] = arrObject[item] + 1 || 1;
});
const answer = [];

inputArr
  .split(" ")
  .map(Number)
  .forEach((target) => {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    let res = false;

    while (start <= end) {
      mid = parseInt((start + end) / 2);

      if (target < arr[mid]) {
        end = mid - 1;
      } else if (target > arr[mid]) {
        start = mid + 1;
      } else {
        res = true;
        break;
      }
    }
    if (res) {
      answer.push(arrObject[arr[mid]]);
    } else {
      answer.push(0);
    }
  });

console.log(answer.join(" "));
