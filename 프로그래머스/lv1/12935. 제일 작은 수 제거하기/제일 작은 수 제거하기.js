function solution(arr) {
    const answer = arr.filter(v=>v!=Math.min(...arr))
    return answer.length ? answer : [-1];
}