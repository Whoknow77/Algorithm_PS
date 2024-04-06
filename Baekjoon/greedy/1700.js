const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, k] = input[0].split(" ").map(Number);

const arr = input[1].split(" ").map(Number);
const stack = [];
let count = 0;
const rank = [];
for (let i = 0; i < k; i++) {
	// 꽂혀있지 않으면서 자리가 남는 경우
	if (!stack.includes(arr[i])) {
		if (stack.length < n) {
			stack.push(arr[i]);
		}
		// 자리가 남지 않는 경우(뽑아야할때)
		else {
			for (let j = 0; j < stack.length; j++) {
				const targetIndex = arr.slice(i + 1).indexOf(stack[j]);
				rank[j] = targetIndex;
			}

			if (rank.includes(-1)) {
				// -1 인덱스를 없애기
				const idx = rank.indexOf(-1);
				stack.splice(idx, 1);
			} else {
				//가장 큰 양수 인덱스를 없애기
				const max = rank.indexOf(Math.max(...rank));
				stack.splice(max, 1);
			}
			stack.push(arr[i]);
			count++;
		}
	}
}
console.log(count);

// 3 2 1 2 1 2 1 2 1  3 3 3 3 3 3
// 3
// 3 2
// 1 2 g
//
