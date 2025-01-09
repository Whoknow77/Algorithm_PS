// const fs = require("fs")
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
// const input = fs.readFileSync(filePath).toString().trim().split("\n")

// // 투 포인터

// // 초기 인덱스 - left:0, right:검색단어 길이 -1
// // 검색단어를 만날때까지 left,right를 각각 +1
// // 검색단어를 만난 경우: 카운트+1하고, left+=검색단어의 길이, right+=검색단어의 길이

// const word = input.shift().trim()
// const searchWord = input.shift().trim()

// let answer = 0
// let left = 0
// let right = searchWord.length - 1
// let curStr = searchWord.slice(left, right + 1)
// while (left <= word.length - searchWord.length && right < word.length) {
// 	curStr = word.slice(left, right + 1)
// 	if (curStr === searchWord) {
// 		answer += 1
// 		left += searchWord.length
// 		right += searchWord.length
// 	} else {
// 		left += 1
// 		right += 1
// 	}
// }

// console.log(answer)

// 다른 룰이(split함수의 작동 방식이 사실상 개수세는 로직이랑 거의 똑같다)

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const word = input.shift().trim()
const searchWord = input.shift().trim()
console.log(word.split(searchWord).length - 1)
