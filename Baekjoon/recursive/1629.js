const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b, m] = input[0].split(" ").map(BigInt);

function pow(a, b, m) {
	if (b === 1n) {
		return a % m;
	}
	let val = pow(a, b / 2n, m);
	val = (val * val) % m;
	// 홀수
	if (b % 2n) {
		return (val * a) % m;
	}
	// 짝수
	return val;
}

console.log(pow(a, b, m).toString());
