const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")
let [n, k] = input[0].split(" ").map(Number)

let digit = 1 // 현재 자릿수
let cnt = 9 // 해당 자릿수의 숫자 개수(9,90,900...)

let start = 1 // 해당 자릿수의 첫 번째 숫자

// 자릿수 계산(9보다 큰지, 189보다 큰지...)
while (k > digit * cnt) {
	k -= digit * cnt
	digit += 1
	start *= 10
	cnt *= 10
}

// 시작점에서 얼마나 움직여야하는지 계산
const number = start + Math.floor((k - 1) / digit)
const index = (k - 1) % digit

if (n < number) {
	console.log(-1)
} else {
	console.log(String(number)[index])
}
