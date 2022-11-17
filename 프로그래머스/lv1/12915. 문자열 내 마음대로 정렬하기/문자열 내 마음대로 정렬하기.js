function solution(strings, n) {
    strings.sort((a,b)=>{
       if(a[n]>b[n]) return 1
        else if(b[n]===a[n]) return a>b? 1:-1
        else if(a[n]<b[n]) return -1
    })
    return strings;
}

/*
function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}
*/