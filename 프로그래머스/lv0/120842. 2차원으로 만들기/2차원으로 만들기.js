function solution(num_list, n) {
    let answer = []
    let start = 0
    let End = n
    while(true) {
        let arr = num_list.slice(start,End)
        answer.push(arr)
        start +=n
        End+=n
        if(End>num_list.length) break;
    }
    return answer
}