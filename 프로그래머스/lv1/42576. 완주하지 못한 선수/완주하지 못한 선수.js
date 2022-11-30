function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(let i=0; i<=participant.length-1; i++) {
        if(participant[i]!=completion[i]) return participant[i]
    }
}


/*
각 배열을 `sort` 로 정돈한 뒤 각 배열의 순서의 값과 일치하지 않으면 리턴하도록 한다.
이는 배열간의 길이의 차가 1인 것을 근거로 할 수 있다.
다만 Map을 이용한 풀이가 있었는데 효율이 더 좋게 나왔다.
function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';
}
*/