const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, S] = input.shift().split(" ").map(Number);
const inputarr = input.shift().split(" ").map(Number);
let cnt = 0;
const isused = Array(N).fill(0);
const Back = (k, sum, l) => {
	if (sum === S && k > 0) {
		cnt++;
	}
	for (let i = l; i < N; i++) {
		if (!isused[i]) {
			isused[i] = 1;
			Back(k + 1, sum + inputarr[i], i + 1);
			isused[i] = 0;
		}
	}
};

const Console = () => {
	Back(0, 0, 0);
	console.log(cnt);
};

Console();
