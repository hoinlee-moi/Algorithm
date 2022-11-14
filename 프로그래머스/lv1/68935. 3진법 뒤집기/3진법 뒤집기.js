function solution(n) {
    return Number.parseInt(n.toString(3).split("").reverse().join(""),3);
}

/*
내장함수인 parseInt을 사용했습니다.
n을 먼저 toString으로 3진법으로 변환 후 배열화(split)=>뒤집기(reverse) 후 join으로 다시 돌린 후 
pasreInt를 사용하여 다시 10진법으로 변환 하였습니다.
*/