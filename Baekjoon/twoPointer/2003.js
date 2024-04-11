const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);

let count = 0;
let en = 0;
let sum = arr[0];
for (let st = 0; st < n; st++) {
	while (en < n && sum < m) {
		en++;
		sum += arr[en];
	}
	if (en === n) {
		break;
	}
	if (sum === m) {
		count++;
	}
	sum -= arr[st];
}

console.log(count);
