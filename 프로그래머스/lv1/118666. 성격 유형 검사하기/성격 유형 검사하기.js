function solution(survey, choices) {
    let answer = ""
    const mbtiArr = [["R",0],["T",0],["C",0],["F",0],["J",0],["M",0],["A",0],["N",0]]
    const mbti = new Map(mbtiArr);
    for(let i=0; i<=choices.length-1; i++){
        switch(choices[i]){
            case 1 : mbti.set(survey[i][0],mbti.get(survey[i][0])+3)
                break;
            case 2 : mbti.set(survey[i][0],mbti.get(survey[i][0])+2)
                break;
            case 3 : mbti.set(survey[i][0],mbti.get(survey[i][0])+1)
                break;
            case 5 : mbti.set(survey[i][1],mbti.get(survey[i][1])+1)
                break;
            case 6 : mbti.set(survey[i][1],mbti.get(survey[i][1])+2)
                break;
            case 7 : mbti.set(survey[i][1],mbti.get(survey[i][1])+3)
                break;
            default : false;
        }
    }
    let mbtiCase = [...mbti]
    for(let i=0;i<=mbtiCase.length-2;i+=2){
        answer += mbtiCase.slice(i,i+2).sort((a,b)=>a[1]!=b[1]?b[1]-a[1]:false)[0][0]
    }
    return answer
}

/*
각 2차원 배열로 만든 후 `Map`을 이용했다. 물론 `Map`을 이용하지 않고 그냥 2차원 배열그대로 해도 되지만 코드가 더 길어질 것 같았다.
- 먼저 정담 변수 `answer`를 선언하고 각 성격유형의 2차원 배열을 만든 후 `Map`처리한다.
- `for`문을 돌아 각 번호 선택 때의 점수를 만들어 놓은 `Map`에서 찾아 점수를 더한다.
- 모든 설문이 끝난 후 계산된 값이 적용된 `Map`객체의 `mbti`를 배열로 바꾼다
- 다시 `for`문을 돌아 2칸씩잘라내어(처음 배열로 만들 때 2개씩 짝지어 놓았기 때문) `sort`를 이용하여 내림차순 시킨 후 앞에 값의 문자만 가져와 정답 배열에 더한다
- 이때 둘이 같은 값이면 그냥 둔다.(이유는 처음 객체를 짝을 지어 만들 때 정렬된 값으로 넣어놓았기 때문)

아래는 더 쉽게 풀이 된 정답이다

function solution(survey, choices) {
    const MBTI = {};
    const types = ["RT","CF","JM","AN"];

    types.forEach((type) =>
        type.split('').forEach((char) => MBTI[char] = 0)
    )

    choices.forEach((choice, index) => {
        const [disagree, agree] = survey[index];

        MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
    });

    return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
}


- 빈 객체와 성격유형 묶음 배열을 하나 만든 후 성격유형 묶음 배열을 `forEach`를 사용해 비어있는 객체에 각 성격 유형별 점수를 0으로 세팅해 놓는다.(이때 묶음을 차례대로 돌았으니 2개씩 묶여 있다)
- `choices`를 `forEach`로 돌며 `[disagree,agree]`비동의 동의의 성격유형을 배열로 `survey[index]`로 각각 담아낸다
- 이때 객체`MBTI`에서 `choices`의 값(선택한 숫자)을 4(모르겠음)를 기준으로 구분하여 해당하는 객체 값에 `choices`의 값에서 -4한 값을 더한다.
- 이유는 1번 선택지일시 3점을 얻는데 4-1이면 3점이기 때문! 하지만 뒤에 -4를 써놨으니 `Math.abs`를 이용해 절대값만을 더한다(양수)
- 이후 `types`를 `map`으로 도는데 인자의 값을 처음부터 `[a,b]`로 나누어 각 성격유형(`a`와`b`)을 객체에서 찾아 비교하여 해당 값을 나오도록 한다. 이후 `join`을 이용해 문자열
*/
