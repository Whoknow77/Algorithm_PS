function solution(str1, str2) {
	str1 = str1.toLowerCase()
	str2 = str2.toLowerCase()
	const map = new Map()
	const str1Map = new Map()
	const str2Map = new Map()
	for (let i = 0; i < str1.length - 1; i++) {
		const target = (str1[i] + str1[i + 1]).replace(" ", "")
		if (/^[a-z]+$/g.test(target) && target.length === 2) {
			if (str1Map.get(target)) {
				str1Map.set(target, str1Map.get(target) + 1)
			} else {
				str1Map.set(target, 1)
			}
		}
	}
	for (let i = 0; i < str2.length - 1; i++) {
		const target2 = (str2[i] + str2[i + 1]).replace(" ", "")
		if (/^[a-z]+$/g.test(target2) && target2.length === 2) {
			if (str2Map.get(target2)) {
				str2Map.set(target2, str2Map.get(target2) + 1)
			} else {
				str2Map.set(target2, 1)
			}
		}
	}

	if (str1Map.size === 0 && str2Map.size === 0) {
		return 65536
	}
	let sumSet = 0
	let crossSet = 0
	const set = new Set()
	for (const [key, value] of [...str1Map, ...str2Map]) {
		set.add(key)
	}
	for (const key of [...set]) {
		const left = str1Map.get(key) || 0
		const right = str2Map.get(key) || 0
		if (left < right) {
			sumSet += right
			crossSet += left
		} else if (left >= right) {
			sumSet += left
			crossSet += right
		}
	}

	return parseInt(parseFloat(crossSet / sumSet) * 65536)
}

console.log(solution("handshake", "shake hands"))
