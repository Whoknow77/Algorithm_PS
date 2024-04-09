const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [start, end, end2] = input.shift().split(" ");
const startTime = Number(start.replace(":", ""));
const endTime = Number(end.replace(":", ""));
const endTime2 = Number(end2.replace(":", ""));
let count = 0;
const map = new Map();
for (let i = 0; i < input.length; i++) {
	const [time, member] = input[i].trim().split(" ");
	const targetTime = time.replace(":", "");

	// 출석
	if (targetTime <= startTime) {
		map.set(member, 1);
	}
	// 퇴장
	else if (targetTime >= endTime && targetTime <= endTime2) {
		if (map.get(member)) {
			map.delete(member);
			count++;
		}
	}
}

console.log(count);
