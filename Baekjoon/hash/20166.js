const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, _] = input.shift().split(" ").map(Number);
const arr = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
const quiz = input.slice(n);
const count = {};

for (let i = 0; i < n; i++) {
	for (let j = 0; j < m; j++) {
		arr[i][j] = input[i][j];
	}
}
quiz.forEach((word) => {
	count[word] = 0;
});
for (let i = 0; i < quiz.length; i++) {
	count[quiz[i].trim()] = 0;
}

const offset = [
	[0, 1],
	[0, -1],
	[-1, 0],
	[1, 0],
	[1, 1],
	[1, -1],
	[-1, 1],
	[-1, -1],
];

const dfs = (startR, startC) => {
	const stack = [[startR, startC, ""]];

	while (stack.length > 0) {
		const [r, c, prevWord] = stack.pop();
		const word = prevWord + arr[r][c];

		// 경우의수 추가
		if (count[word] !== undefined) {
			count[word] += 1;
		}

		// 길이가 5인경우 다음 루프로
		if (word.length === 5) {
			continue;
		}

		offset.forEach(([dr, dc]) => {
			const r2 = (r + dr + n) % n;
			const c2 = (c + dc + m) % m;

			stack.push([r2, c2, word]);
		});
	}
};

for (let i = 0; i < n; i++) {
	for (let j = 0; j < m; j++) {
		dfs(i, j);
	}
}

console.log(quiz.map((word) => count[word.trim()]).join("\n"));
