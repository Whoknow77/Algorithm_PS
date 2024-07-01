// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
// const input = fs.readFileSync(filePath).toString().trim('\n').split('\n');
// const [N, Maxweight] = input[0].split(' ');
// input.shift();
// const arr=[];
// for (let i = 0; i < input.length; i++) {
//   const [weight, value] = input[i].split(" ");
//   arr.push([weight,value])
// }
// let answer=0;
// function f(n, cap){
//     if(n===1){
//         return answer;
//     }
//     // 배낭에 넣을 수 있을 경우
//     if(cap>=arr[n][0]){
//         answer +=f(n-1, cap-arr[n][0]) +arr[n][1];
//         return f(n-1, cap-arr[n][0]);

//     }
//     else{
//         return f(n-1,cap);
//     }
// }

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim("\n").split("\n")

const [N, K] = input[0].split(" ").map(Number)
const dp = Array.from({length: N + 1}, () => Array(K + 1).fill(0))

for (let i = 1; i <= N; i++) {
	const [W, V] = input[i].split(" ").map(Number)
	for (let j = 1; j <= K; j++) {
		if (j >= W) {
			dp[i][j] = Math.max(dp[i - 1][j - W] + V, dp[i - 1][j])
		} else {
			dp[i][j] = dp[i - 1][j]
		}
	}
}

console.log(dp[N][K])

// [4,7]

// [6,13] [4,8] [3,6] [5,12]
