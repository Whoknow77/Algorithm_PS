function solution(sequence, k) {
	let right = 0;
	const n = sequence.length;
	let sum = sequence[0];
	const answer = [];
	for (let left = 0; left < n; left++) {
		while (right < n && sum < k) {
			right++;
			sum += sequence[right];
		}

		if (sum === k) {
			answer.push([left, right]);
		}

		sum -= sequence[left];
	}
	return answer.sort((a, b) => a[1] - a[0] - b[1] - b[0])[0];
}
console.log(solution([1, 1, 1, 2, 3, 4, 5], 5));
