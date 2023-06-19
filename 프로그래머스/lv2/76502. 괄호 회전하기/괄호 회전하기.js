function solution(s) { 
    let count = 0
    for(let i=0; i<=s.length-1;i++) {
        let stack = []
        let str = ""
        str += s.slice(i,s.length)
        if(i>0) str += s.slice(0,i)
        stack.push(str[0])
        for(let j=1; j<=str.length-1;j++){
            stack.push(str[j])
            if(str[j]===")"){
                if(stack[stack.length-2]!=="(") break;
                else {
                    stack.pop()
                    stack.pop()
                }
               
            }
            if(str[j]==="}"){
                if(stack[stack.length-2]!=="{") break;
                else {
                    stack.pop()
                    stack.pop()
                }
            }
            if(str[j]==="]"){
                if(stack[stack.length-2]!=="[") break;
                else {
                    stack.pop()
                    stack.pop()
                }
            }

        }
        if(stack.length===0) {
            count++
        }
    }
    return count;
}