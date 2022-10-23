//https://school.programmers.co.kr/learn/courses/30/lessons/120847  최댓값 만들기(1)

function solution(numbers) {
    numbers.sort((a,b) =>  b - a);
    let answer = numbers[0]*numbers[1]
    return answer;
}

//주어진 배열이 있고 가장 큰 수 2개를 곱해야 하기 때문에 sort함수를 써서 내림차순을 이용하여 계산함.


//https://school.programmers.co.kr/learn/courses/30/lessons/120849  모음제거

function solution(my_string) {
    let vowel = ['a','e','i','o','u']
    let answer = my_string.split("").filter(str => vowel.includes(str)?false:true).join("")
    return answer;
}
//배열로 바꾼뒤 filter로 모음 배열을 제외한 배열을 내뱉도록 만들었다. 
//다른 사람 풀이를 확인하니 replace란 문법을 깜빡 한 것 같아 사용해보았다.

function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}

//그런데 소요시간에서 filter를 사용했을 경우 평균적으로 0.06ms에 종료 되었지만 replace를 사용하니 0.16으로 더욱 늘어났다.
