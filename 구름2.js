const getGcd = (x, y) => {
	if (x % y === 0) {
		return y
	}
	return getGcd(y, x % y)
}

const input = "[1, -2] * [2, 3]"
const serve_idx = input.match(/] /).index + 2
const serve = input[serve_idx]
let left = input.slice(0, serve_idx - 1)
let right = input.slice(serve_idx + 2, input.length)

left = left.replace("[", "")
left = left.replace("]", "")
let [left_top, left_bottom] = left.split(",")
left_top = left_top.trim()
left_bottom = left_bottom.trim()

right = right.replace("[", "")
right = right.replace("]", "")
let [right_top, right_bottom] = right.split(",")
right_top = right_top.trim()
right_bottom = right_bottom.trim()
if (serve === "+") {
	let sum_bottom = Math.abs(right_bottom * left_bottom)
	let sum_top
	if (
		(left_bottom < 0 && right_top < 0) ||
		(left_top < 0 && right_bottom < 0)
	) {
		sum_top = -(
			Math.abs(left_bottom * right_top) + Math.abs(left_top * right_bottom)
		)
	} else if (
		(left_top < 0 && right_bottom > 0) ||
		(left_top > 0 && right_bottom < 0)
	) {
		sum_top = -(left_bottom * right_top + left_top * right_bottom)
	} else {
		sum_top = left_bottom * right_top + left_top * right_bottom
	}
	if (sum_bottom === 0) {
		console.log("ERR")
		return
	}
	const gcd = Math.abs(getGcd(sum_top, sum_bottom))
	answer_top = sum_top / gcd
	answer_bottom = sum_bottom / gcd
	if (answer_bottom === 0) {
		console.log("ERR")
		return
	}
	if (answer_top % answer_bottom === 0) {
		console.log(answer_top % answer_bottom)
	} else {
		console.log(`[${answer_top},${answer_bottom}]`)
	}
} else if (serve === "-") {
} else if (serve === "*") {
	let sum_top = right_top * left_top
	let sum_bottom = right_bottom * left_bottom
	if (sum_bottom === 0) {
		console.log("ERR")
		return
	}
	if (sum_top < 0 && sum_bottom < 0) {
		sum_top = -sum_top
		sum_bottom = -sum_bottom
	}
	const gcd = Math.abs(getGcd(sum_top, sum_bottom))
	answer_top = sum_top / gcd
	answer_bottom = sum_bottom / gcd
	if (answer_bottom === 0) {
		console.log("ERR")
		return
	}
	if (answer_top % answer_bottom === 0) {
		console.log(answer_top % answer_bottom)
	} else {
		console.log(`[${answer_top},${answer_bottom}]`)
	}
} else if (serve === "/") {
}
