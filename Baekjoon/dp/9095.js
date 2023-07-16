const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input.shift());
const d = [];
d[0] = 0;
d[1] = 1;
d[2] = 2;
d[3] = 4;

function f(n) {
  if (n < 4) {
    return d[n];
  } else {
    d[n] = f(n - 1) + f(n - 2) + f(n - 3);
    return d[n];
  }
}

input.forEach((item)=>{
    console.log(f(item));
})



// d[i] = d[i-1] + d[i-2] + d[i-3];
