//https://school.programmers.co.kr/learn/courses/30/lessons/120823?language=javascript

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    for(let i=1;i<=line; i++){
        console.log("*".repeat(i))
    }
}).on('close', function () {
});

/*
 처음에 readline을 잘 몰라서 당황했는데 그냥 아래쪽에서 console.log로 찍어보며 어느 위치에서 출력되는지 확인한 다음 for문으로 문제 해결
*/


//https://school.programmers.co.kr/learn/courses/30/lessons/120851?language=javascript

function solution(my_string) {
    let number = my_string.replace(/[^0-9]/g, "");
    return number.split('').reduce((acc,v) => Number(acc)+Number(v))
}

/*
replace를 이용한 정규식으로 숫자들을 찾아낸 뒤 split으로 배열 이후 reduce로 합을 도출했다.
다만 아쉬운 점은 어제 JS연산자 공부를 하며 들어오는 값이 숫자인걸 알면서 굳이 Number를 쓰지 않고 acc와 v변수 앞에 +를 써 숫자형으로 변형시킬 수 있다는 것이다.
자연수가 아니라면 parseInt로 꼭 정수를 만들자.
*/