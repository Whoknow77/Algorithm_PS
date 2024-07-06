const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const [N, K] = input[0].split(" ").map(Number)
const nations = input.slice(1).map((e) => e.split(" ").map(Number))
let dup = 1

nations.sort((a, b) => {
	if (b[1] !== a[1]) return b[1] - a[1]
	else if (b[2] !== a[2]) return b[2] - a[2]
	else return b[3] - a[3]
})

nations[0][4] = 1
for (let i = 1; i < N; i++) {
	if (
		nations[i - 1][1] === nations[i][1] &&
		nations[i - 1][2] === nations[i][2] &&
		nations[i - 1][3] === nations[i][3]
	) {
		nations[i][4] = nations[i - 1][4]
		dup++
	} else {
		nations[i][4] = nations[i - 1][4] + dup
		dup = 1
	}
}

console.log(nations)
console.log(nations.find((e) => e[0] === K)[4])
