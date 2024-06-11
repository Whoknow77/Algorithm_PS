class MinHeap {
	constructor() {
		this.heap = [0]
	}

	// 삭제과정에서 부모가 자식보다 큰 경우 교체
	isBiggerThanChildren(idx) {
		// 자식이 존재하는지
		if (this.heap[2 * idx]) {
			return (
				this.heap[idx] > this.heap[2 * idx] ||
				this.heap[idx] > this.heap[2 * idx + 1]
			)
		} else {
			return false
		}
	}

	swapValue(idx1, idx2) {
		;[this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
	}

	insert(value) {
		this.heap.push(value)

		let currentIdx = this.heap.length - 1
		let parentIdx = Math.floor(currentIdx / 2)

		while (currentIdx > 1 && this.heap[currentIdx] < this.heap[parentIdx]) {
			this.swapValue(currentIdx, parentIdx)
			currentIdx = parentIdx
			parentIdx = Math.floor(currentIdx / 2)
		}
	}

	size() {
		return this.heap.length - 1
	}

	sum() {
		return this.heap.reduce((a, b) => a + b, BigInt(0))
	}

	remove() {
		// 최소 하나는 있는 경우 [0, value]인 경우
		if (this.heap.length > 1) {
			// [0, value] 인 경우 value 리턴
			if (this.heap.length === 2) return this.heap.pop()

			let removedVal = this.heap[1]
			this.heap[1] = this.heap.pop()
			let currentIdx = 1

			// 우선 자식들이 부모보다 작은 경우
			while (this.isBiggerThanChildren(currentIdx)) {
				if (this.heap[2 * currentIdx + 1] < this.heap[2 * currentIdx]) {
					// 오른쪽 자식이 존재하고, 오른쪽 자식이 왼쪽 자식보다 작은 경우
					if (this.heap[2 * currentIdx + 1] < this.heap[currentIdx]) {
						this.swapValue(2 * currentIdx + 1, currentIdx)
						currentIdx = 2 * currentIdx + 1
					}
				} else {
					// 왼쪽 자식이 부모보다 작은 경우
					if (this.heap[2 * currentIdx] < this.heap[currentIdx]) {
						this.swapValue(2 * currentIdx, currentIdx)
						currentIdx = 2 * currentIdx
					}
				}
			}

			return removedVal
		} else return null
	}
}

function solution(scoville, K) {
	const heap = new MinHeap()
	let scovileCount = 0
	let answer = 0
	scoville.forEach((item) => {
		heap.insert(item)
		if (item >= K) {
			scovileCount += 1
		}
	})
	while (scovileCount < heap.size()) {
		if (heap.size() === 1) {
			return -1
		}
		const min = heap.remove()
		const min2 = heap.remove()
		const newItem = min + min2 * 2
		heap.insert(newItem)
		if (newItem >= K) {
			scovileCount += 1
		}
		answer += 1
	}
	return answer
}

// 다른 풀이
function solution2(scoville, K) {
	let count = 0
	const heap = new MinHeap()
	scoville.forEach((el) => heap.heappush(el))

	while (heap.heap[0] < K && heap.size() > 1) {
		count++
		heap.heappush(heap.heappop() + heap.heappop() * 2)
	}
	return heap.heap[0] >= K ? count : -1
}

console.log(solution2([1, 2, 2, 2, 3], 7))
