function solution(s) {
if(s.length === 1 || s[0] === ")") return false;

let p = 0;

for(let i = 0 ; i < s.length ; i++) {
    if(s[i] === "(") {
      p++;
    } else {
     if(p < 1) return false;
    p--;
}
}
return p > 0 ? false : true;
}