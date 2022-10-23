// https://school.programmers.co.kr/learn/courses/30/lessons/120913  잘라서 배열로 저장하기

function solution(my_str, n) {
    let answer = [];
    my_str = my_str.split('')
    while(true){
        if(my_str.length<n) {
            let str =my_str.splice(0,my_str.length).join('')
            answer.push(str)
            break;
        } else{
            let str = my_str.splice(0,n).join('')
            answer.push(str)
        };
    }
    return answer.filter(e=>e !="");
}

/*
완전 하드 코딩 했다.. 매니저 일을 하면서 해서 그런지 집중이 잘 안돼서 되는대로 하다보니 이렇게 된 것 같다.
이따 좀 괜찮아지면 집중해서 해봐야겠다.
*/


// https://school.programmers.co.kr/learn/courses/30/lessons/120846  합성수 찾기

function solution(n) {
    var answer = 0;
    for(let i = 4; i<=n; i++) {
      if(i%2===0||i%3===0||i%5===0||i%7===0)  answer++
      if(i===5||i===7) answer--;
    }
    return answer;
}

/*
효율성 제로의 코드를 완성했다. 어차피 소수를 제외하고 다 들어갈텐데 이게 맞는지... 테스트는 통과 했지만 좀 아닌 거 같다.
합성수이기 때문에 배수가 될 수 있는 값들만 체크해서 진행했다.
*/

