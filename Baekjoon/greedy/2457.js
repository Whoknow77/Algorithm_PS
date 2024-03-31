const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();

const flowers = input.map((item) => item.split(" ").map(Number));
flowers.sort((a, b) => {
	if (a[0] - b[0] !== 0) {
		return a[0] - b[0];
	} else {
		if (a[1] - b[1] !== 0) {
			return a[1] - b[1];
		} else {
			if (a[2] - b[2] !== 0) {
				return a[2] - b[2];
			} else {
				if (a[3] - b[3] !== 0) {
					return a[3] - b[3];
				}
			}
		}
	}
});

let anwser = 0;
let index = 0;
let start = [3, 1];

const getFlower = () => {
	const [month, day] = start;

	let max = [0, 0];
	for (let i = index; i < flowers.length; i++) {
		const [sMonth, sDay, eMonth, eDay] = flowers[i];
		if (sMonth < month || (sMonth === month && sDay <= day)) {
			if (max[0] < eMonth || (max[0] === eMonth && max[1] < eDay)) {
				max = [eMonth, eDay];
				index = i + 1;
			}
		} else {
			break;
		}
	}
	start = [...max];
};

while (true) {
	if (start[0] > 11) {
		break;
	}
	anwser++;
	getFlower();
	if (start[0] === 0) {
		return console.log(0);
	}
}
console.log(anwser);
