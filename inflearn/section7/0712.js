// 가장 가까운 말 사이의 거리를 lt~rt사이의 mid로 두고 탐색
// 앞에서부터 말을 마굿간에 배치하는데 전에 배치한 마굿간 사이의 거리가 mid보다 반드시 크거나 같아야 한다.

// function count(stable, dist) {
//   let cnt = 1,
//     ep = stable[0]; // 첫번째 말은 무조건 처음에 넣는게 최선
//   for (let i = 1; i < stable.length; i++) {
//     if (stable[i] - ep >= dist) {
//       cnt++;
//       ep = stable[i];
//     }
//   }
//   return cnt;
// }

// function solution(c, stable) {
//   let answer;
//   stable.sort((a, b) => a - b);
//   let lt = stable[1] - stable[0]; // 최소 거리
//   let rt = stable[stable.length - 1] - stable[0]; // 최대 거리
//   while (lt <= rt) {
//     let mid = parseInt((lt + rt) / 2);
//     if (count(stable, mid) >= c) {
//       answer = mid;
//       lt = mid + 1;
//     } else {
//       rt = mid - 1;
//     }
//   }
//   return answer;
// }

const count = (arr, target) => {
	let count = 1
	let last = arr[0]
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] - last >= target) {
			count += 1
			last = arr[i]
		}
	}
	return count
}

const solution = (n, arr) => {
	arr.sort((a, b) => a - b)
	let left = arr[1] - arr[0] // 최소 거리
	let right = arr[arr.length - 1] - arr[0] // 최대 거리
	let answer
	while (left <= right) {
		mid = parseInt((left + right) / 2)
		if (count(arr, mid) < n) {
			right = mid - 1
		} else {
			answer = mid
			left = mid + 1
		}
	}
	return answer
}

// 1 2 4 8 9

let arr = [1, 2, 8, 4, 9]
console.log(solution(3, arr))
