const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const S = input.shift().trim()
const T = input.shift().trim()

function solve(cur) {
	if (cur.length === S.length) {
		if (cur === S) {
			console.log(1)
		} else {
			console.log(0)
		}
		process.exit()
	}
	if (cur.at(-1) === "A") {
		solve(cur.slice(0, cur.length - 1))
	} else {
		solve(cur.split("").reverse().slice(1).join(""))
	}
}

solve(T)

// T -> S
// 문자열 뒤의 A 빼기
// 문자열 뒤집고 앞에 B 빼기

// S -> T로 갈때는 추가하는 거라서 둘다 가능하고 중간에 가능/불가능을 따지기가 어려움
// T -> S로 갈때는 맨뒤에 A or B일때로 나뉘므로 경우의수가 작음
