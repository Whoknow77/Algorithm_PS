const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const isPrime = (n) => {
	const arr = Array(n + 1)
		.fill(true)
		.fill(false, 0, 2);
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (arr[i]) {
			for (let j = i * i; j <= n; j += i) {
				arr[j] = false;
			}
		}
	}
	return arr.map((v, i) => (v ? i : 0)).filter((e) => e);
};

const prime = isPrime(n);
let right = 0;
let count = 0;
let sum = prime[0];
for (let left = 0; left < n; left++) {
	while (right < n && sum < n) {
		right++;
		sum += prime[right];
	}
	if (sum === n) {
		count++;
	}
	sum -= prime[left];
}
console.log(count);

// 1부터 n사이의 소수를 모두 구한다.
// 투 포인터 적용
