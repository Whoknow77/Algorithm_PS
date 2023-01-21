function solution(s) {
    return [...s].sort((a,b) => a<b ? 1 : -1).join('');
}

function solution2(s){
    return [...s].sort((a,b) => b.charCodeAt(0)-a.charCodeAt(0)).join('');
}

function solution3(s) {
    return s
      .split("")
      .sort()
      .reverse()
      .join("");
  }