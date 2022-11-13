process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let answer=""
    for(let i=1;i<=b;i++) {
        for(let j=1;j<=a;j++) {
            answer += "*"
        }
        answer += "\n"
    }
    console.log(answer)
});
/*
나는 먼저 이중 for문을 이용해 가로로 *을 먼저 전부 찍은 다음 \n을 통해 다음 줄로 넘기는 식을
세로번 반복하도록 했는데 또 repeat란 함수를 까먹고 있었다...
반복해서 입력하는 게 있으면 항상 repeat이란 함수를 생각해보도록 하자!
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }
});
*/