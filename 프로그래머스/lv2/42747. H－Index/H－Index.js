function solution(citations) {
    let answer = 0;
    for(let i=1; i<Math.max(...citations);i++) {
        let h = citations.filter(v=>v>=i).length
        if(h<i){
            answer = i-1
            break
        }
    }
    return answer;
}