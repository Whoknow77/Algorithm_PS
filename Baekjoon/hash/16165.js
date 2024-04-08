const fs = require("fs");
const { start } = require("repl");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ");
const groupMap = new Map();
const memberMap = new Map();
let startIndex = 0;
for (let i = 0; i < n; i++) {
	const arr = input.slice(startIndex);
	const group = arr.shift().trim();
	const memberNumber = +arr.shift();

	for (let j = 0; j < memberNumber; j++) {
		const member = arr[j].trim();
		if (groupMap.get(group)) {
			groupMap.set(group, [...groupMap.get(group), member]);
		} else {
			groupMap.set(group, [member]);
		}
		memberMap.set(member, group);
	}
	startIndex += memberNumber + 2;
}
for (let i = startIndex; i < startIndex + m * 2; i += 2) {
	const [target, quizNumber] = [input[i].trim(), input[i + 1].trim()];
	if (quizNumber === "1") {
		console.log(memberMap.get(target));
	} else if (quizNumber === "0") {
		console.log(groupMap.get(target).sort().join("\n"));
	}
}
