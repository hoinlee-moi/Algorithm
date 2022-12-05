// function solution(k, m, score) {
//     if(score.length<m) return 0
//     let money = 0;
//     score.sort((a,b)=>b-a)
//     for(let i=0; i<=score.length;i+=m){
//         if(i%m===0&&i!==0){     
//             money += score[i-1]*m
//         }
//     }
//     return money;
// }
function solution(k, m, score) {
    let answer = 0;
    const sortedScore = score.slice().sort((a, b) => a - b).slice(score.length % m);
    for (let i = 0; i < sortedScore.length; i += m) {
        answer += sortedScore[i] * m;
    }
    return answer;
}