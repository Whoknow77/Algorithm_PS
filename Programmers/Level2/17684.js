const arr = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
]
function solution(msg) {
	let curStr = ""
	const answer = []
	for (let i = 0; i < msg.length; i++) {
		curStr = ""
		for (let j = i; j < msg.length; j++) {
			curStr += msg[j]
			nextStr = curStr + msg[j + 1]
			if (arr.includes(curStr) && !arr.includes(nextStr)) {
				answer.push(arr.indexOf(curStr) + 1)
				arr.push(nextStr)
				if (nextStr.length > 2) {
					i += nextStr.length - 2
				}
				break
			}
		}
	}
	return answer
}

// 다른 풀이
function solution(msg) {
	const array = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	]
	let stack = []
	const result = []
	for (let i = 0; i < msg.length; i++) {
		stack.push(msg[i])
		if (array.includes(stack.join(""))) continue
		array.push(stack.join(""))
		stack.pop()
		const index = array.indexOf(stack.join("")) + 1
		result.push(index)
		stack = []
		i--
	}
	const index = array.indexOf(stack.join("")) + 1
	result.push(index)
	return result
}

console.log(solution("ABABABABABABABAB"))
