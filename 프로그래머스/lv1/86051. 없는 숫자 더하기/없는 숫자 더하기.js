function solution(numbers) {
    var answer = 0;
    for(let i=1; i<=9; i++) {
        if(!numbers.includes(i)) answer += i
    }
    return answer;
}

/*
다른 사람 풀이를 보니까 바로 알아차린게 1~9까지의 모든 숫자의 합에서 배열에 있는 합을 빼버리면
배열에 없는 숫자들의 합이 도출되긴 한다!
function solution(numbers) {
    return 45 - numbers.reduce((acc,cur ) => acc + cur, 0);
}
*/