const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 2 -> 1
// 3 -> 1
// 4 -> 2
// 5 -> 3
// 6 -> 3
// 7 -> 4
