function solution(num_list) {
    let answer = [];
    let oddNumCount = 0
    let evenNumCount = 0
    for(let i = 0; i<num_list.length; i++) {
        if(num_list[i] %2 === 0 ) {
            evenNumCount ++
        } else { oddNumCount++}
    }
    answer.push(evenNumCount,oddNumCount)
    return answer;
}