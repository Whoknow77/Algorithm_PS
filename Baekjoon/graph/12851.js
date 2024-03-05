const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const Solve = (start, end) => {
	const visited = Array(100001).fill(0);
	const count = Array(100001).fill(0);
	if (start === end) {
		return [0, 1];
	} else {
		const queue = [start];
		count[start] = 1;
		visited[start] = 1;
		while (queue.length) {
			const cur = queue.shift();
			for (const item of [cur + 1, cur - 1, cur * 2]) {
				if (item >= 0 && item <= 100000) {
					if (!visited[item]) {
						visited[item] = visited[cur] + 1;
						count[item] += count[cur];
						queue.push(item);
					} else if (visited[item] === visited[cur] + 1) {
						count[item] += count[cur];
					}
				}
			}
		}
		return [visited[end] - 1, count[end]];
	}
};

console.log(Solve(n, m).join("\n"));
