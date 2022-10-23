// https://school.programmers.co.kr/learn/courses/30/lessons/120818  옷가게 할인 받기

function solution(price) {
    let answer=price;
    if( price>=100000 && price<300000) answer = price-(0.05*price)
    if(price>=300000 && price<500000 ) answer = price-(0.1*price)
    if(price>=500000) answer = price-(0.2*price)
    return parseInt(answer);
}

/*
문제 자체에서 3가지 조건을 걸어놔서 if조건문으로 처리 하였다. 그리고 마지막으로 소수점 이하를 버린다 되어있어 parseInt로 정수처리 함
*/


// https://school.programmers.co.kr/learn/courses/30/lessons/120905  n의 배수 고르기

function solution(n, numlist) {
    return numlist.filter(num => num % n ===0)
}

/* 
arrayfunction인 filter를 이용해 주어진 조건에 만족하는 새로운 배열을 리턴하여 해결, 개념 정의가 정확하지 않아 map을 써보려 했다가
map은 모든 배열 원소에 주어진 함수를 호출한 값이란 걸 깜박했다.
*/


//https://school.programmers.co.kr/learn/courses/30/lessons/120825  문자 반복 출력하기

function solution(my_string, n) {
    const myString = my_string.split('').map(str=>{
        return str.repeat(n)
    })
    return myString.join('')
}

/* 
각 단어를 분리시키기 위해 split으로 각 단어들을 배열로 바꾼후 배열함수인 map을 사용하여 repeat을 이용해 n만큼 반복시킨 문자열로 배열에 담기도록 바꿈
이후 join을 이용하여 다시 문자열로 반환
*/
function solution(my_string, n) {
    return my_string.split('').map(str=>str.repeat(n)).join('')
}
//그냥 이렇게 합쳐서 진행해도 되는 것 같다. 다른 사람 풀이에선 reduce를 쓰는 것도 있었는데
function solution(my_string, n) {
    return my_string.split('').reduce((acc, cur) => acc + cur.repeat(n), '')
}
// 배열로 만드는 것 까진 똑같고 reduce를 이용해 각 배열의 합을 도출할 때 첫 값을 ''공백으로 처리 cur에 repeat시켜 반복시킨 문자열을 계속 더할 수 있도록 해결함
