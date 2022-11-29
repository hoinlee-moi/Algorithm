function solution(food) {
    let answer = '';
    let between = 0
    for(let i=1;i<=food.length-1;i++) {
        if(food[i]<=1)continue;
        if(food[i]>1){
            let count = 0;
            food[i]%2===0? count=food[i] : count=food[i]-1;
            if(i===1) answer+= "1".repeat(count)
            else {
                let str = String(i).repeat(count)
                answer = answer.slice(0,between)+str+answer.slice(between,answer.length)
            }
            between += count/2
        }
    }
    answer = answer.slice(0,answer.length/2)+"0"+answer.slice(answer.length/2,answer.length)
    return answer;
}