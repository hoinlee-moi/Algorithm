function solution(array, n) {
    
    const result = array.filter(num => num === n);
    let answer = result.length
    return answer;
}