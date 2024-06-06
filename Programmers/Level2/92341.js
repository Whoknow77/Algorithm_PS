function solution(fees, records) {
	const [standard_minute, standard_cost, more_minute, more_cost] = fees
	const map = new Map()
	let answer = []
	for (let i = 0; i < records.length; i++) {
		const [time, car_num, flag] = records[i].split(" ")
		if (flag === "IN") {
			if (map.get(car_num)) {
				map.set(car_num, [...map.get(car_num), time])
			} else {
				map.set(car_num, [time])
			}
		} else if (flag === "OUT") {
			map.set(car_num, [...map.get(car_num), time])
		}
	}

	for (const [key, value] of map) {
		if (value.length % 2 === 1) {
			map.set(key, [...value, "23:59"])
		}
	}

	for (const [key, value] of map) {
		let real_total = 0
		for (let i = 0; i < value.length; i += 2) {
			const [start_hour, start_minute, end_hour, end_minute] = [
				value[i].substring(0, 2),
				value[i].substring(3, 5),
				value[i + 1].substring(0, 2),
				value[i + 1].substring(3, 5),
			]
			let sum_hour = (Number(end_hour) - Number(start_hour)) * 60
			let sum_minute = 0
			if (end_minute - start_minute >= 0) {
				sum_minute = end_minute - start_minute
			} else {
				sum_hour -= start_minute - end_minute
			}
			real_total += sum_hour + sum_minute
		}
		if (real_total > standard_minute) {
			answer.push([
				key,
				standard_cost +
					Math.ceil((real_total - standard_minute) / more_minute) * more_cost,
			])
		} else {
			answer.push([key, standard_cost])
		}
	}

	answer = answer.sort((a, b) => a[0] - b[0]).map((item) => item[1])
	return answer
}

console.log(
	solution(
		[180, 5000, 10, 600],
		[
			"05:34 5961 IN",
			"06:00 0000 IN",
			"06:34 0000 OUT",
			"07:59 5961 OUT",
			"07:59 0148 IN",
			"18:59 0000 IN",
			"19:09 0148 OUT",
			"22:59 5961 IN",
			"23:00 5961 OUT",
		]
	)
)
