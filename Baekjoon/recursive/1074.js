const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, r, c] = input[0].split(" ").map(Number);

function recursive(n, r, c) {
	// 요소 하나를 바라볼때
	if (n === 0) {
		return 0;
	}
	// 사등분한 한 변의 길이
	let half = 2 ** (n - 1);
	// 1사분면
	if (r < half && c < half) {
		return recursive(n - 1, r, c);
	}
	// 2사분면
	if (r < half && c >= half) {
		return half * half + recursive(n - 1, r, c - half);
	}
	// 3사분면
	if (r >= half && c < half) {
		return 2 * half * half + recursive(n - 1, r - half, c);
	}
	// 4사분면
	return 3 * half * half + recursive(n - 1, r - half, c - half);
}

console.log(recursive(N, r, c));

// 2^N의 배열에서 r행 c열을 몇 번째로 방문했는지 출력

// N=1, 네 방햫으로 방문 가능하다.
// N=n-1일때, 계산 가능하면 2^N+1도 계산 가능하다.
// 1, 2, 3,4, 5, ...-> 목표하는 n도 가능하다.
