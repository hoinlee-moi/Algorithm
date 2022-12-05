function solution(k, m, score) {
    if(score.length<m) return 0
    let money = 0;
    score.sort((a,b)=>b-a)
    for(let i=m; i<=score.length;i+=m){     
            money += score[i-1]*m
    }
    return money;
}