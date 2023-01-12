function solution(id_pw, db) {
    let id=db.map(a=>a[0]);
    let pw=db.map(a=>a[1]);
    
    // 아이디 체크
    if(id.includes(id_pw[0])){

        // 패스워드 체크
        if(pw[id.findIndex(a=>a===id_pw[0])]===id_pw[1]){
            return "login";
        }
        else{
            return "wrong pw";
        }
    }
    else{
        return "fail";
    }
}

// 다른 사람 풀이

function solution2(id_pw, db) {
    db = db.filter(v=>v[0]===id_pw[0]);

    if (!db.length) return 'fail';

    for (let d of db) if (d[1] === id_pw[1]) return 'login';

    return 'wrong pw';
}

function solution3(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}


