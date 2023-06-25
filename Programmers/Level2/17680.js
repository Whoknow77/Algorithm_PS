function solution(cacheSize, cities) {
  if (cacheSize === 0) {
    return cities.length * 5;
  }
  let count = 0;
  let cache = [];

  cities.forEach((item, index) => {
    let isCache = cache.findIndex((index) => {
      return index.toUpperCase() === item.toUpperCase();
    });
    // hit
    if (isCache !== -1) {
      cache.splice(isCache, 1);
      cache.unshift(item);
      count += 1;
    }
    // miss
    else {
      if (cacheSize === cache.length) {
        cache.pop();
      }
      cache.unshift(item);
      count += 5;
    }
  });
  return count;
}

console.log(solution(10, ["A", "B", "C", "A"]));
