// function solution(n, wires) {
// 	let min_answer = Number.MAX_SAFE_INTEGER // 차이 개수
// 	for (let i = 0; i < n - 1; i++) {
// 		const arr = Array.from(Array(n + 1), () => [])
// 		const visited = Array(n + 1).fill(0)
// 		const newWires = [...wires.slice(0, i), ...wires.slice(i + 1, n)]
// 		for (let i = 0; i < newWires.length; i++) {
// 			const start = newWires[i][0]
// 			const end = newWires[i][1]
// 			arr[start].push(end)
// 			arr[end].push(start)
// 		}
// 		const bfs = (x) => {
// 			let count = 1
// 			const queue = [x]
// 			while (queue.length > 0) {
// 				const cur = queue.shift()
// 				for (const next of arr[cur]) {
// 					if (visited[next] === 0) {
// 						queue.push(next)
// 						count += 1
// 						visited[next] = 1
// 					}
// 				}
// 			}
// 			return count
// 		}
// 		for (let i = 1; i <= n; i++) {
// 			if (visited[i] === 0) {
// 				visited[i] = 1
// 				const count_value = bfs(i)
// 				min_answer = Math.min(
// 					min_answer,
// 					Math.abs(count_value - (n - count_value))
// 				)
// 			}
// 		}
// 	}

// 	return min_answer
// }

function solution(n, wires) {
	let min_answer = Number.MAX_SAFE_INTEGER // 차이 개수
	for (let i = 0; i < n - 1; i++) {
		const arr = Array.from(Array(n + 1), () => [])
		const visited = Array(n + 1).fill(0)
		const newWires = [...wires.slice(0, i), ...wires.slice(i + 1, n)]
		for (let i = 0; i < newWires.length; i++) {
			const start = newWires[i][0]
			const end = newWires[i][1]
			arr[start].push(end)
			arr[end].push(start)
		}
		const dfs = (x) => {
			visited[x] = 1
			for (const next of arr[x]) {
				if (!visited[next]) {
					dfs(next)
				}
			}
		}

		dfs(1)
		let count = 0
		for (let i = 1; i <= n; i++) {
			if (visited[i] === 1) {
				count += 1
			}
		}
		min_answer = Math.min(min_answer, Math.abs(count - (n - count)))
	}

	return min_answer
}

console.log(
	solution(9, [
		[1, 3],
		[2, 3],
		[3, 4],
		[4, 5],
		[4, 6],
		[4, 7],
		[7, 8],
		[7, 9],
	])
)
