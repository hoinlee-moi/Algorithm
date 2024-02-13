function solution(myString, pat) {
    var answer = 0;
    return myString.split('').map(v=>v==='A'?'B':'A').join('').includes(pat)?1:0;
}