function solution(s) {
    var answer = s.split(" ").map(v=>{
        let word = ''
        for(let i=0; i<=v.length-1;i++){
            if(i===0)word += v[0].toUpperCase()
            if(v[i]!=" "&&i!=0)word += v[i].toLowerCase()
        }
        return word
    });
    return answer.join(" ");
}

/*
여러가지 방법이 있지만 띄어쓰기 구분을 위해 split과 join을 사용하여 배열화 시켜 각 배열 원소들로 대,소문자 화를 진행했습니다.
*/