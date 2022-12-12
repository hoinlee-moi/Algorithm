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