const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);

const lines = [];
const heap = [];
let sum = 0;
for (let i = 1; i <= N; i++) {
	lines.push(input[i].split(" ").map(Number));
}

lines.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

heap.push(lines[0][1]);
sum = lines[0][1] - lines[0][0];

for (let i = 1; i < N; i++) {
	const [start, finish] = lines[i];
	const finishTime = heap.at(-1);

	if (finishTime < finish) {
		if (finishTime < start) {
			sum += finish - start;
		} else {
			sum += finish - finishTime;
		}
		heap.push(finish);
		heap.shift();
	}
}
console.log(sum);

// 현재[1] > 최근[1] 이 더 크면 현재[1] - 최근[1] 을 더해나감
// 현재[1 <= 최근[1] 이 더 작으면 그대로
