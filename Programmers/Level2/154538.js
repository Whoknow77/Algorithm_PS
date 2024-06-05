function solution(x, y, n) {
	const visited = Array(1000001).fill(0)
	visited[y] = 1
	const bfs = (start) => {
		const queue = [[start, 0]]
		while (queue.length > 0) {
			console.log(queue)
			const [cur, count] = queue.shift()
			if (cur === x) {
				return count
			} else {
				const target1 = cur / 3
				const target2 = cur / 2
				const target3 = cur - n
				if (target1 === x || target2 === x || target3 === x) {
					return count + 1
				}
				if (target1 >= x && visited[target1] === 0) {
					queue.push([target1, count + 1])
					visited[target1] = 1
				}
				if (target2 >= x && visited[target2] === 0) {
					queue.push([target2, count + 1])
					visited[target2] = 1
				}

				if (target3 >= x && visited[target3] === 0) {
					queue.push([target3, count + 1])
					visited[target3] = 1
				}
			}
		}
		return -1
	}

	const answer = bfs(y)
	return answer
}

console.log(solution(10, 100, 5))
// 15 20 30
