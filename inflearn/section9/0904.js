// function solution() {
// 	let answer = ""
// 	let queue = []
// 	queue.push(1)
// 	while (queue.length) {
// 		console.log(queue)
// 		let v = queue.shift()
// 		answer += v + " "
// 		for (let nv of [v * 2, v * 2 + 1]) {
// 			if (nv > 7) continue
// 			queue.push(nv)
// 		}
// 	}
// 	return answer
// }

const solution = () => {
	const bfs = (x) => {
		const queue = [x]
		while (queue.length) {
			const cur = queue.shift()
			console.log(cur)
			if (cur === 7) {
				break
			}
			for (const next of [cur * 2, cur * 2 + 1]) {
				queue.push(next)
			}
		}
	}
	bfs(1)
}
solution()
