function solution(N, road, K) {
	const maps = {}
	for (let i = 1; i <= N; i++) {
		maps[i] = []
	}

	for (let arr of road) {
		const [a, b, cost] = arr
		maps[a].push([b, cost])
		maps[b].push([a, cost])
	}

	const visit = new Array(N + 1).fill(987654321)

	function bfs() {
		const q = []
		q.push(1)
		visit[1] = 0

		while (q.length > 0) {
			const out = q.shift()
			for (const lst of maps[out]) {
				const node = lst[0],
					dist = lst[1]
				if (visit[node] > visit[out] + dist) {
					visit[node] = visit[out] + dist
					q.push(node)
				}
			}
		}
	}

	bfs()

	return visit.filter((item) => item <= K).length
}
