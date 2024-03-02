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
console.log(arr);

const bacon = new Array(n + 1).fill(0);

const bfs = (start) => {
	const visited = new Array(n + 1).fill(0);
	const queue = [[start, 0]];

	while (queue.length) {
		let [node, count] = queue.shift();
		if (!visited[node]) {
			visited[node] = 1;
			bacon[start] += count++;
			arr[node].forEach((v) => queue.push([v, count]));
		}
	}
};

for (let i = 1; i <= n; i++) {
	bfs(i);
}
bacon.shift();
console.log(bacon.indexOf(Math.min(...bacon)) + 1);
