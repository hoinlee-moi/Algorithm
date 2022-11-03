function solution(array) {
    const center = parseInt(array.length/2);
    let answer = array.sort((a,b) => a-b)[center]
    return answer;
}