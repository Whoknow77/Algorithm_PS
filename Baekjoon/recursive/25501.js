const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
const answer = [];
const recursion = (str, l, r, count) => {
	if (l >= r) {
		return [1, count];
	} else if (str[l] !== str[r]) {
		return [0, count];
	} else {
		return recursion(str, l + 1, r - 1, count + 1);
	}
};

const isPalindrome = (str) => {
	if (str.length === 1) {
		return [1, 1];
	} else {
		return recursion(str, 0, str.length - 1, 1);
	}
};

for (let i = 0; i < N; i++) {
	console.log(isPalindrome(input[i].trim()).join(" "));
}

// 뒤에 개행문자, 문자 하나일때 조심
