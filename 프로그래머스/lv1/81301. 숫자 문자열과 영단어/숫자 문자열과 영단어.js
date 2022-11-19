function solution(s) {
    if(Number(s)) return Number(s)
    const numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    const answer = numArr.map((v,i)=> {
        let regEx = new RegExp(v, "gi")
        s=s.replace(regEx,i)
        return s
    })
    return +answer[9];
}


/*
일단 나는 먼저 그냥 숫자만 있다면 바로 반환하게 하여 예외처리를 해 두었고 이후 numArr를 생성 인덱스 위치 값과 알파벳 숫자 값이 똑같아서 알파벳 숫자만 적었다.
그리고 numArr을 반복을 돌아 replace한 값을 받도록 하였고 마지막 전부 돌게 되면 9번째 인덱스에 최종값이 들어오니 9번째 인덱스 값을 숫자로 return하도록 만들었다.

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}
위 식은 다른 사람이 split을 이용한 식인데 split을 어떻게 써먹을까 했었는데 정규식을 이용해 replace를 쓴 것처럼 해도 괜찮았을 것 같다. 
특히 join에 대해 더 자세한 공부가 없었어서 틀린 것 같다.
*/