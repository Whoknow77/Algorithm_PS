const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const n = +input.shift()
const k = +input.shift()
const arr = input
	.shift()
	.split(" ")
	.map(Number)
	.sort((a, b) => a - b)
let result = 0

const d = []
for (let i = 1; i < n; i++) {
	d.push([i - 1, arr[i] - arr[i - 1]])
}

const s = [...d]
	.sort((a, b) => b[1] - a[1])
	.slice(0, k - 1)
	.sort((a, b) => a[0] - b[0])

s.push([n - 1, 0])

let index = 0
let start = 0
while (index < s.length) {
	const [end, _] = s[index++]
	result += arr[end] - arr[start]
	start = end + 1
}
console.log(result)
