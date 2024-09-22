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

// function solution(s) { 
//     let count = 0
//     for(let i=0; i<=s.length-1;i++) {
//         let stack = []
//         let str = ""
//         str += s.slice(i)
//         if(i>0) str += s.slice(0,i)
//         stack.push(str[0])
//         for(let j=1; j<=str.length-1;j++){
//             stack.push(str[j])
//             if(str[j]===")"){
//                 if(stack[stack.length-2]!=="(") break;
//                 else {
//                     stack.pop()
//                     stack.pop()
//                 }
//             }
//             if(str[j]==="}"){
//                 if(stack[stack.length-2]!=="{") break;
//                 else {
//                     stack.pop()
//                     stack.pop()
//                 }
//             }
//             if(str[j]==="]"){
//                 if(stack[stack.length-2]!=="[") break;
//                 else {
//                     stack.pop()
//                     stack.pop()
//                 }
//             }
//         }
//         if(stack.length===0) {
//             count++
//         }
//     }
//     return count;
// }