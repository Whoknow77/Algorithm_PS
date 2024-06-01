// 현재 uuid에 대한 name을 계속 갱신하자
function solution(record) {
	const map = new Map() // uuid: {name, message}
	let order = []
	for (const item of record) {
		const [flag, uuid, name] = item.split(" ")
		// 닉네임을 바꿔서 들어올 수 있음
		if (flag === "Enter") {
			if (map.get(uuid)) {
				map.set(uuid, {
					name,
					message: [...map.get(uuid).message, "come"],
				})
			} else {
				// 처음 입장한 경우
				map.set(uuid, {
					name,
					message: ["come"],
				})
			}
			order.push(uuid)
		} else if (flag === "Leave") {
			order.push(uuid)
			map.set(uuid, {
				...map.get(uuid),
				message: [...map.get(uuid).message, "leave"],
			})
		} else if (flag === "Change") {
			map.set(uuid, {
				...map.get(uuid),
				name,
			})
		}
	}
	let idx = 0
	order = order.reverse()
	const answer = []
	while (order.length > 0) {
		const cur = order.pop()
		const m = map.get(cur).message.shift()
		if (m === "come") {
			answer.push(`${map.get(cur).name}님이 들어왔습니다.`)
		} else if (m === "leave") {
			answer.push(`${map.get(cur).name}님이 나갔습니다.`)
		}
		idx += 1
	}
	return answer
}
//  더 좋은 답

function solution(record) {
	const answer = []
	const userInfo = {}
	//userInfo를 {} 객체로 생성하여 이름과 값 쌍을로 구성

	for (let i = 0; i < record.length; i++) {
		const [command, uid, nickname] = record[i].split(" ")
		//배열을 구조 분해 하여 요소를 각각 개별적인 변수로 접근

		if (command === "Enter") {
			userInfo[uid] = nickname
			answer.push(`${uid}님이 들어왔습니다.`)
		} else if (command === "Leave") {
			answer.push(`${uid}님이 나갔습니다.`)
		} else if (command === "Change") {
			userInfo[uid] = nickname
		}
	}

	// answer 배열에 있는 메시지 중 유저 아이디를 최신 닉네임으로 변경
	for (let i = 0; i < answer.length; i++) {
		const uid = answer[i].split("님이")[0]
		answer[i] = answer[i].replace(uid, userInfo[uid])
	}

	return answer
}

console.log(
	solution([
		"Enter uid1234 Muzi",
		"Enter uid4567 Prodo",
		"Leave uid1234",
		"Enter uid1234 Prodo",
		"Change uid4567 Ryan",
	])
)
