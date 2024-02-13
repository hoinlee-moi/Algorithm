function solution(myString, pat) {
    return [...myString].reduce((acc,cur)=>acc+(cur==='A'?'B':'A'),'').includes(pat)?1:0;
}