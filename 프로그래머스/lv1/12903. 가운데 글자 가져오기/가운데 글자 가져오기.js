function solution(s) {
    return s.length%2===0 ?s[(s.length/2)-1]+s[(s.length/2)] :s[Math.floor(s.length/2)] ;
}

/*
풀긴 했지만 가독성 부분으로 이게 좋은건가? 하는거엔 물음표가 생긴다.
*/