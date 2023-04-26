function solution(arr, queries) {
  queries.forEach((item) => {
    const [i, j] = item;
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  });
  return arr;
}

function solution(arr, queries) {
  queries.forEach(([a, b]) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  });
  return arr;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 3],
      [1, 2],
      [1, 4],
    ]
  )
);
// 3 1 2 0 4
// 3 2 1 0 4
// 3 2 0 1 4
