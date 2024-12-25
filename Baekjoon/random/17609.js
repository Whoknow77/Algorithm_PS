const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const n = +input.shift()

function isPal(str, left, right) {
	while (left < right) {
		if (str[left] !== str[right]) {
			return false
		}
		left += 1
		right -= 1
	}
	return true
}

for (let i = 0; i < n; i++) {
	const str = input[i].trim()
	let left = 0
	let right = str.length - 1
	let count = 0
	while (left < right) {
		if (str[left] === str[right]) {
			left += 1
			right -= 1
		} else {
			count += 1
			if (!isPal(str, left + 1, right) && !isPal(str, left, right - 1)) {
				count = 2
			}
			break
		}
	}
	console.log(count)
}
