const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, m] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const arr = [];
let result='';

function BackTracking(k) {
    if (k === m) {
        result+=`${arr.join(' ')}\n`;
        return;
    }
    
    for (let i = 0; i < n; i++) {
        arr.push(i + 1);
      BackTracking(k + 1, i);
      arr.pop();
    }
}
BackTracking(0);
console.log(result);
