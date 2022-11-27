function solution(lottos, win_nums) {
    const winRank = [6,6,5,4,3,2,1]
    const lowerRank = lottos.filter(v=>win_nums.includes(v)).length;
    const highRank = lottos.filter(v=>v===0).length+lowerRank
    return [winRank[highRank],winRank[lowerRank]]
}
/*
첫 정답 제출 후 코드를 더 간결하게 만들었고 아래의 식은 첫 정답 제출 때 들어간 하드 코딩이다.

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

먼저 답이 나올 answer 배열을 두었고 로또 숫자를 맞추는 개수에 따라 몇등인지 나오도록 배열을 만들었다.
이후 랭크를 당첨 번호에 속하는지 filter를 이용해 걸러 냈고 당첨 개수는 filter로 걸러낸 배열의 수이기 때문에
winRank로 만들어 놓은 배열의 숫자로 등수를 확인한다.
이 때 0을 가지고 있다면 0의 개수를 플러스 하여 최대 당첨 개수를 알 수 있도록 한다.

<제출한 답>
일단 알고리즘이 진행되는 대로 조건들을 넣으며 풀었지만 더 줄일 수 있었다.
먼저 answer란 배열을 만들고 push할 필요 없이 처음부터 return을 양식에 맞게 넣어주면 push 시간을 줄일 수 있다.
또 굳이 if문으로 거르지 않아도 0이 없다면 0을 걸러낸 filter의 길이가 0이기에 더해도 아무 문제 없다 

*/