// 가장 먼 곳은 마지막에 처리, (홀수면 배열의 개수 % m)개 먼저 갔다오고 나머지 m개 처리, 짝수면 m개씩 처리

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")
const [n, m] = input.shift().split(" ").map(Number)
let plusArr = []
let minusArr = []
let sum = 0

input[0]
	.split(" ")
	.map(Number)
	.forEach((v) => {
		if (v > 0) {
			plusArr.push(v)
		} else {
			minusArr.push(-v)
		}
	})

plusArr.sort((a, b) => b - a)
minusArr.sort((a, b) => b - a)

if (plusArr.length === 0 || plusArr[0] < minusArr[0]) {
	sum += minusArr[0]
	minusArr = minusArr.slice(m)
} else {
	sum += plusArr[0]
	plusArr = plusArr.slice(m)
}

let index = 0
while (index < plusArr.length) {
	sum += plusArr[index] * 2
	index += m
}

index = 0
while (index < minusArr.length) {
	sum += minusArr[index] * 2
	index += m
}

console.log(sum)
