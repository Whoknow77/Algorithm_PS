const calc = (str) => {
	const startIdx = [...str]
		.map((item) => !isNaN(item) && item !== " ")
		.indexOf(true)
	let endIdx = startIdx
	for (let i = startIdx; i < str.length; i++) {
		if (!isNaN(str[i]) && str[i] !== " ") {
			endIdx += 1
		}
	}
	return [
		str.slice(0, startIdx).toLowerCase(),
		Number(str.slice(startIdx, endIdx)),
	]
}
function solution(files) {
	return files.sort((a, b) => {
		const [postStr, postNumber] = calc(a)
		const [nextStr, nextNumber] = calc(b)
		if (postStr < nextStr) {
			return -1
		} else if (postStr > nextStr) {
			return 1
		} else {
			if (postNumber < nextNumber) {
				return -1
			} else if (postNumber >= nextNumber) {
				return 1
			}
		}
	})
}
console.log(solution(["F-15", "foo9.txt", "foo0010.txt", "foo010bar020.zip"]))
