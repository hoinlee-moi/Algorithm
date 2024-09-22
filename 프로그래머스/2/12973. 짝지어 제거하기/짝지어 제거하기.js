function solution(s){
    if(s.length % 2 != 0) return 0;
    const stack = []
    for(let i=0; i<=s.length-1; i+=1){
        if(stack.length && stack.at(-1) === s[i]) stack.pop()
        else stack.push(s[i])
    }
    return stack.length ? 0 : 1;
}
