const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const arr = input.map(Number).sort((a, b) => b - a);
console.log(arr.join("\n"));
