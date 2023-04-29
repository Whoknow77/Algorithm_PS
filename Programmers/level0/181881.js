function solution(arr) {
  let lastArray = [];
  let count = 0;
  while (true) {
    lastArray = [...arr];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 50 && arr[i] % 2 === 0) {
        arr[i] = arr[i] / 2;
      } else if (arr[i] < 50 && arr[i] % 2 !== 0) {
        arr[i] = arr[i] * 2 + 1;
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (lastArray[i] === arr[i]) {
        sum++;
      }
    }
    if (sum === arr.length) {
      break;
    }
    count++;
  }

  return count;
}

function solution(arr) {
  var answer = 0;
  let before = [-1];

  while (!arr.every((e, idx) => e == before[idx])) {
    before = [...arr];

    arr = arr.map((e) => {
      if ((e >= 50) & (e % 2 == 0)) return e / 2;
      if ((e < 50) & (e % 2 != 0)) return e * 2 + 1;
      return e;
    });
    answer++;
  }
  return answer - 1;
}

function solution(arr) {
  let x = 0;
  let prev = [];
  prev = [...arr];
  while (true) {
    x++;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 50 && arr[i] % 2 === 0) arr[i] /= 2;
      else if (arr[i] < 50 && arr[i] % 2) arr[i] = arr[i] * 2 + 1;
    }
    if (prev.join("") === arr.join("")) return x - 1;

    prev = [...arr];
  }
}

console.log(solution([1, 2, 3, 100, 99, 98]));
