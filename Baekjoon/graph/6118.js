const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const arr = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < m; i++) {
	const [a, b] = input[i].split(" ").map(Number);
	arr[a].push(b);
	arr[b].push(a);
}

const visited = Array(n + 1).fill(0);
visited[1] = 1;
let distance = 0;
const barn = [];

const bfs = (start, depth) => {
	const queue = [[start, depth]];
	while (queue.length) {
		const [cur, depth] = queue.shift();

		for (const target of arr[cur]) {
			if (!visited[target]) {
				visited[target] = 1;
				distance = depth + 1;
				queue.push([target, depth + 1]);
				barn.push([target, depth + 1]);
			}
		}
	}
};
bfs(1, 0);
const minBarn = Math.min(
	...barn.filter((item) => item[1] === distance).map((item) => item[0])
);
const barnCount = barn.filter((item) => item[1] === distance).length;
console.log([minBarn, distance, barnCount].join(" "));
