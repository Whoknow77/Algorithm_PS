// S에 대해서 문자열 조합 찾고 P를 왼쪽부터 차례로 조사

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

// const s = input[0].trim()
// const p = input[1].trim()
// const set = new Set()

// for (let i = 0; i < s.length; i++) {
// 	for (let j = i; j < s.length; j++) {
// 		set.add(s.slice(i, j + 1))
// 	}
// }

// let answer = 0

// for (let i = 0; i < p.length; i++) {
// 	let cur = p[i]
// 	for (let j = i; j < p.length; j++) {
// 		if (set.has(cur + p[j + 1])) {
// 			cur += p[j + 1]
// 		} else {
// 			answer += 1
// 			i += j - i
// 			break
// 		}
// 	}
// }

// console.log(answer)

// 다른 풀이
const S = input.shift()
const P = input.shift()

let ans = 0
let idx = 0

for (let i = 0; i < P.length; i++) {
	if (S.indexOf(P.slice(idx, i + 1)) > -1) continue
	idx = i
	ans++
}
console.log(ans + 1)

// 매칭이 안될때 더하는 방식이므로 마지막은 포함안되므로 +1
