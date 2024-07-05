// 균형 괄호
const isBalance = (str) => {
	let open = 0
	let close = 0
	for (let i = 0; i < str.length; i++) {
		if (str[i] === "(") {
			open += 1
		} else {
			close += 1
		}
	}
	return open === close
}

const isAll = (str) => {
	const stack = []
	for (let i = 0; i < str.length; i++) {
		if (str[i] === "(") {
			stack.push(str[i])
		} else {
			if (stack.length === 0) {
				return false
			} else {
				stack.pop()
			}
		}
	}
	return stack.length === 0
}

const isReverse = (arr) => {
	return arr.map((item) => {
		if (item === "(") {
			return ")"
		} else {
			return "("
		}
	})
}

function solution(p) {
	// 빈 문자열
	if (p.length === 0) {
		return ""
	}
	// 올바른 괄호 문자열
	if (isAll(p)) {
		return p
	} else {
		// u와 v로 분리
		for (let i = 0; i <= p.length; i++) {
			const left = p.slice(0, i + 1)
			if (isBalance(left)) {
				let u = left
				const v = p.slice(i + 1)
				// u가 올바른
				if (isAll(u)) {
					return u + solution(v)
				}
				// u가 균형
				else {
					let str = "("
					str += solution(v)
					str += ")"
					const uArr = u.split("")
					uArr.shift()
					uArr.pop()
					u = isReverse(uArr).join("")
					return str + u
				}
			}
		}
	}
}

console.log(solution(")("))
