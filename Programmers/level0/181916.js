function solution(a, b, c, d) {
  const nums = [a, b, c, d];
  const counts = Array(7).fill(0);
  for (let i = 0; i < nums.length; i++) {
    counts[nums[i]]++;
  }
  console.log(counts);

  const max = Math.max.apply(null, counts);

  if (max === 4) {
    const idx = counts.indexOf(4);
    return idx * 1111;
  }

  if (max === 3) {
    const idx = counts.indexOf(3);
    const idx2 = counts.indexOf(1);
    return (10 * idx + idx2) ** 2;
  }

  if (max === 2) {
    const idx = counts.indexOf(2);
    const idx2 = counts.lastIndexOf(2);
    if (idx === idx2) {
      const idx3 = counts.indexOf(1);
      const idx4 = counts.lastIndexOf(1);
      return idx3 * idx4;
    } else {
      return (idx + idx2) * Math.abs(idx - idx2);
    }
  }

  if (max === 1) {
    return nums.sort((a, b) => a - b)[0];
  }
}

function count(arr) {
  const counter = new Map();
  for (const num of arr) {
    counter.set(num, (counter.get(num) || 0) + 1);
  }

  const sortedByCnt = [...counter.keys()].sort(
    (a, b) => counter.get(b) - counter.get(a)
  );
  const maxCnt = Math.max(...counter.values());
  return [sortedByCnt, maxCnt];
}

function solution(a, b, c, d) {
  const [arr, maxCnt] = count([a, b, c, d]);
  const [p, q, r, s] = arr;
  if (arr.length === 1) {
    return p * 1111;
  }
  if (arr.length === 2) {
    return maxCnt === 2 ? (p + q) * Math.abs(p - q) : (10 * p + q) ** 2;
  }
  if (arr.length === 3) {
    return q * r;
  }
  return Math.min(p, q, r, s);
}

console.log(solution(2, 5, 2, 6));
