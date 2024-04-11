const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, s] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);

let min = Infinity;
let en = 0;
let sum = arr[0];
for (let st = 0; st < n; st++) {
	while (sum < s && en < n) {
		en++;
		sum += arr[en];
	}
	if (en === n) {
		break;
	}
	min = Math.min(min, en - st + 1);
	sum -= arr[st];
}
console.log(min === Infinity ? 0 : min);
