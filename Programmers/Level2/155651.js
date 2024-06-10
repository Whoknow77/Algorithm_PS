function solution(book_time) {
	book_time.sort((t1, t2) => {
		if (
			Number(t1[0].split(":").join("")) === Number(t2[0].split(":").join(""))
		) {
			return (
				Number(t1[1].split(":").join("")) - Number(t2[1].split(":").join(""))
			)
		} else {
			return (
				Number(t1[0].split(":").join("")) - Number(t2[0].split(":").join(""))
			)
		}
	})
	const map = new Map()
	let count = 0
	for (const [t1, t2] of book_time) {
		if (map.size === 0) {
			map.set(count + 1, [t1, t2])
			count += 1
		} else {
			const [cur_start_hour, cur_start_minute] = t1.split(":")
			let flag = false
			for (let [room, [_, prev_end]] of map) {
				// 이어서 입장 가능한 경우
				const [prev_hour, prev_minute] = prev_end.split(":")
				const prev_time = Number(prev_hour) * 60 + Number(prev_minute) + 10
				const cur_time = Number(cur_start_hour) * 60 + Number(cur_start_minute)
				if (prev_time <= cur_time) {
					map.set(room, [t1, t2])
					flag = true
					continue
				}
			}
			// 방이 하나 더 필요한 경우
			if (flag === false) {
				map.set(count + 1, [t1, t2])
				count += 1
			}
		}
	}
	return count
}

// 다른 풀이

function solution(book_time) {
	let room = []

	book_time = book_time.map((item) => {
		return item.map(
			(el) => Number(el.split(":")[0]) * 60 + Number(el.split(":")[1])
		)
	})

	book_time.sort((a, b) => a[0] - b[0])
	room.push(book_time[0])

	for (i = 1; i < book_time.length; i++) {
		let room_add_flag = true
		for (j = 0; j < room.length; j++) {
			if (room[j][1] + 10 <= book_time[i][0]) {
				room[j] = book_time[i]
				room_add_flag = false
				break
			}
		}

		if (room_add_flag) {
			room.push(book_time[i])
		}
	}

	return room.length
}

console.log(
	solution([
		["15:00", "17:00"],
		["16:40", "18:20"],
		["14:20", "15:20"],
		["14:10", "19:55"],
		["18:20", "21:20"],
	])
)
