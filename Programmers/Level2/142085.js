// 최대 힙
class MaxHeap {
	constructor() {
		this.heap = [0]
	}

	// 삭제과정에서 부모가 자식보다 작은 경우 교체
	isSmallerThanChildren(idx) {
		// 자식이 존재하는지
		if (this.heap[2 * idx]) {
			return (
				this.heap[idx] < this.heap[2 * idx] ||
				this.heap[idx] < this.heap[2 * idx + 1]
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

		while (currentIdx > 1 && this.heap[currentIdx] > this.heap[parentIdx]) {
			this.swapValue(currentIdx, parentIdx)
			currentIdx = parentIdx
			parentIdx = Math.floor(currentIdx / 2)
		}
	}

	sum() {
		return this.heap.reduce((a, b) => a + b, 0)
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
			while (this.isSmallerThanChildren(currentIdx)) {
				if (this.heap[2 * currentIdx + 1] > this.heap[2 * currentIdx]) {
					// 오른쪽 자식이 존재하고, 오른쪽 자식이 왼쪽 자식보다 큰 경우
					if (this.heap[2 * currentIdx + 1] > this.heap[currentIdx]) {
						this.swapValue(2 * currentIdx + 1, currentIdx)
						currentIdx = 2 * currentIdx + 1
					}
				} else {
					// 왼쪽 자식이 부모보다 큰 경우
					if (this.heap[2 * currentIdx] > this.heap[currentIdx]) {
						this.swapValue(2 * currentIdx, currentIdx)
						currentIdx = 2 * currentIdx
					}
				}
			}
			return removedVal
		} else return null
	}
}

function solution(n, k, enemy) {
	const heap = new MaxHeap()
	let count = 0
	for (let i = 0; i < enemy.length; i++) {
		heap.insert(enemy[i])
		n -= enemy[i]
		if (n < 0) {
			// 무적권 사용
			if (k === 0) {
				return count
			}
			const ticket = heap.remove()
			n += ticket
			k -= 1
		}
		count += 1
	}
	return count
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]))

// 4 2 4 5 3 3 1
// 3 1 2 1 2
// 0 0 1 2 3
