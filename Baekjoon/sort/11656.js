const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const arr = [];
for (let i = 0; i < n; i++) {
	const [name, korean, english, math] = input[i].split(" ");
	arr.push([name, Number(korean), Number(english), Number(math)]);
}
console.log(
	arr.sort((a, b) => {
		console.log(a, b);
	})
);
console.log(
	arr
		.sort((a, b) => {
			if (a[1] > b[1]) {
				return -1;
			} else if (a[1] === b[1]) {
				if (b[2] > a[2]) {
					return -1;
				} else if (a[2] === b[2]) {
					if (a[3] > b[3]) {
						return -1;
					} else if (a[3] === b[3]) {
						if (b[0] > a[0]) {
							return -1;
						} else if (b[0] < a[0]) {
							return 1;
						} else {
							return 0;
						}
					}
				}
			}
		})
		.map((item) => item[0])
		.join("\n")
);
