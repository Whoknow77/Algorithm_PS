function solution(numbers) {
	const answer = numbers
		.map((numbers) => String(numbers))
		.sort((a, b) => {
			// 문자열로 바꿔서 대소비교시 앞자리 먼저 계산하고 그다음 숫자계산
			return b + a - (a + b)
		})

	//0인 경우는 제외해야 하니 삼항연산자 사용
	return answer[0] === "0" ? "0" : answer
}

console.log(solution([3, 30, 34, 5, 9]))
