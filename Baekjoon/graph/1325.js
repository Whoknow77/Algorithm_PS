const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const solution = () => {
	const graph = Array.from({ length: n + 1 }, () => []);

	for (let i = 0; i < m; i++) {
		const [a, b] = input[i].split(" ").map(Number);
		graph[b].push(a);
	}

	let max = 0;
	let answer = [];

	const dfs = (start) => {
		const check = Array.from({ length: n + 1 }, () => 0);
		let count = 1; // 해킹된 컴퓨터 수
		let stack = [start];
		check[start] = 1;

		while (stack.length) {
			const value = stack.pop();

			for (let i = 0; i < graph[value].length; i++) {
				if (!check[graph[value][i]]) {
					count += 1;
					check[graph[value][i]] = 1;
					stack.push(graph[value][i]);
				}
			}
		}
		if (max > count) {
			return;
		} else if (max === count) {
			answer.push(start);
		} else {
			max = count;
			answer = [start];
		}
	};

	for (let i = 1; i <= n; i++) {
		dfs(i);
	}
	return answer.join(" ");
};

console.log(solution());
