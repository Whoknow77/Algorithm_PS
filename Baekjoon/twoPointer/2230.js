const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const arr = input.map(Number).sort((a, b) => a - b);
let en = 0;
let mn = Infinity;
for (let st = 0; st < n; st++) {
	while (en < n && arr[en] - arr[st] < m) {
		en++;
	}

	if (en === n) {
		break;
	}
	mn = Math.min(mn, arr[en] - arr[st]);
}

console.log(mn);
