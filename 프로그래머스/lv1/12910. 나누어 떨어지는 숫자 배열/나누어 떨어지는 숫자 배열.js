function solution(arr, divisor) {
    var answer = [];
    arr.map(v=> {if(v%divisor===0)  answer.push(v)})
    answer.sort((a,b)=>a-b)
    return answer.length?answer:[-1];
}