function solution(k, m, score) {
    if(score.length<m) return 0
    let money = 0;
    score.sort((a,b)=>b-a)
    for(let i=1; i<=score.length;i++){
        if(i%m===0){     
            money += score[i-1]*m
        }
    }
    return money;
}