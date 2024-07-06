const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const p = +input.shift()

let answer = []
for (let i = 0; i < p; i++) {
	const newArr = []
	let count = 0
	const arr = input[i].split(" ").map(Number)
	arr.shift()
	newArr.push(arr[0])
	for (let j = 1; j < arr.length; j++) {
		const student = arr[j]
		{
			let flag = false
			for (let k = 0; k < j; k++) {
				if (arr[k] > arr[j]) {
					newArr.unshift(student)
					count += j - k
					flag = true
					break
				}
			}
			if (!flag) {
				newArr.push(arr[j])
			}
		}
	}
	answer.push([i + 1, count])
}
for (let i = 0; i < answer.length; i++) {
	console.log(answer[i][0], answer[i][1])
}
