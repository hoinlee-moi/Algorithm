function solution(s){
    if(s.length%2!=0) return 0
    let str = [];
    for(let i=0;i<=s.length-1;i++) {
        str.push(s[i])
        if(str[str.length-1]===str[str.length-2]){
            str.pop()
            str.pop()
        }   
    }
    return str.length===0?1:0
}

/*
먼저 효율성을 높이기위해 글자가 짝지어서 전부 사라지려면 홀수가 나와서는 안된다.
홀수일 경우를 모두 제거한뒤 한번만 반복할 수 있도록 하나의 배열을 만들고 그 배열에 단어를 집어넣어
앞쪽에서부터 연속되는 수를 계속해서 제거 해 나간다.
*/