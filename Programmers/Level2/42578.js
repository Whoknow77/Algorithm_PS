function solution(clothes) {
  let types = {};
  let result = 1;

  // 의상 종류별 개수 count
  clothes.forEach((v) => (types[v[1]] = (types[v[1]] || 0) + 1));
  types;

  // (종류A + 입지 않는 경우) * (종류B + 입지 않는 경우) * ...
  // (A+1) * (B+1) * ...
  for (const key in types) {
    result *= types[key] + 1;
  }

  // 아무 것도 입지 않는 경우 제외 후 return
  return result - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
    ["eee", "pants"],
  ])
);
