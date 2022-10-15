//https://school.programmers.co.kr/learn/courses/30/lessons/120854

function solution(strlist) {
    const answer = strlist.map((str) =>{
        return str.length
    });
    return answer;
}

//처음엔 for문을 통해 하드 코딩하려고 하다가 배열이면 배열함수가 분명 쓸 수 있을 것이다 생각하고 map을 사용


//https://school.programmers.co.kr/learn/courses/30/lessons/120822

function solution(my_string) {
    let answer = my_string.split("").reverse().join("");
    return answer;
}

// 이 전 배열 뒤집기에서 reverse함수를 써봤어서 가능 한지 생각하다 배열뒤집기니 배열로 만들면 되겠구나 싶어 배열로 만들었지만
// 다시 합치는 방법을 몰라 구글링 했고 join이라는 함수를 찾아 실행 해서 해결!


//https://school.programmers.co.kr/learn/courses/30/lessons/120899

function solution(array) {
    let answer = [];
    const maxValue = Math.max.apply(null,array)
    const findIndex = (ele) => ele === maxValue
    const index = array.findIndex(findIndex)
    answer.push(maxValue,index)
    return answer;
}

// 가장 큰 수와 작은 수 찾기는 Math.max(), Math.min() 함수를 쓸 수 있는데 배열을 사용해야 해서 구글링을 해보니 apply를 쓴 곳이 있었다.
// null값을 집어 넣는 게 있는데 https://hianna.tistory.com/487 참조해보자.
// 이후 최대값을 통해 array function인 findIndex를 이용 각 큰수와 index를 찾아 배열에 넣어 해결
