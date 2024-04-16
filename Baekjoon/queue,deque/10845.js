const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const queue = [];
const answer = [];
for (let i = 0; i < n; i++) {
	const [order, number] = input[i].split(" ");
	if (order.trim() === "push") {
		queue.push(number);
	} else if (order.trim() === "pop") {
		answer.push(queue.shift() || -1);
	} else if (order.trim() === "size") {
		answer.push(queue.length);
	} else if (order.trim() === "empty") {
		answer.push(queue.length ? 0 : 1);
	} else if (order.trim() === "front") {
		answer.push(queue[0] || -1);
	} else if (order.trim() === "back") {
		answer.push(queue.at(-1) || -1);
	}
}
console.log(answer.join("\n"));
