function solution(plans) {
	const queue = plans
		.map((plan) => {
			const [name, time, spend] = plan
			const [hour, minute] = time.split(":")
			const convertedTime = Number(hour) * 60 + Number(minute)

			return [name, convertedTime, Number(spend)]
		})
		.sort((a, b) => a[1] - b[1])

	const result = []
	const first = queue.shift()
	let curTime = first[1]

	const stack = [first]

	while (queue.length) {
		const target = queue.shift()
		const [_name, time, _spend] = target
		let timeDiff = time - curTime
		curTime = time

		// 시간차가 0일때 까지 중단과제를 스택에서 게속 빼서 완료하거나 새 과제 할당
		while (stack.length && timeDiff > 0) {
			const latestPlan = stack.pop()
			const [lName, _lTime, lSpend] = latestPlan

			if (lSpend <= timeDiff) {
				// 중단 과제 완료 가능
				result.push(lName)
				timeDiff -= lSpend
			} else {
				// 중단 과제 완료 불가능, 중단과제 시간 업데이트
				latestPlan[2] = lSpend - timeDiff
				timeDiff = 0
				stack.push(latestPlan)
			}
		}

		// 중단 과제가 없는 경우
		stack.push(target)
	}

	while (stack.length) {
		result.push(stack.pop()[0])
	}

	return result
}

console.log(
	solution(
		[
			["music", "12:20", "20"],
			["computer", "12:30", "15"],
			["science", "12:50", "20"],
			["history", "14:00", "30"],
		],
		["science", "history", "computer", "music"][("korean", "english", "math")]
	)
)
