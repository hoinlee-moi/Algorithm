function solution(n, m) {
    let answer = [];
    let G = 0;
    for(let i=1; i<=Math.max(n,m);i++) {
        if(n%i===0&&m%i===0) G = i;
    }
    let L = G*(n/G)*(m/G)
    answer.push(G,L)
    return answer;
}