function solution(arr, divisor) {
    const answer = arr.filter(v=> v%divisor===0);
    answer.sort((a,b)=>a-b)
    return answer.length?answer:[-1];
}

/*
아래는 이전 풀이인데 filter를 사용하면 되는데 각 계산을 전부 한다고 생각하여 map을 사용하게 됐다.
function solution(arr, divisor) {
    var answer = [];
    arr.map(v=> {if(v%divisor===0)  answer.push(v)})
    answer.sort((a,b)=>a-b)
    return answer.length?answer:[-1];
}
*/