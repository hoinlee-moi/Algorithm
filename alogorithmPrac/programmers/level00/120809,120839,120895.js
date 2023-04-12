// https://school.programmers.co.kr/learn/courses/30/lessons/120809  배열 두 배 만들기

function solution(numbers) {
    return numbers.map(num => num*2);
}

/*
배열 함수인 map을 써서 원소의 2배값을 리턴해 새로운 배열을 만들도록 했다.
*/


//https://school.programmers.co.kr/learn/courses/30/lessons/120839  가위 바위 보

function solution(rsp) {
    let answer = rsp.split('').map(str =>{
        if(+str===0) return 5
        if(+str===2) return 0
        if(+str===5) return 2
    })
    return answer.join('');
}

/*
문자열을 배열로 바꾼후 map함수를 이용해 조건식을 걸어 return값을 나누도록 했다. 이후 문자열로 반환함.
(변수 앞에 +를 붙인 건 split을 이용해 배열로 바꿀 시 문자열로 되기에 숫자로 바꿔 계산식을 진행하기 위해Number사용해도 됨)
다른 사람 풀이를 확인하니 if else도 있고 switch case도 있으며 객체로 두어 해결하는 다양한 방법이 있었다.
*/

//https://school.programmers.co.kr/learn/courses/30/lessons/120895  인덱스 바꾸기

function solution(my_string, num1, num2) {
    const num1Str = my_string[num1]
    const num2Str = my_string[num2]
    const strArr = my_string.split('')
    strArr.splice(num1,1,num2Str)
    strArr.splice(num2,1,num1Str)
    return strArr.join('')
}

/*
너무 어렵게 푼 감이 있긴 하다. 각 자리의 문자를 따로 변수로 둔 후 배열로 바꿔 splice 함수를 이용해 각 위치에 문자들을 바꾸었는데 좀 길어진 느낌이 없지 않다.
다른 사람의 풀이를 보니 너무 함수형만 생각한 거 같다.. 그냥 그 배열을 할당 연산자로 변경해도 됐는데 
*/
function solution(my_string, num1, num2) {
    let strArr = my_string.split("");
    [strArr[num1], strArr[num2]] = [strArr[num2], strArr[num1]];
    return strArr.join("");
}