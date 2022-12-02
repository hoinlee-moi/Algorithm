function solution(board, moves) {
    let count = 0
    let answer = [];
    moves.forEach(val=>{
        for(let i=0;i<=board.length-1;i++){
            if(board[i][val-1]!=0){
                answer.push(board[i][val-1])
                board[i][val-1] = 0
                break;
            }
        }
    })
    while(true){
        for(let i=1;i<=answer.length-1;i++){
            if(answer[i]===answer[i-1]){
                count +=2
                answer.splice(i-1,2)
            }
        }
        if(answer.filter((v,i)=> v===answer[i+1]).length===0) break;
    }
    return count
}

/*
먼저 이중 반복문을 통해 몇번째 순서에서 뽑을건지 `moves`를 통해 첫번째 반복될 수 `i`를 정한다.
그 안에서 중첩으로 반복을 돌려 i번째의 숫자를 뽑아내기위해 `board`를 반복하여 `board`요소에서 `i`번째(`i-1`/인덱스는 `0`부터 시작이기때문)의 인형(숫자)이 무엇인지 가져온다.
가져오는 방법은 쭉 돌면서 0이면 빈칸이니 0이 아닐 때 그 숫자를 `answer` 이란 배열에 집어넣고 해당 `board`의 요소의 i번째 수는 0으로 변경 시킨다.
인형은 딱 한번 꺼내는 것이기 때문에 발견해서 꺼내자마자 `board` 반복은 `break;`시켜 다음번 i로 넘어갈 수 있도록 한다
이렇게 진행되고 나면 `answer`에 꺼낸 모든 인형이 들어가게 되는데 겹치는 인형 모두를 계속 제거할 수 있도록 `while`문을 쓴다.
`while`문은 계속 반복되며 반복 할 때마다 `for`문을 통해 앞의 인덱스와 뒤에 인덱스가 같을 경우 `splice`로 원본배열을 건드려 삭제시킨다.
삭제시키고 나면 또 삭제되며 붙는 경우가 생기는데`while`문을 통해 계속 반복됨으로 모두 삭제된다.
이후 `filter`를 통해 반복되는 값이 있는지 검사하고 없으면 `break;` 한다.
`while`이 반복되며 붙어있는 수를 삭제 시킬때마다 인형의 개수를 `count`를 2씩 상승시켰으니 `count`를 반환하면 정답

const transpose = matrix =>
    matrix.reduce(
        (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
        []
    );

const solution = (board, moves) => {
    const stacks = transpose(board).map(row =>
        row.reverse().filter(el => el !== 0)
    );
    const basket = [];
    let result = 0;

    for (const move of moves) {
        const pop = stacks[move - 1].pop();
        if (!pop) continue;
        if (pop === basket[basket.length - 1]) {
            basket.pop();
            result += 2;
            continue;
        }
        basket.push(pop);
    }

    return result;
};
*/
