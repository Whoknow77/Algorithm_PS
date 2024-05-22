// function solution(s) {
//   let numArray = [];
//   const set = [...new Set(s)];
//   for (let i = 0; i < set.length; i++) {
//     numArray.push(s.lastIndexOf(set[i]) - s.indexOf(set[i]) + 1);
//   }
//   for (let i = 0; i < set.length; i++) {
//     set[i] += numArray[i];
//   }
//   return set.join("").replace(/1/g, "");
// }

// // 정답
// function solution(s) {
//   let answer = "";
//   let cnt = 1;
//   s = s + " ";
//   for (let i = 0; i < s.length - 1; i++) {
//     if (s[i] === s[i + 1]) {
//       cnt++;
//     } else {
//       answer += s[i];
//       if (cnt > 1) {
//         answer += cnt;
//         cnt = 1;
//       }
//     }
//   }
//   return answer;
// }

// let str = "KKHSSSSSSSE";
// console.log(solution(str));

const str = "KKHSSSSSSSE"

const solution = (str) => {
	const hash = new Map()

	for (let i = 0; i < str.length; i++) {
		if (hash.get(str[i])) {
			hash.set(str[i], hash.get(str[i]) + 1)
		} else {
			hash.set(str[i], 1)
		}
	}
	answer = ""
	for (let [key, value] of hash) {
		if (key) {
			if (value == 1) {
				answer += key
			} else {
				answer += key + value
			}
		}
	}
	return answer
}
console.log(solution(str))
