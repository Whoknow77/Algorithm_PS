const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")
const str = input[0].trim()

let dict = ""
for (let i = 1; i <= 100000; i++) {
	dict += i.toString()
}

console.log(dict.indexOf(str) + 1)
