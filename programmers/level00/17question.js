// https://school.programmers.co.kr/learn/courses/30/lessons/120811

function solution(array) {
    const center = parseInt(array.length/2);
    let answer = array.sort((a,b) => a-b)[center]
    return answer;
}

/*
중앙 값은 전체 길이의 /2를 하여 정수값으로 도출해 냈고 이후 sort함수를 써서 오름차순 정리, 중앙값을 도출했다.
 */

function solution(my_string) {
    let answer = my_string.split("").map(str=>{
        if(str === str.toUpperCase()) return str.toLowerCase()
        if(str === str.toLowerCase()) return str.toUpperCase()
    });
    return answer.join("");
}

/*
삼항연산자를 이용해서 처음 시도해 봤는데 삼항연산자는 true와 false로만 구분하니 이미 소문자인걸 소문자로 바꾸는 과정이 에러가 났다.
그래서 아 이런 논리로 비교해야하는 건 if를 써야 겠구나 하고 if를 쓰니 해결 완료
*/
function solution(my_string) {
    let answer = my_string.split("").map(str=>
        str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase()
    ).join("");
    return answer;
}

/*
그런데 될 것 같아서 다시 실행해보니 삼항연산자도 완료가 되었다.. ㅡㅡ
 */


// https://school.programmers.co.kr/learn/courses/30/lessons/120836

function solution(n) {
    let answer = 0;
    for(let i=1; i<=n; i++) {
        if(n % i ===0) answer++
    }
    return answer;
}

/*
20의 순서쌍이랑 곱해서 20이 나오는 숫자들 즉 (1,20),(2,10)등의 숫자들인데 결국 나머지가 0이되는 숫자들을 찾으면 되기에
for문으로 1부터 n까지의 숫자중 나머지가 0인 케이스마다 answer를 증가시켜 해결
*/