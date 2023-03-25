function solution(t, p) {
    let answer = 0
    for(let i=0; i<=t.length-1; i++){
        if(p.length+i>t.length) break;
        let num = t.slice(i,p.length+i)
        if(num<=parseInt(p)) answer++
    }
    return answer;
}