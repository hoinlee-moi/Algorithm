function solution(s) {
    let answer = false
    if(s===s.replace(/[a-z,A-Z]/g,"")) {
        if(s.length===4||s.length===6) answer= true 
    }
    return answer
}