// https://school.programmers.co.kr/learn/courses/30/lessons/120896  한 번만 등장하는 문자

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




//https://school.programmers.co.kr/learn/courses/30/lessons/120890#  가까운 수


function solution(array, n) {
    array.sort((a,b)=>a-b)
    const subArr = array.map(v=>Math.abs(n-v));
    const minIndex = subArr.indexOf(Math.min(...subArr))
    return array[minIndex];
}
/*
먼저 작은 수를 반환해야 하기 때문에 찾기 쉽도록 오름차순 정렬을 한뒤 abs로 주어진 n과의 거리 값을 구한 동일한 길이의 배열을 준비한다.
이후 가장 작은 값의 첫번째를 순서를 반환하는 indexOf를 이용해 가장 작은 값 즉 거리가 가장 가까운 값의 순서를 구해 array에 집어넣어 완료한다.
다른 사람 풀이도 많이 있지만 무조건 한줄이라고 좋은 건 아닌 것 같았다. 짧긴하지만 가로로 길었고 그때문에 가독성 부분에서 매우 읽기 힘들었다.
사용한 문법은 같았다.
*/


 
//https://school.programmers.co.kr/learn/courses/30/lessons/120838  모스부호


function solution(letter) {
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
};
    return letter.split(' ').map(l => morse[l]).join('');;
}

/*
처음엔 하드코딩 했는데 이게 객체 배열을사용할 줄 몰라 일어난 것 같다. 이렇게 map을 이용해 나눈 배열에서 찾아나가면 되는데 굉장히 오래 고민했다. 반성하자
*/


//https://school.programmers.co.kr/learn/courses/30/lessons/120848


