function solution(s){
    if(s[0] === ')') return false
    const stack = [];
    for (const c of s) {
        if(c === '(') {
            stack.push(c)
        } else {
            stack.pop()
            
        }
    }
    return stack.length===0
}