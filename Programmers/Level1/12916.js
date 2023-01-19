function solution(s){
    let pnumber=[...s].filter(a=>a==='p' || a==='P').length;
    let ynumber=[...s].filter(a=>a==='y' || a==='Y').length;

    return pnumber===ynumber ? true : false;
}


// 다른 사람 풀이

function solution2(s){
      return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
  }

function solution3(s) {
    return s.match(/p/ig).length == s.match(/y/ig).length;
  }