const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const manPlus = []
const manMinus = []
const womanPlus = []
const womanMinus = []

const n = +input.shift()
input[0]
	.trim()
	.split(" ")
	.forEach((item) => {
		if (item.includes("-")) {
			manMinus.push(Number(item))
		} else {
			manPlus.push(Number(item))
		}
	})
input[1]
	.trim()
	.split(" ")
	.forEach((item) => {
		if (item.includes("-")) {
			womanMinus.push(Number(item))
		} else {
			womanPlus.push(Number(item))
		}
	})

manMinus.sort((a, b) => b - a)
womanMinus.sort((a, b) => b - a)
manPlus.sort((a, b) => a - b)
womanPlus.sort((a, b) => a - b)

let answer = 0

function loop(left, right, minus, plus) {
	const l = minus.length
	const m = plus.length
	while (left < l && right < m) {
		if (minus[left] + plus[right] < 0) {
			left += 1
			right += 1
			answer += 1
		} else {
			left += 1
		}
	}
}

loop(0, 0, manMinus, womanPlus)
loop(0, 0, womanMinus, manPlus)
console.log(answer)

// -와 +가 만나야함, -쪽이 절댓값이 더 커야함 즉, 더해서 음수가 나와야함
// 남자 -와 여자+ 쌍과 남자 + 여자- 쌍을 나눠서 게산후 더하기
// 투포인터로 쌍 찾기
