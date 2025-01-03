// 가격이 낮은순 -> 무게가 높은순, 하지만 끝까지 조사해야 해야함

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const [n, m] = input.shift().split(" ")
const arr = []

for (let i = 0; i < n; i++) {
	const [weight, price] = input[i].split(" ").map(Number)
	arr.push([weight, price])
}

arr.sort((a, b) => {
	if (a[1] !== b[1]) {
		return a[1] - b[1]
	}
	return b[0] - a[0]
})

let priceSum = 0
let weightSum = 0
let answer = Number.MAX_SAFE_INTEGER
let beforePriceSum = 0

for (let i = 0; i < n; i++) {
	const [curWeight, curPrice] = arr[i]
	weightSum += curWeight

	if (curPrice === beforePriceSum) {
		priceSum += curPrice
	} else {
		priceSum = beforePriceSum = curPrice
	}

	if (weightSum >= m) {
		answer = Math.min(answer, priceSum)
	}
}

console.log(answer === Number.MAX_SAFE_INTEGER ? -1 : answer)
