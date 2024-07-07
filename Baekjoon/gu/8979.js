const solution = (arr) => {
	let index = 0
	const map = new Map()

	const commit = () => {
		const curIdx = map.get("cur")
		const target = map.get(curIdx)
		map.set(curIdx, {
			...target,
			commit: target.commit + 1,
		})
	}

	const branch = () => {
		index += 1
		map.set(index, {
			name: "branch",
			index: index,
			commit: 0,
		})
		checkout(index)
	}

	const init = () => {
		map.clear()
		map.set(0, {
			name: "main",
			index: 0,
			commit: 0,
		})
		index = 0
		checkout(0)
	}

	const checkout = (N) => {
		if (map.has(N)) {
			map.set("cur", N)
		} else {
			map.set("cur", 0)
		}
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === "init") {
			init()
			continue
		}
		if (arr[i] === "commit") {
			commit()
			continue
		}
		if (arr[i] === "branch") {
			branch()
			continue
		} else {
			const [_, num] = arr[i].split(" ")
			checkout(Number(num))
		}
	}
	map.delete("cur")
	for (const [key, value] of map) {
		console.log(`${value.name}${key}-${value.commit}`)
	}
}

solution([
	"init",
	"branch",
	"commit",
	"checkout 0",
	"branch",
	"commit",
	"commit",
])
