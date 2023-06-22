function solution(n, left, right) {
    let answer = [];
    let start = [Math.floor(left/n)+1,left%n]
    let end = [Math.floor(right/n)+1,right%n]
    for(let i=start[0];i<=end[0];i++) {
        let idx =1;
        if(i===start[0]) idx = start[1]+1
        if(i===end[0]) n = end[1]+1
        for(let j=idx;j<=n;j++) {
            let num = i>=j?i:j
            answer.push(num)
        }
    }
    return answer;
}