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

/*
function solution(k, score) {
    var temp = [];
    let answer = [];

    score.forEach(el => {
        temp.push(el);
        temp.sort((a, b) => b - a);
        if(k < temp.length)
            answer.push(temp[k - 1]);
        else
            answer.push(temp[temp.length - 1]);
    })
    return answer;
}
*/