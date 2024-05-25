// function solution(target, arr) {
//   let start = 0;
//   let end = arr.length - 1;
//   let mid;
//   arr.sort((a, b) => a - b);

//   while (start <= end) {
//     mid = parseInt((start + end) / 2);

//     if (target < arr[mid]) {
//       end = mid - 1;
//     } else if (target > arr[mid]) {
//       start = mid + 1;
//     } else {
//       return mid;
//     }
//   }
//   return -1;
// }

const solution = (target, arr) => {
	let start = 0
	let end = arr.length - 1
	let mid
	arr.sort((a, b) => a - b)

	while (start <= end) {
		mid = parseInt((start + end) / 2)

		if (target < arr[mid]) {
			end = mid - 1
		} else if (target > arr[mid]) {
			start = mid + 1
		} else {
			return mid + 1
		}
	}
	return -1
}
let arr = [12, 34]
console.log(solution(34, arr))
