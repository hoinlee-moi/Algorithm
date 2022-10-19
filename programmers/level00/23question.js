// https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s) {
    let answer = []
    const set = new Set(s.split(''))
    const newArr = [...set]
    for(let i=0;i<newArr.length;i++){
        let count = 0
        for(let j=0; j<s.length;j++){
            if(newArr[i]===s[j]) count++
        }
        if(count===1) answer.push(newArr[i])
    }
    return answer.sort().join('');
}

/*
왜 이렇게 하드코딩만 생각나는지 모르겠다. 일단 중복값을 제외한 배열을 set을 이용해 구한뒤 그 값들을 본래의 s문자열과 비교하여 하나만 존재한다면 정답 배열에 집어넣도록 만들었다.
*/
function solution(s) {
    let res = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
}
/*
중간에 이 방법을 썼는데 값이 한가지만 들어가서 틀렸는데 다시 확인해 봐야겟다. indexOf와 lastIndexOf를 이용해 주어진 요소를 배열에서 처음부터와 끝에서부터 찾는 인덱스가 같으면
그 값을 배열로 집어놓도록 만든것이다.
그러면 그 값이 하나라면 처음부터 찾아서 발견한 인덱스와 끝에서부터 발견한 인덱스가 같은 경우를 구하는 것.
*/