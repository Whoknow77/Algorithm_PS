const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const s = input[0]
const n = s.length

let sum = 0
let left = 0
let right = 0
for (let i = 0; i < n; i++) {
	if (s[i] === "(") {
		left += 1
		sum += 1
	}
	if (s[i] === ")") {
		right += 1
		sum -= 1
	}

	if (sum < 0) {
		console.log(right)
		return
	}
	if (sum === 0) {
		left = 0
	}
}
console.log(left)
