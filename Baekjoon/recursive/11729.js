const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input);
const answer = [];
// 시작위치, 도착위치, 옮길 원판개수
function hanoi(a, b, m) {
	// 남은 개수가 하나일 때 -> 시작 위치에서 도착위치로 원판 하나를 옮긴다.
	if (m === 1) {
		answer.push([`${a} ${b}`]);
		return;
	}
	// 시작위치에서 중간위치로 m-1개의 원판을 옮긴다.
	hanoi(a, 6 - a - b, m - 1);
	answer.push([`${a} ${b}`]);
	// 중간위치에서 도착위치로 m-1개의 원판을 옮긴다.
	hanoi(6 - a - b, b, m - 1);
}
hanoi(1, 3, n);
console.log(answer.length);
console.log(answer.join("\n"));
