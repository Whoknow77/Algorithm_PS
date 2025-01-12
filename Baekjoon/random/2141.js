const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")
const n = +input.shift()

const arr = []
let people = 0
let sum = 0
for (let i = 0; i < n; i++) {
	const [a, b] = input[i].split(" ").map(Number)
	arr.push([a, b])
	people += b
}
arr.sort((a, b) => a[0] - b[0])
for (let i = 0; i < n; i++) {
	sum += arr[i][1]
	if (sum >= people / 2) {
		console.log(arr[i][0])
		return
	}
}
