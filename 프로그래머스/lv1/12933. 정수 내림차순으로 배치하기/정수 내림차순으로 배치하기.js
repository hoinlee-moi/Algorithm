function solution(n) {
    return +((n+"").split("").map(v=>+v).sort((a,b)=>b-a).join(""));
}