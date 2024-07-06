const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const truckCost = input.shift().split(" ").map(Number)

const map = new Map()
for (let i = 0; i < input.length; i++) {
	const [start, end] = input[i].split(" ").map(Number)
	for (let j = start; j < end; j++) {
		map.set(j, map.get(j) ? map.get(j) + 1 : 1)
	}
}

let sum = 0
for (const [key, value] of map) {
	sum += value * truckCost[value - 1]
}
console.log(map)
// 111 22 333
// 15 6 3
