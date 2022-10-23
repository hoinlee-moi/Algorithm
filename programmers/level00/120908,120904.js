//https://school.programmers.co.kr/learn/courses/30/lessons/120908  문자열안에 문자열

function solution(str1, str2) {
    return str1.includes(str2)? 1:2;
}

/*
존재 유무 파악이니 true,false면 가능하겠다고 생각해 삼항연산자를 사용했고 includes 함수를 이용하여 판별
*/

// https://school.programmers.co.kr/learn/courses/30/lessons/120904  숫자 찾기

function solution(num, k) {
    let answer = String(num).split('').findIndex(v => +v===k)
    return answer===-1? answer : answer+1
}

/*
배열함수를 이용하기 위해 split을 이용했고 숫자이기 때문에 string으로 바꿔줌. 이후 findIndex를 사용, 사용할 때 +v를 이용해서 숫자로 형변환을 시켜 비교함
findIndex는 시작이 0부터이고 풀이 답은 시작이 1부터이기 때문에 삼항연산자를 이용 +1을 시킴
*/
function solution(num, k) {
    let ind = (''+num).indexOf(k);
    return ind === -1 ? -1 : ind+1;
}
/*
하지만 그럴 필요 없이 indexof라는 함수를 이용해도 상관없었다! 더 공부하자!
*/

