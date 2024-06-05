function solution(x, y, n) {
	const visited = Array(1000001).fill(0)
	visited[x] = 1
	const bfs = (start) => {
		const queue = [[start, 0]]
		while (queue.length > 0) {
			console.log(queue)
			const [cur, count] = queue.shift()
			if (cur > y) {
				return -1
			}
			if (cur === y) {
				return count
			} else {
				if (cur * 3 === y || cur * 2 === y || cur + n === y) {
					return count + 1
				}
				if (cur * 3 <= y && visited[cur * 3] === 0) {
					queue.push([cur * 3, count + 1])
					visited[cur * 3] = 1
				}
				if (cur * 2 <= y && visited[cur * 2] === 0) {
					queue.push([cur * 2, count + 1])
					visited[cur * 2] = 1
				}

				if (cur + n <= y && visited[cur + n] === 0) {
					queue.push([cur + n, count + 1])
					visited[cur + n] = 1
				}
			}
		}
		return -1
	}

	const answer = bfs(x)
	return answer
}

console.log(solution(10, 100, 5))
// 15 20 30
