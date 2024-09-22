function solution(s) {
    let count = 0;
    const len = s.length
    for(let i=0; i<len; i+=1){
        const stack = [];
        let suc = true;
        for(let j=0; j<len; j+=1) {
            const c = s[(i+j)%len];
            if(c ==='(' || c === '{'|| c === '[' ) {
                stack.push(c)
                continue;
            }
            else {
                if(!stack.length) {
                    suc = false
                    break
                };
            }
            
            const top = stack[stack.length-1]
            
            switch(c){
                case ')':
                    top==='(' && stack.pop();
                    break;
                case ']':
                    top === '[' && stack.pop();
                    break;
                case '}':
                    top === '{' && stack.pop()
                    break;
                default:suc = false
            }
        }
        if(suc && !stack.length) count +=1;
    }
    return count
}