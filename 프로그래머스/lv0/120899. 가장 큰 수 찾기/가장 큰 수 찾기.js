function solution(array) {
    let answer = [];
    const maxValue = Math.max.apply(null,array)
    const findIndex = (ele) => ele === maxValue
    const index = array.findIndex(findIndex)
    answer.push(maxValue,index)
    return answer;
}