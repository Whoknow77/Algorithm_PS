// function solution(n) {
//   if (n === 0) {
//     return;
//   }
//   solution(n - 1);
//   console.log(n);
// }

let answer = []
const solution = (n) => {
	if (n > 1) {
		solution(n - 1)
	}
	answer.push(n)
}
solution(3)
console.log(answer.join(" "))
