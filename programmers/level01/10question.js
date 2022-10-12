//https://school.programmers.co.kr/learn/courses/30/lessons/120911

function solution(my_string) {
    let answer = my_string.toLowerCase().split("").sort().join("");
    return answer;
}

// 문자열을 toLowerCase로 소문자화 시키고 내림차순으로 변경을 위해 split으로 배열로 만든후 배열함수인 sort로 내림차순 시킨다. 이후 join으로 다시 문자열로 반환
function solution(my_string) {
    return my_string.toLowerCase().split("").sort().join("");
}
// 그냥 주어진 대로 했었는데 잘 생각해보니 이런식으로도 가능하지 않을까 싶다. 여기서 더 줄인다면
const solution = (my_string) => my_string.toLowerCase().split("").sort().join("")
//이렇게 가능할거 같다



//https://school.programmers.co.kr/learn/courses/30/lessons/120814

function solution(n) {
    return Math.ceil(n/7);
}

//09question.js 에 있던 문제의 연장선인데 똑같이 Math객체의 ceil함수를 써서 무조건 소수점 자리 숫자가 생기면 올림을 하도록 만들었다.
// 그래야 남은 사람이 생길경우 피자 한판을 더 주문할 수 있기 때문


//https://school.programmers.co.kr/learn/courses/30/lessons/120909

function solution(n) {
    return Number.isInteger(Math.sqrt(n))? 1 : 2;
}

//Number객체의 isInteger이란 정수 실수 판별자를 활용(true와 false를 반환)하여 삼항연산자를 사용, Math 객체의 sqrt 함수를 이용해 제곱수를 검사