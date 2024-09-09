function solution(answers) {
    const answer = [];
    const man1 = [1, 2, 3, 4, 5];
    const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const count = [0, 0, 0];

    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === man1[i % man1.length]) count[0]++;
        if(answers[i] === man2[i % man2.length]) count[1]++;
        if(answers[i] === man3[i % man3.length]) count[2]++;
    }

    const max = Math.max(...count);
    for(let i = 0; i < count.length; i++) {
        if(max === count[i]) answer.push(i + 1);
    }

    return answer;
}
/*
많이 바보같이 풀긴 했다. 계산하기 위해서 반복문이 총 4번 돌아갔는데 repeat까지 포함하니 훨씬 더 많았다.
순서공식을 생각 안한게 한이다.. 정말
일다 내 풀이는 각각의 패턴들이 모두 똑같이 순환하는 값을 구해서 repeat으로 다 붙인 다음 splice로 정답배열(answers)을 제거해가며 풀었다.
최소로 겹치는 수가 40개라 40개씩 잘라내서 비교했는데 더 좋은 방법이 아래 있었다.


먼저 반복되는 패턴을 배열로 둔다(이 부분은 나도 처음에 시도를 했다.) 그 후 각 반복되는 길이만큼 i를 나눈 나머지값을 도출하면
그 반복되는 패턴의 순번으로 비교할 수 있다.
그걸 생각 못한 게 너무 아쉬운 것 같다.
*/