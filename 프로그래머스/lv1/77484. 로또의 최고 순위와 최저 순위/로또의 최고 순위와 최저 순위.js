function solution(lottos, win_nums) {
    const answer = [];
    const winRank = [6,6,5,4,3,2,1]
    let rank = lottos.filter(v=>win_nums.includes(v)).length;
    if(lottos.includes(0)){
        let highRank = lottos.filter(v=>v===0).length+rank
        answer.push(winRank[highRank])
    } else answer.push(winRank[rank])
    answer.push(winRank[rank])
    return answer
}