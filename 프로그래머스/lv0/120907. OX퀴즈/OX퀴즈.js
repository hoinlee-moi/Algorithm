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