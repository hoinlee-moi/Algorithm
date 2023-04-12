// https://school.programmers.co.kr/learn/courses/30/lessons/120922  종이자르기

function solution(M, N) {
    var answer = (M*N)-1;
    return answer;
}

/*
그냥 수학적 사고로 인식해서 해결했다 딱히 어떤 공식이나 프로그래밍을 이용하진 않고 문제와 정답사이의 규칙을 도출해냄.
*/


// https://school.programmers.co.kr/learn/courses/30/lessons/120887#  k의 개수

function solution(i, j, k) {
    let answer = 0;
    let arr = Array(j-i+1).fill().map((v,index)=>(index+i).toString());
    for(let n=0;n<arr.length;n++) {
        answer += arr[n].split('').filter(v=>v===String(k)).length
    }
    return answer;
}

/*
숫자가 있는지 판별하는 건데 너무 많은 걸 쓴 것 같다. 시간적 소요시간이 너무 많고 배열을 하나 만들어서 숫자들을 집어 넣은뒤 또 그 숫자들을
하나씩 꺼내서 배열화 시켜 찾아내는 방식인데 비효율적이고 주먹구구식인 것 같았다.
*/
function solution(i, j, k) {
    return Array(j-i+1).fill(i).map((v,i)=>v+i).join('').split(k).length-1;
}
/*
배열을 만드는 것 까진 같고 그 뒤로 join으로 문자열 다시 split을 통해 해당하는k의 값으로 문자열을 구분해 냈다.
소요시간도 훨씬 덜 들었다.
*/