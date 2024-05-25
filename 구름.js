// const readline = require("readline")

// ;(async () => {
// 	let rl = readline.createInterface({input: process.stdin})
// 	let N = null
// 	const arr = []
// 	const visited = []
// 	for await (const line of rl) {
// 		if (!line) {
// 			rl.close()
// 		}
// 		if (!N) {
// 			N = +line
// 		} else {
// 			arr.push(line.split(" ").map((el) => +el))
// 		}
// 	}

// 	const Solution = (N, arr) => {
// 		console.log(visited)
// 	}

// 	Solution(N, arr)

// 	process.exit()
// })()
const charTonum = {
	a: 0,
	b: 1,
	c: 2,
	d: 3,
	e: 4,
	f: 5,
	g: 6,
	h: 7,
	i: 8,
	j: 9,
	k: 10,
	l: 11,
	m: 12,
	n: 13,
	o: 14,
	p: 15,
	q: 16,
	r: 17,
	s: 18,
	t: 19,
	u: 20,
	v: 21,
	w: 22,
	x: 23,
	y: 24,
	z: 25,
}

const numTochar = {
	0: "a",
	1: "b",
	2: "c",
	3: "d",
	4: "e",
	5: "f",
	6: "g",
	7: "h",
	8: "i",
	9: "j",
	10: "k",
	11: "l",
	12: "m",
	13: "n",
	14: "o",
	15: "p",
	16: "q",
	17: "r",
	18: "s",
	19: "t",
	20: "u",
	21: "v",
	22: "w",
	23: "x",
	24: "y",
	25: "z",
}
const solution = (serve, str1, num, str2) => {
	if (serve === "encrypt") {
		const str_list1 = []
		const str_list2 = []
		const sum = []
		let answer = ""
		for (let i = 0; i < str1.length; i++) {
			str_list2.push(charTonum[str2[i]])
			str_list1.push(charTonum[str1[i]])
		}
		for (let i = 0; i < str_list1.length; i++) {
			if (str_list1[i] + str_list2[i] > 25) {
				sum.push((str_list1[i] + str_list2[i] - 1) % 25)
			} else {
				sum.push(str_list1[i] + str_list2[i])
			}
		}
		for (let i = 0; i < num; i++) {
			sum.push(sum.shift())
		}
		for (let i = 0; i < sum.length; i++) {
			answer += numTochar[sum[i]]
		}
		console.log(answer)
	} else if (serve === "decrypt") {
		const str_list1 = []
		const target = []
		let answer = ""
		for (let i = 0; i < str1.length; i++) {
			str_list1.push(charTonum[str1[i]])
		}
		for (let i = 0; i < str2.length; i++) {
			target.push(charTonum[str2[i]])
		}
		for (let i = 0; i < num; i++) {
			target.unshift(target.pop())
		}
		for (let i = 0; i < target.length; i++) {
			if (target[i] < str_list1[i]) {
				target[i] = target[i] + 26 - str_list1[i]
			} else {
				target[i] -= str_list1[i]
			}
		}
		for (let i = 0; i < target.length; i++) {
			answer += numTochar[target[i]]
		}
		console.log(answer)
	}
}

solution("decrypt", "secretword", 3, "cspkfcgzin")
