const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [buildingLength, curPoint, buildingPoint, upinterval, downinterval] =
	input[0].split(" ").map(Number);

if (curPoint === buildingPoint) {
	console.log(0);
	return;
}
const interval = [upinterval, downinterval * -1];

function bfs(curPoint) {
	const visited = Array.from(Array(buildingLength + 1).fill(0));
	visited[curPoint] = 1;
	const queue = [[curPoint, 0]];
	while (queue.length) {
		for (let i = 0; i < queue.length; i++) {
			const [cur, count] = queue.shift();

			for (let j = 0; j < 2; j++) {
				const nextPoint = interval[j] + cur;

				if (nextPoint === buildingPoint) {
					return count + 1;
				}
				if (
					nextPoint > 0 &&
					nextPoint <= buildingLength &&
					!visited[nextPoint]
				) {
					visited[nextPoint] = 1;
					queue.push([nextPoint, count + 1]);
				}
			}
		}
	}
	return "use the stairs";
}

console.log(bfs(curPoint));

// 10 1 10 2 1
// 건물의 층 개수, 강호의 현재 위치, 스타트링크가 있는 곳, 위로 몇층씩, 아래로 몇층 씩
