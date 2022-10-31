function solution(quiz) {
    let answer = [];
    for(let i=0; i<quiz.length; i++) {
        const quizArr = quiz[i].split(' ')
    switch(quizArr[1]){
            case "+" : if(+quizArr[0]+ +quizArr[2]===+quizArr[4]) answer.push('O')
                       else answer.push('X')
                       break;
            case "-" : if(+quizArr[0]- +quizArr[2]===+quizArr[4]) answer.push('O')
                       else answer.push('X')
                       break;
    }
    }          
    return answer;
}

/*
먼저 quiz의 길이만큼 for문을 돌면 switch case문으로 +인지 -인지 확인한다 이후 값을 판별하여 ox를 넣어준다.
*/

function solution(quiz) {
    var answer = [];
    return quiz.map(t => {
        const [calc, result] = t.split(' = ');
        const sign = calc.includes('+') ? 1 : -1
        const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');

        return +a + (+b * sign) === +result ? 'O' : 'X'
    });
}

/*
다른사람 풀이인데 quiz 배열에 map을 사용하여 처음 들어온 값을 split 하여 +가 있는지 없는지 확인 있다면 +로 아니면 -로 split하여 나눈다.
이후 a값과 뒤의 b값과 앞에 나오는 연산을 곱해 값을 판별
*/
