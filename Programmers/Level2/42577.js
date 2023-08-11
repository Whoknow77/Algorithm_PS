function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    for (let j = 0; j < phone_book[i + 1].length; j++) {
      if (phone_book[i + 1].slice(0, j) === phone_book[i]) {
        return false;
      }
    }
  }
  return true;
}

console.log(solution(["123", "456", "789"]));
