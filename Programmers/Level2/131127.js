function solution(want, number, discount) {
  let answer = 0;
  for (let i = 0; i < discount.length; i++) {
    const arr = Array(want.length).fill(0);
    for (let j = i; j < i + 10; j++) {
      const idx = want.indexOf(discount[j]);
      if (idx < 0) {
        break;
      } else {
        arr[idx]++;
      }
    }
    // arr의 모든원소가 number의 모든 원소보다 크기만 하면 된다.
    if (
      JSON.stringify(
        arr.filter((item, index) => {
          return item >= number[index];
        })
      ) === JSON.stringify(number)
    ) {
      answer++;
    }
  }
  return answer;
}

// 다른 사람 풀이

function solution(want, number, discount) {
  let count = 0;
  for (let i = 0; i < discount.length - 9; i++) {
    const slice = discount.slice(i, i + 10);

    let flag = true;
    for (let j = 0; j < want.length; j++) {
      if (slice.filter((item) => item === want[j]).length !== number[j]) {
        flag = false;
        break;
      }
    }
    if (flag) count += 1;
  }
  return count;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",

      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
