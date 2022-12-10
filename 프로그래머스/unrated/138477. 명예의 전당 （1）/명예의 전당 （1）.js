function solution(k, score) {
    var answer = [];
    let fame = [];
    for(let i=0;i<=score.length-1;i++){
        if(i<k){
            fame.push(score[i])
        }else{
            if(score[i]>Math.min(...fame)&&score[i]<Math.max(...fame)||score[i]>=Math.max(...fame)){
                fame.shift()
                fame.push(score[i])
            }
        }
        fame.sort((a,b)=>a-b)
        answer.push(Math.min(...fame))
    }
    return answer;
}