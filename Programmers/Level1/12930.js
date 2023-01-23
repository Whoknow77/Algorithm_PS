// 공백을 기준으로 쪼개서 배열을 만들고 안에서 또 쪼개서 인덱스로 접근
function solution(s) {
    return s.split(' ').map(item => item.split('').map((num,index) =>{
        if(index%2===0){
            return num.toUpperCase();
        }
        else{
            return num.toLowerCase();
        }
    }).join('')).join(' ');
}

// 다른 사람 풀이
// \w : 알파벳 또는 문자
function solution2(s){
    return s.toUpperCase().replace(/(\w)(\w)/g, a=>a[0].toUpperCase()+a[1].toLowerCase());
  }
