function solution(babbling) {
    const word = ["aya", "ye", "woo", "ma"];
    var answer = babbling.map(v=>{
        for(const i of word) {
            if(v.includes(i)) {
                const reg = new RegExp(i)
                v = v.replace(reg," ")
            }
        }
        return v
    });
    const babblingArr = answer.filter(v=> v===" "||v=== "  "||v=== "   " ||v=== "    ")
    return babblingArr.length;
}

/*
먼저 옹알이가 가능한 문자들을 검사를 위해 배열로 만들어 놓는다.
이후 배열함수 map을 사용하여 주어진 babbling을 전부 검사, 각 원소마다 word를 for문으로 돌려 검사를 하고 문자 안에 가능한 옹알이 단어가 있다면 replace를 이용해 값을 제거 한다.
이 때 ""빈값으로 변경할시 중간 단어가 삭제되며 합쳐진 단어에서 옹알이 가능한 단어가 나오면 처리가 돼버리기 때문에 " "(공백)을 하나 넣어 분리 시킨다.
제한 조건 중 각 원소에서 옹알이 가능한 단어는 최대 한번씩만 등장하기 때문에 공백도 최대 4개까지만 나올 수 있다.
해서 검사가 모두 끝난 배열에 filter를 사용하여 공백만 있는 원소를 골라 내고 이 배열의 길이를 반환하면 발음이 가능한 단어의 개수가 나온다.
*/