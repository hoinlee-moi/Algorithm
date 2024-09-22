function solution(s){
    if(s.length % 2 !== 0) return 0;
    const stack = []
    for(const a of s) {
        if(stack.length && stack.at(-1) === a) {
            stack.pop()
        } else stack.push(a)
    }
    return stack.length?0:1
}
